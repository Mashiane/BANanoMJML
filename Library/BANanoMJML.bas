B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=Class
Version=8.5
@EndOfDesignText@
Sub Class_Globals
	Type FileObject(FileName As String, FileDate As String, FileSize As Long, FileType As String)
	Private body As BANanoElement
	Private banano As BANano  'ignore
	Public Beautify As Boolean
	Public Minify As Boolean
	Public ValidationLevel As String
	Private options As Map
	Private nameof As String
	Private minifyOptions As Map
	Public minifyCSS As Boolean
	Public removeEmptyAttributes As Boolean
	Public collapseWhitespace As Boolean
	Private emailframe As BANanoElement
End Sub

'Initializes the object. You can add parameters to this method if needed.
Public Sub Initialize(nameit As String)
	nameof = nameit.tolowercase
	body.Initialize("#body")
	body.Empty
	body.Append($"<iframe id="emailframe" frameborder="0"></iframe>"$)
	body.Append($"<div id="template" style="display:none;"></div>"$)
	options.Initialize 
	minifyOptions.Initialize 
	minifyCSS = True
	removeEmptyAttributes = True
	collapseWhitespace = True
	Minify = True
	Beautify = False
	emailframe.Initialize("#emailframe")
	Dim istyle As Map = CreateMap("position":"fixed", "top":0, "left":0, "bottom":0, "right":0, "width":"100%", "height":"100%", "border":"none")
	istyle.Put("margin",0)
	istyle.Put("padding",0)
	istyle.Put("overflow","hidden")
	istyle.Put("z-index",999999)
	emailframe.SetStyle(banano.ToJson(istyle))
End Sub

#if PHP
function SendMJMLEmail($from,$to,$subject,$msg,$fromname) {
	$hdr  = 'MIME-Version: 1.0' . "\r\n";
	$hdr .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$hdr .= 'X-Mailer:PHP/' . phpversion() . "\r\n";
	$hdr .= 'From: '.$fromname.'<'.$from.'>' . "\r\n";
	$extra = '-f '. $from; 
    if (mail($to, $subject, $msg, $hdr, $extra)) {
		$resp['status'] = "success";
		$output = json_encode($resp);
		echo($output);
	} else {
		$resp['status'] = "failure";
		$output = json_encode($resp);
		echo($output);
    }
}
#End If

'get template
Sub getTemplate As String
	Dim tmp As BANanoElement
	tmp.Initialize("#template")
	Dim stmp As String = tmp.GetHTML
	Return stmp
End Sub

'get the compiled html
Sub getHTML As String
	minifyOptions.Put("minifyCSS", minifyCSS)
	minifyOptions.Put("removeEmptyAttributes", removeEmptyAttributes)
	minifyOptions.Put("collapseWhitespace", collapseWhitespace)
	options.Put("minifyOptions", minifyOptions)
	If Beautify Then options.Put("beautify", True)
	If Minify Then options.Put("minify", True)
	'get the overall template for our email
	Dim stmp As String = getTemplate
	'lets compile it to HTML
	Dim window As BANanoObject = banano.Window
	Dim mjml As BANanoObject = window.getfield("mjml")
	Dim mjml2html As BANanoObject = mjml.GetField("default")
	Dim Response As Map = mjml2html.Execute(Array(stmp, options))
	Dim shtml As String = Response.get("html")
	Return shtml
End Sub

'preview on iframe
Sub Preview
	'get the html content for the email
	Dim shtml As String = getHTML
	'
	emailframe.GetField("contentWindow").GetField("document").RunMethod("open", Null)
	emailframe.GetField("contentWindow").GetField("document").RunMethod("write", Array(shtml))
	emailframe.GetField("contentWindow").GetField("document").RunMethod("close", Null)
End Sub
