B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
Sub Process_Globals
	Public MJMLApp As BANanoMJML
	Public BANano As BANano
	Private companyheader As MJSection
	Private emailbody As MJBody
	Private icons As MJSection
	Private imageheader As MJSection
	Private introductiontext As MJSection
	Private socialicons As MJSection
	Private twocolumnsection As MJSection
End Sub

Sub Init
	'initialize the app
	MJMLApp.Initialize("myemail")
	MJMLApp.Minify = False
	MJMLApp.minifyCSS = False
	MJMLApp.Beautify = True
		
	'load the main layout
	BANano.LoadLayout("#template", "myemail")
	'load the ch to 
	companyheader.Element.LoadLayout("ch")
	'
	'load the image header
	imageheader.Element.LoadLayout("ih")
	'
	'load the intro text
	introductiontext.Element.LoadLayout("introtext")
	'
	'load two columns
	twocolumnsection.Element.LoadLayout("section1")
	'
	'load icons
	icons.Element.LoadLayout("iconsx")
	'
	'load social
	socialicons.Element.LoadLayout("social")
	
	MJMLApp.Preview
	
	'save the email on root - if one needs do
	MJMLApp.Save
	'
	'send the email, build the map to pass to inline PHP
	Dim es As Map = MJMLApp.BuildEmail("mbanga.anele@gmail.com", "mbanga.anele@gmail.com", "BANanoMJML Email", MJMLApp.html)
	Dim email As String = BANano.CallInlinePHPWait("SendMJMLEmail", es)
	Dim response As String = MJMLApp.GetEmailResponse(email)
	Select Case response
	Case "success"
		BANano.Msgbox("Email sent successfully!")
	Case Else
		BANano.Msgbox("An error was experienced sending the email!")
	End Select
End Sub