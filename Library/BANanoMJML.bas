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
	Public MailFrom As String
	Public MailRecipients As String
	Public MailSubject As String
	Public MailCC As String
End Sub

'Initializes the object. You can add parameters to this method if needed.
Public Sub Initialize(nameit As String)
	nameof = nameit.tolowercase
	body.Initialize("#body")
	body.Empty
	body.Append($"<iframe id="emailframe" style="width=100%;height=100%" width="100%" height="100%" frameborder="0" src="./${nameit}.html"></iframe>"$)
	body.Append($"<div id="placeholder" style="display:none;"></div>"$)
	body.Append($"<div id="template" style="display:none;"></div>"$)
	options.Initialize 
	minifyOptions.Initialize 
	minifyCSS = True
	removeEmptyAttributes = True
	collapseWhitespace = True
	Minify = True
	Beautify = False
End Sub

'send email
Sub Send As BANanoPromise  'ignore
	'get the html content for the email
	Dim shtml As String = getHTML
	Return SendHTMLEmail(MailFrom, MailRecipients, MailCC, MailSubject, shtml)
End Sub

private Sub SendHTMLEmail(sfrom As String, sto As String, scc As String, sSubject As String, smsg As String) As BANanoPromise
	smsg = smsg.Replace(QUOTE, "'")
	Dim se As Map = CreateMap()
	se.put("from", sfrom)
	se.put("to", sto)
	se.put("cc", scc)
	se.put("subject", sSubject)
	se.put("msg", smsg)
	Dim bp As BANanoPromise  = banano.CallInlinePHPWait("SendHTMLEmail", se)
	Return bp
End Sub

'append placeholder to body
Sub BodyFromPlaceholder  'ignore
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

'save to server
Sub Save  'ignore
	'get the html content for the email
	Dim shtml As String = getHTML
	'
	Dim bPHP As BANanoPHP
	bPHP.Initialize
	banano.CallInlinePHPWait(bPHP.FILE_WRITE, bPHP.BuildWriteFile($"./${nameof}.html"$, shtml))
End Sub