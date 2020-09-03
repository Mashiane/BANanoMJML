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
	MJMLApp.Initialize("starwarsdroids")
	BANano.LoadLayout("#template", "starwarsdroids")
	
	Dim ebody As BANanoElement
	ebody.Initialize("#ebody")
	ebody.append($"<mj-section background-color="#000000" background-url="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1REDbg.jpg" background-repeat="no-repeat" padding-left="20px">
      <mj-column>
        <mj-spacer height="37px"></mj-spacer>
        <mj-image src="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1_BB-9E-text.png" width="196px" alt="Buy BB-9E" href="https://www.sphero.com/starwars/bb9e"></mj-image>
        <mj-text font-size="14px" align="left" color="#ffffff" line-height="2" font-family="Helvetica Neue">There’s a new disturbance in the Force. BB-9E™ is a menacing Astromech Droid of the First Order. This vigilant and intimidating Droid is always on high alert. This is NOT the Droid you’re looking for… it’s the Droid that’s looking for you.</mj-text>
        <mj-spacer height="30px"></mj-spacer>
        <mj-image src="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1_BB-9E-button.png" width="129px" alt="Buy BB-9E" href="https://store.sphero.com/products/bb-9e"></mj-image>
      </mj-column>
      <mj-column>
        <mj-spacer height="60px"></mj-spacer>
        <mj-image src="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1_bb9e.png" href="https://www.sphero.com/starwars/bb9e" alt="Get the new BB-9E" width="310px" padding="0px"></mj-image>
      </mj-column>
    </mj-section>
    <mj-raw>
      <!-- BB-8 Section -->
    </mj-raw>
    <mj-section background-color="#000000" background-url="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1_OrangeBG.jpg" background-repeat="no-repeat" padding-top="0" padding-left="20px">
      <mj-column>
        <mj-spacer height="85px"></mj-spacer>
        <mj-image src="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1_bb8-text.png" width="196px" alt="Buy BB-8" href="https://www.sphero.com/starwars/bb8"></mj-image>
        <mj-text font-size="14px" align="left" color="#ffffff" line-height="2" font-family="Helvetica Neue">Orange and white. One of a kind. BB-8™ is the loyal Astromech Droid of Resistance pilot Poe Dameron. The specially designed technology in this unique BB unit makes it invaluable to the Resistance. This Droid is full of features and will stop at
          nothing to complete its mission.</mj-text>
        <mj-spacer height="50px"></mj-spacer>
        <mj-image src="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1_bb8-button.png" width="129px" href="https://store.sphero.com/products/bb-8-with-trainer" alt="Buy BB-8"></mj-image>
      </mj-column>
      <mj-column>
        <mj-spacer height="55px"></mj-spacer>
        <mj-image src="https://dmmedia.sphero.com/email-marketing/Star-Wars/Star_Wars_Launch_Email_1_bb8.png" href="https://www.sphero.com/starwars/bb8" width="310px" alt="Get the new BB-8" padding="0px"></mj-image>
        <mj-spacer height="155px"></mj-spacer>
      </mj-column>
    </mj-section>
    <mj-raw>
      <!-- Bottom Bar -->
    </mj-raw>
    <mj-section background-color="#424143" padding-right="10px" padding-top="0" padding-bottom="0px">
      <mj-column width="33.33333333333333%"></mj-column>
      <mj-column width="33.33333333333333%">
        <mj-image src="https://dmmedia.sphero.com/email-marketing/Star-Wars/sphero-logo-bottom-gray.png" href="https://www.sphero.com" width="134px" align="center"></mj-image>
      </mj-column>
      <mj-column width="33.33333333333333%">
        <mj-text align="center" color="#ffffff" font-size="10px">&copy; & &trade; Lucasfilm Ltd.</mj-text>
      </mj-column>
    </mj-section>"$)
	
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