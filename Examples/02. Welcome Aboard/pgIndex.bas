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
	'
	'create <mjml>
	Dim app As MJApp
	app.Initialize(Me, "mjapp", "mjapp")
	app.AddToParent("template")
	'
	'create the body
	Dim body As MJBody
	body.Initialize(Me, "mjbody", "mjbody")
	body.BackgroundColor = "#ffffff"
	body.FontSize = "13px"
	'add the body to the <mjml>
	body.AddToParent("mjapp")
	
	'create row 1
	Dim r1 As MJSection
	r1.Initialize(Me, "r1", "r1")
	r1.BackgroundColor = "#ffffff"
	r1.PaddingBottom = "0px"
	r1.PaddingTop = "0px"
	r1.AddToParent("mjbody")
	
	'create r1c1
	Dim r1c1 As MJColumn
	r1c1.Initialize(Me, "r1c1", "r1c1")
	r1c1.VerticalAlign = "top"
	r1c1.Width = "100%"
	r1c1.AddToParent("r1")
	
	'add image inside r1c1
	Dim r1c1image As MJImage
	r1c1image.Initialize(Me, "r1c1image", "r1c1image")
	r1c1image.Src = "http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1rw.png"
	r1c1image.Alt = ""
	r1c1image.Align = "center"
	r1c1image.Border = "none"
	r1c1image.Width = "600px"
	r1c1image.PaddingLeft = "0px"
	r1c1image.PaddingRight = "0px"
	r1c1image.PaddingBottom = "0px"
	r1c1image.PaddingTop = "0"
	r1c1image.AddToParent("r1c1")
	
	'r2
	Dim r2 As MJSection
	r2.Initialize(Me, "r2", "r2")
	r2.BackgroundColor = "#009FE3"
	r2.VerticalAlign = "top"
	r2.PaddingBottom = "0px"
	r2.PaddingTop = "0"
	r2.AddToParent("mjbody")
	
	'
	Dim r2c1 As MJColumn
	r2c1.Initialize(Me, "r2c1", "r2c1")
	r2c1.VerticalAlign = "top"
	r2c1.Width ="100%"
	r2c1.AddToParent("r2")
	
	'
	Dim r2c1text As MJText
	r2c1text.Initialize(Me, "r2c1text", "r2c1text")
	r2c1text.Align = "left"
	r2c1text.Color = "#ffffff"
	r2c1text.FontSize = "45px" 
	r2c1text.FontWeight = "bold"
	r2c1text.FontFamily = "open Sans Helvetica, Arial, sans-serif"
	r2c1text.PaddingLeft = "25px"
	r2c1text.PaddingRight = "25px"
	r2c1text.PaddingBottom = "30px"
	r2c1text.PaddingTop = "50px"
	r2c1text.Caption = "Welcome aboard"
	r2c1text.AddToParent("r2c1")
	
	'
	Dim r3 As MJSection
	r3.Initialize(Me, "r3", "r3")
	r3.BackgroundColor = "#009fe3"
	r3.PaddingBottom = "20px"
	r3.PaddingTop ="20px"
	r3.AddToParent("mjbody")
	
	'
	Dim r3c1 As MJColumn
	r3c1.Initialize(Me, "r3c1", "r3c1")
	r3c1.VerticalAlign = "middle"
	r3c1.Width ="100%"
	r3c1.AddToParent("r3")
	
	'
	Dim r3c1text1 As MJText
	r3c1text1.Initialize(Me, "r3c1text1", "r3c1text1")
	r3c1text1.Align = "left"
	r3c1text1.Color = "#ffffff"
	r3c1text1.FontSize = "22px"
	r3c1text1.FontFamily = "open Sans Helvetica, Arial, sans-serif"
	r3c1text1.PaddingLeft = "25px"
	r3c1text1.PaddingRight = "25px"
	r3c1text1.Caption = $"<span style="color:#FEEB35">Dear [[FirstName]]</span><br /><br /> Welcome To [[CompanyName]]"$
	r3c1text1.AddToParent("r3c1")
	
	'
	Dim r3c1text2 As MJText
	r3c1text2.Initialize(Me, "r3c1text2", "r3c1text2")
	r3c1text2.align = "left"
	r3c1text2.color = "#ffffff"
	r3c1text2.fontsize = "15px"
	r3c1text2.fontfamily = "open Sans Helvetica, Arial, sans-serif"
	r3c1text2.paddingleft = "25px"
	r3c1text2.paddingright = "25px"
	r3c1text2.Caption = $"We&apos;re really excited you&apos;ve decided to give us a try. In case you have any questions, feel free To reach out to us at [[ContactEmail]]. You can login To your account with your username [[UserName]]"$
	r3c1text2.AddToParent("r3c1")
	
	'
	Dim r3c1btn As MJButton
	r3c1btn.Initialize(Me, "r3c1btn", "r3c1btn")
	r3c1btn.align = "left"
	r3c1btn.fontsize = "22px"
	r3c1btn.fontweight = "bold"
	r3c1btn.backgroundcolor = "#ffffff"
	r3c1btn.borderradius = "10px"
	r3c1btn.color = "#1AA0E1"
	r3c1btn.fontfamily = "open Sans Helvetica, Arial, sans-serif"
	r3c1btn.Caption = "Login"
	r3c1btn.AddToParent("r3c1")
	
	'
	Dim r3c1text3 As MJText
	r3c1text3.Initialize(Me, "r3c1text3", "r3c1text3")
	r3c1text3.align = "left"
	r3c1text3.color = "#ffffff"
	r3c1text3.fontsize = "15px"
	r3c1text3.fontfamily = "open Sans Helvetica, Arial, sans-serif"
	r3c1text3.paddingleft = "25px"
	r3c1text3.paddingright = "25px"
	r3c1text3.Caption = "Thanks, <br /> The [[CompanyName]] Team"
	r3c1text3.AddToParent("r3c1")
	
	
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