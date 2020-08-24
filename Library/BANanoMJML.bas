B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=Class
Version=8.5
@EndOfDesignText@
Sub Class_Globals
	Type FileObject(FileName As String, FileDate As String, FileSize As Long, FileType As String)
	Private body As BANanoElement
	Private banano As BANano
End Sub

'Initializes the object. You can add parameters to this method if needed.
Public Sub Initialize
	body.Initialize("#body")
	body.Empty
	body.Append($"<iframe id="emailframe" width="100%" height="100%" frameborder="0" src="./myemail.html"></iframe>"$)
	body.Append($"<div id="placeholder" style="display:none"></div>"$)
	body.Append($"<div id="template" style="display:none"></div>"$)
End Sub

'append placeholder to body
Sub BodyFromPlaceholder
	Private ph As BANanoElement
	ph.Initialize("#placeholder")
	Dim sph As String = ph.GetHTML
	body.Append(sph)
End Sub

'get template
Sub getTemplate As String
	Dim tmp As BANanoElement
	tmp.Initialize("#template")
	Dim stmp As String = tmp.GetHTML
	Return stmp
End Sub

'get the compiled html
Sub getHTML As String
	'get the overall template for our email
	Dim stmp As String = getTemplate
	'lets compile it to HTML
	Dim window As BANanoObject = banano.Window
	Dim mjml As BANanoObject = window.getfield("mjml")
	Dim mjml2html As BANanoObject = mjml.GetField("default")
	Dim Response As Map = mjml2html.Execute(Array(stmp))
	Dim shtml As String = Response.get("html")
	Return shtml
End Sub

'preview the email
Sub Serve
	Dim shtml As String = getHTML
	Dim frameContent As String = $"data:text/html,${shtml}"$
	Dim xFrame As BANanoElement
	xFrame.Initialize("#emailframe")
	xFrame.SetAttr("src", frameContent)
End Sub

'save to server
Sub Save
	'get the html content for the email
	Dim shtml As String = getHTML
	'
	Dim bPHP As BANanoPHP
	bPHP.Initialize
	banano.CallInlinePHPWait(bPHP.FILE_WRITE, bPHP.BuildWriteFile("./myemail.html", shtml))
End Sub