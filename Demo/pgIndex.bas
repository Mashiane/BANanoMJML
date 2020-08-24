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
	MJMLApp.Initialize
	'load the main layout
	BANano.LoadLayout("#template", "myemail")
	'load the ch to 
	companyheader.Element.LoadLayout("ch")
	'get the html
	Dim shtml As String = MJMLApp.HTML
	Log(shtml)
End Sub