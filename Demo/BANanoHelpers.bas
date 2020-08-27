B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
Sub Process_Globals
	Private BANano As BANano
End Sub

''on file change
Sub UploadFileWait(e As BANanoEvent) As BANanoPromise
	Dim prom As BANanoPromise
	'get selected file(s)
	Dim fileList As List = BANanoShared.GetFileListFromTarget(e)
	If fileList.size = 0 Then Return prom
	
	'get the file to upload
	Dim fileO As Map = fileList.Get(0)
	'start uploading the file
	Dim fd As BANanoObject
	fd.Initialize2("FormData", Null)
	fd.RunMethod("append", Array("upload", fileO))
	'
	prom = BANano.CallAjaxWait("./assets/upload.php", "POST", "", fd, True, Null)
	Return prom
End Sub


Sub SendEmail(sfrom As String, sto As String, scc As String, sSubject As String, smsg As String) As Boolean
	Dim Se As Map = CreateMap()
	Se.put("from", sfrom)
	Se.put("to", sto)
	Se.put("cc", scc)
	Se.put("subject", sSubject)
	Se.put("msg", smsg)
	Dim Result As String = BANano.CallInlinePHPWait("SendEmail", Se)
	Dim ResultM As Map = BANano.FromJSON(Result)
	Dim Response As String = ResultM.Get("response")
	Select Case Response
		Case "failure"
			Return False
		Case Else
			Return True
	End Select
End Sub


'save html file to server server
Sub SaveHTMLFile(fileName As String, content As String)  'ignore
	Dim bPHP As BANanoPHP
	bPHP.Initialize
	BANano.CallInlinePHPWait(bPHP.FILE_WRITE, bPHP.BuildWriteFile($"./${fileName}.html"$, content))
End Sub


'SendMJMLEmail
Sub SendMJMLEmail(MailFromName As String, MailFrom As String, MailSubject As String, MailRecipients As String, MailHTML As String) As BANanoPromise  'ignore
	Dim se As Map = CreateMap()
	se.put("from", MailFrom)
	se.put("to", MailRecipients)
	se.put("subject", MailSubject)
	se.put("msg", MailHTML)
	se.Put("fromname", MailFromName)
	Dim bp As BANanoPromise = BANano.CallInlinePHPWait("SendMJMLEmail", se)
	Return bp
End Sub