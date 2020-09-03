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
End Sub

Sub Init
	'initialize the library
	MJMLApp.Initialize("welcomeaboard")
	BANano.LoadLayout("#template", "welcomeemail")
	
	MJMLApp.Preview
	
	'save the email on root - if one needs do
	'MJMLApp.Save
	'
	'send the email, build the map to pass to inline PHP
	'Dim es As Map = MJMLApp.BuildEmail("mbanga.anele@gmail.com", "mbanga.anele@gmail.com", "BANanoMJML Email", MJMLApp.html)
	'Dim email As String = BANano.CallInlinePHPWait("SendMJMLEmail", es)
	'Dim response As String = MJMLApp.GetEmailResponse(email)
	'Select Case response
	'Case "success"
	'	BANano.Msgbox("Email sent successfully!")
	'Case Else
	'	BANano.Msgbox("An error was experienced sending the email!")
	'End Select
End Sub