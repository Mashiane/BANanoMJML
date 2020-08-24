B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=Class
Version=7
@EndOfDesignText@
#IgnoreWarnings:12
'Custom BANano View class


#DesignerProperty: Key: Caption, DisplayName: Caption, FieldType: String, DefaultValue: , Description: Text on the element
#DesignerProperty: Key: Classes, DisplayName: Classes, FieldType: String, DefaultValue: , Description: Classes added to the HTML tag.
#DesignerProperty: Key: Style, DisplayName: Style, FieldType: String, DefaultValue: , Description: Styles added to the HTML tag. Must be a json String.
#DesignerProperty: Key: Attributes, DisplayName: Attributes, FieldType: String, DefaultValue: , Description: Attributes added to the HTML tag. Must be a json String.
#DesignerProperty: Key: Align, DisplayName: Align, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Base, DisplayName: Base, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: CssClass, DisplayName: CssClass, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Hamburger, DisplayName: Hamburger, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoAlign, DisplayName: IcoAlign, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoClose, DisplayName: IcoClose, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoColor, DisplayName: IcoColor, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoFontFamily, DisplayName: IcoFontFamily, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoFontSize, DisplayName: IcoFontSize, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoLineHeight, DisplayName: IcoLineHeight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoOpen, DisplayName: IcoOpen, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoPadding, DisplayName: IcoPadding, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoPaddingBottom, DisplayName: IcoPaddingBottom, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoPaddingLeft, DisplayName: IcoPaddingLeft, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoPaddingRight, DisplayName: IcoPaddingRight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoPaddingTop, DisplayName: IcoPaddingTop, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoTextDecoration, DisplayName: IcoTextDecoration, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IcoTextTransform, DisplayName: IcoTextTransform, FieldType: String, DefaultValue:  , Description: 

Sub Class_Globals
Private BANano As BANano 'ignore
Private mName As String 'ignore
Private mEventName As String 'ignore
Private mCallBack As Object 'ignore
Private mTarget As BANanoElement 'ignore
Private mElement As BANanoElement 'ignore
Private mClasses As String = ""
Private mStyle As String = ""
Private mAttributes As String = ""
Private mCaption As String = ""
Private classList As Map
Private styleList As Map
Private attributeList As Map
Private mTagName As String = "mj-navbar"
Private sbText As StringBuilder
Public bindings As Map
Private stAlign As String = ""
Private stBase As String = ""
Private stCssClass As String = ""
Private stHamburger As String = ""
Private stIcoAlign As String = ""
Private stIcoClose As String = ""
Private stIcoColor As String = ""
Private stIcoFontFamily As String = ""
Private stIcoFontSize As String = ""
Private stIcoLineHeight As String = ""
Private stIcoOpen As String = ""
Private stIcoPadding As String = ""
Private stIcoPaddingBottom As String = ""
Private stIcoPaddingLeft As String = ""
Private stIcoPaddingRight As String = ""
Private stIcoPaddingTop As String = ""
Private stIcoTextDecoration As String = ""
Private stIcoTextTransform As String = ""
End Sub

'initialize the custom view
Public Sub Initialize (CallBack As Object, Name As String, EventName As String)
mName = Name.ToLowerCase
mEventName = EventName.ToLowerCase
mCallBack = CallBack
classList.Initialize
styleList.Initialize
attributeList.Initialize
sbText.Initialize
End Sub

'Create view in the designer
Public Sub DesignerCreateView (Target As BANanoElement, Props As Map)
mTarget = Target
If Props <> Null Then
mClasses = Props.Get("Classes")
mAttributes = Props.Get("Attributes")
mStyle = Props.Get("Style")
mCaption = Props.Get("Caption")
stAlign = Props.Get("Align")
stBase = Props.Get("Base")
stCssClass = Props.Get("CssClass")
stHamburger = Props.Get("Hamburger")
stIcoAlign = Props.Get("IcoAlign")
stIcoClose = Props.Get("IcoClose")
stIcoColor = Props.Get("IcoColor")
stIcoFontFamily = Props.Get("IcoFontFamily")
stIcoFontSize = Props.Get("IcoFontSize")
stIcoLineHeight = Props.Get("IcoLineHeight")
stIcoOpen = Props.Get("IcoOpen")
stIcoPadding = Props.Get("IcoPadding")
stIcoPaddingBottom = Props.Get("IcoPaddingBottom")
stIcoPaddingLeft = Props.Get("IcoPaddingLeft")
stIcoPaddingRight = Props.Get("IcoPaddingRight")
stIcoPaddingTop = Props.Get("IcoPaddingTop")
stIcoTextDecoration = Props.Get("IcoTextDecoration")
stIcoTextTransform = Props.Get("IcoTextTransform")
End If

AddAttr("align", stAlign)
AddAttr("base", stBase)
AddAttr("css-class", stCssClass)
AddAttr("hamburger", stHamburger)
AddAttr("ico-align", stIcoAlign)
AddAttr("ico-close", stIcoClose)
AddAttr("ico-color", stIcoColor)
AddAttr("ico-font-family", stIcoFontFamily)
AddAttr("ico-font-size", stIcoFontSize)
AddAttr("ico-line-height", stIcoLineHeight)
AddAttr("ico-open", stIcoOpen)
AddAttr("ico-padding", stIcoPadding)
AddAttr("ico-padding-bottom", stIcoPaddingBottom)
AddAttr("ico-padding-left", stIcoPaddingLeft)
AddAttr("ico-padding-right", stIcoPaddingRight)
AddAttr("ico-padding-top", stIcoPaddingTop)
AddAttr("ico-text-decoration", stIcoTextDecoration)
AddAttr("ico-text-transform", stIcoTextTransform)
AddClass(mClasses)
setAttributes(mAttributes)
setStyles(mStyle)

'build and get the element
Dim strHTML As String = ToString
mElement = mTarget.Append(strHTML).Get("#" & mName)
'add events for the custom view, if any

End Sub

'return the generated html
Sub ToString As String
'build the 'class' attribute
Dim className As String = BANanoShared.JoinMapKeys(classList, " ")
AddAttr("class", className)
'build the 'style' attribute
Dim styleName As String = BANanoShared.BuildStyle(styleList)
AddAttr("style", styleName)
'build element internal structure
Dim iStructure As String = BANanoShared.BuildAttributes(attributeList)
iStructure = iStructure.trim
Dim rslt As String = $"<${mTagName} id="${mName}" ${iStructure}>${mCaption}${sbText.ToString}</${mTagName}>"$
Return rslt
End Sub

'add a break
Sub AddBR
sbText.Append("<br>")
End Sub

'add a horizontal rule
Sub AddHR
sbText.Append("<hr>")
End Sub

'returns the BANanoElement
public Sub getElement() As BANanoElement
Return mElement
End Sub

'returns the tag id
public Sub getID() As String
Return mName
End Sub

'add the element to the parent
public Sub AddToParent(targetID As String)
mTarget = BANano.GetElement("#" & targetID.ToLowerCase)
DesignerCreateView(mTarget, Null)
End Sub

'remove the component
public Sub Remove()
mElement.Remove
BANano.SetMeToNull
End Sub

'trigger an event
public Sub Trigger(event As String, params() As String)
If mElement <> Null Then
mElement.Trigger(event, params)
End If
End Sub

'add a class
public Sub AddClass(varClass As String)
If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return
If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass)
varClass = varClass.trim
if varClass = "" Then Return
If mElement <> Null Then mElement.AddClass(varClass)
Dim mxItems As List = BANanoShared.StrParse(" ", varClass)
For Each mt As String In mxItems
classList.put(mt, mt)
Next
End Sub

'add a class on condition
public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean)
If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return
if varShouldBe <> varCondition Then Return
If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return
If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass)
varClass = varClass.trim
if varClass = "" Then Return
If mElement <> Null Then mElement.AddClass(varClass)
Dim mxItems As List = BANanoShared.StrParse(" ", varClass)
For Each mt As String In mxItems
classList.put(mt, mt)
Next
End Sub

'add a style
public Sub AddStyle(varProp As string, varStyle As String)
If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return
If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle)
If mElement <> Null Then
Dim aStyle As Map = CreateMap()
aStyle.put(varProp, varStyle)
Dim sStyle As String = BANano.ToJSON(aStyle)
mElement.SetStyle(sStyle)
End If
styleList.put(varProp, varStyle)
End Sub

'add an attribute
Public Sub AddAttr(varProp As String, varValue As String) 
If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
'we are adding a boolean 
If BANano.IsBoolean(varValue) Then 
If varValue = True Then  
attributeList.put(varProp, varValue) 
If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
End If 
Else 
'we are adding a string 
If varValue.StartsWith(":") Then 
If varValue.StartsWith("$") Then 
attributeList.put(varProp, varValue) 
If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
Else 
Dim rname As String = BANanoShared.MidString2(varValue, 2) 
If rname.Contains(".") = False Then bindings.Put(rname, Null) 
attributeList.put($":${varProp}"$, rname) 
If mElement <> Null Then mElement.SetAttr($":${varProp}"$, rname) 
End If 
Else 
'does not start with : 
If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
attributeList.put(varProp, varValue) 
Select Case varProp 
Case "v-model", "v-show", "v-if", "required", "disabled", "readonly" 
bindings.Put(varValue, Null) 
End Select 
End If 
End If 
Return 
End Sub

'returns the class names
Public Sub getClasses() As String
Dim sbClass As StringBuilder
sbClass.Initialize
For each k As String in classList.Keys
sbClass.Append(k).Append(" ")
Next
mClasses = sbClass.ToString
Return mClasses
End Sub

'set the style use a valid JSON string with {}
public Sub setStyle(varStyle As String)
If mElement <> Null Then
mElement.SetStyle(varStyle)
End If
Dim mres as Map = BANano.FromJSON(varStyle)
For each k As String in mres.Keys
Dim v As String = mres.Get(k)
styleList.put(k, v)
Next
End Sub

'returns the style as JSON
public Sub getStyle() As String
Dim sbStyle As StringBuilder
sbStyle.Initialize
sbStyle.Append("{")
For each k As String in styleList.Keys
Dim v As String = styleList.Get(k)
sbStyle.Append(k).Append(":").Append(v).Append(",")
Next
sbStyle.Append("}")
mStyle = sbStyle.ToString
Return mStyle
End Sub

'sets the attributes
public Sub setAttributes(varAttributes As String)
Dim mxItems As List = BANanoShared.StrParse(";", varAttributes)
For Each mt As String In mxItems
Dim k As String = BANanoShared.MvField(mt,1,"=")
Dim v As String = BANanoShared.MvField(mt,2,"=")
If mElement <> Null Then mElement.SetAttr(k, v)
attributeList.put(k, v)
Next
End Sub

'sets the styles from the designer
public Sub setStyles(varStyles As String)
Dim mxItems As List = BANanoShared.StrParse(",", varStyles)
For Each mt As String In mxItems
Dim k As String = BANanoShared.MvField(mt,1,":")
Dim v As String = BANanoShared.MvField(mt,2,":")
AddStyle(k, v)
Next
End Sub

'returns the attributes
public Sub getAttributes() As String
Dim sbAttr As StringBuilder
sbAttr.Initialize
For each k As String in attributeList.Keys
Dim v As String = attributeList.Get(k)
sbAttr.Append(k).Append("=").Append(v).Append(";")
Next
mAttributes = sbAttr.ToString
Return mAttributes
End Sub

'sets the caption
public Sub setCaption(varCaption As String)
If mElement <> Null Then
mElement.SetHTML(BANano.SF(varCaption))
End If
mCaption = varCaption
End Sub

'returns the caption
public Sub getCaption() As String
Return mCaption
End Sub

public Sub setAlign(varAlign As String)
AddAttr("align", varAlign)
stAlign = varAlign
End Sub

public Sub getAlign() As String
Return stAlign
End Sub

public Sub setBase(varBase As String)
AddAttr("base", varBase)
stBase = varBase
End Sub

public Sub getBase() As String
Return stBase
End Sub

public Sub setCssClass(varCssClass As String)
AddAttr("css-class", varCssClass)
stCssClass = varCssClass
End Sub

public Sub getCssClass() As String
Return stCssClass
End Sub

public Sub setHamburger(varHamburger As String)
AddAttr("hamburger", varHamburger)
stHamburger = varHamburger
End Sub

public Sub getHamburger() As String
Return stHamburger
End Sub

public Sub setIcoAlign(varIcoAlign As String)
AddAttr("ico-align", varIcoAlign)
stIcoAlign = varIcoAlign
End Sub

public Sub getIcoAlign() As String
Return stIcoAlign
End Sub

public Sub setIcoClose(varIcoClose As String)
AddAttr("ico-close", varIcoClose)
stIcoClose = varIcoClose
End Sub

public Sub getIcoClose() As String
Return stIcoClose
End Sub

public Sub setIcoColor(varIcoColor As String)
AddAttr("ico-color", varIcoColor)
stIcoColor = varIcoColor
End Sub

public Sub getIcoColor() As String
Return stIcoColor
End Sub

public Sub setIcoFontFamily(varIcoFontFamily As String)
AddAttr("ico-font-family", varIcoFontFamily)
stIcoFontFamily = varIcoFontFamily
End Sub

public Sub getIcoFontFamily() As String
Return stIcoFontFamily
End Sub

public Sub setIcoFontSize(varIcoFontSize As String)
AddAttr("ico-font-size", varIcoFontSize)
stIcoFontSize = varIcoFontSize
End Sub

public Sub getIcoFontSize() As String
Return stIcoFontSize
End Sub

public Sub setIcoLineHeight(varIcoLineHeight As String)
AddAttr("ico-line-height", varIcoLineHeight)
stIcoLineHeight = varIcoLineHeight
End Sub

public Sub getIcoLineHeight() As String
Return stIcoLineHeight
End Sub

public Sub setIcoOpen(varIcoOpen As String)
AddAttr("ico-open", varIcoOpen)
stIcoOpen = varIcoOpen
End Sub

public Sub getIcoOpen() As String
Return stIcoOpen
End Sub

public Sub setIcoPadding(varIcoPadding As String)
AddAttr("ico-padding", varIcoPadding)
stIcoPadding = varIcoPadding
End Sub

public Sub getIcoPadding() As String
Return stIcoPadding
End Sub

public Sub setIcoPaddingBottom(varIcoPaddingBottom As String)
AddAttr("ico-padding-bottom", varIcoPaddingBottom)
stIcoPaddingBottom = varIcoPaddingBottom
End Sub

public Sub getIcoPaddingBottom() As String
Return stIcoPaddingBottom
End Sub

public Sub setIcoPaddingLeft(varIcoPaddingLeft As String)
AddAttr("ico-padding-left", varIcoPaddingLeft)
stIcoPaddingLeft = varIcoPaddingLeft
End Sub

public Sub getIcoPaddingLeft() As String
Return stIcoPaddingLeft
End Sub

public Sub setIcoPaddingRight(varIcoPaddingRight As String)
AddAttr("ico-padding-right", varIcoPaddingRight)
stIcoPaddingRight = varIcoPaddingRight
End Sub

public Sub getIcoPaddingRight() As String
Return stIcoPaddingRight
End Sub

public Sub setIcoPaddingTop(varIcoPaddingTop As String)
AddAttr("ico-padding-top", varIcoPaddingTop)
stIcoPaddingTop = varIcoPaddingTop
End Sub

public Sub getIcoPaddingTop() As String
Return stIcoPaddingTop
End Sub

public Sub setIcoTextDecoration(varIcoTextDecoration As String)
AddAttr("ico-text-decoration", varIcoTextDecoration)
stIcoTextDecoration = varIcoTextDecoration
End Sub

public Sub getIcoTextDecoration() As String
Return stIcoTextDecoration
End Sub

public Sub setIcoTextTransform(varIcoTextTransform As String)
AddAttr("ico-text-transform", varIcoTextTransform)
stIcoTextTransform = varIcoTextTransform
End Sub

public Sub getIcoTextTransform() As String
Return stIcoTextTransform
End Sub


'add a child component
Sub AddChild(child As String)
sbText.Append(child)
End Sub

