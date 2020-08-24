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
#DesignerProperty: Key: BackgroundColor, DisplayName: BackgroundColor, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BackgroundRepeat, DisplayName: BackgroundRepeat, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BackgroundSize, DisplayName: BackgroundSize, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BackgroundUrl, DisplayName: BackgroundUrl, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Border, DisplayName: Border, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BorderBottom, DisplayName: BorderBottom, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BorderLeft, DisplayName: BorderLeft, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BorderRadius, DisplayName: BorderRadius, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BorderRight, DisplayName: BorderRight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BorderTop, DisplayName: BorderTop, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: CssClass, DisplayName: CssClass, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Direction, DisplayName: Direction, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: FullWidth, DisplayName: FullWidth, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Padding, DisplayName: Padding, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingBottom, DisplayName: PaddingBottom, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingLeft, DisplayName: PaddingLeft, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingRight, DisplayName: PaddingRight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingTop, DisplayName: PaddingTop, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: TextAlign, DisplayName: TextAlign, FieldType: String, DefaultValue:  , Description: 

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
Private mTagName As String = "mj-section"
Private sbText As StringBuilder
Public bindings As Map
Private stBackgroundColor As String = ""
Private stBackgroundRepeat As String = ""
Private stBackgroundSize As String = ""
Private stBackgroundUrl As String = ""
Private stBorder As String = ""
Private stBorderBottom As String = ""
Private stBorderLeft As String = ""
Private stBorderRadius As String = ""
Private stBorderRight As String = ""
Private stBorderTop As String = ""
Private stCssClass As String = ""
Private stDirection As String = ""
Private stFullWidth As String = ""
Private stPadding As String = ""
Private stPaddingBottom As String = ""
Private stPaddingLeft As String = ""
Private stPaddingRight As String = ""
Private stPaddingTop As String = ""
Private stTextAlign As String = ""
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
stBackgroundColor = Props.Get("BackgroundColor")
stBackgroundRepeat = Props.Get("BackgroundRepeat")
stBackgroundSize = Props.Get("BackgroundSize")
stBackgroundUrl = Props.Get("BackgroundUrl")
stBorder = Props.Get("Border")
stBorderBottom = Props.Get("BorderBottom")
stBorderLeft = Props.Get("BorderLeft")
stBorderRadius = Props.Get("BorderRadius")
stBorderRight = Props.Get("BorderRight")
stBorderTop = Props.Get("BorderTop")
stCssClass = Props.Get("CssClass")
stDirection = Props.Get("Direction")
stFullWidth = Props.Get("FullWidth")
stPadding = Props.Get("Padding")
stPaddingBottom = Props.Get("PaddingBottom")
stPaddingLeft = Props.Get("PaddingLeft")
stPaddingRight = Props.Get("PaddingRight")
stPaddingTop = Props.Get("PaddingTop")
stTextAlign = Props.Get("TextAlign")
End If

AddAttr("background-color", stBackgroundColor)
AddAttr("background-repeat", stBackgroundRepeat)
AddAttr("background-size", stBackgroundSize)
AddAttr("background-url", stBackgroundUrl)
AddAttr("border", stBorder)
AddAttr("border-bottom", stBorderBottom)
AddAttr("border-left", stBorderLeft)
AddAttr("border-radius", stBorderRadius)
AddAttr("border-right", stBorderRight)
AddAttr("border-top", stBorderTop)
AddAttr("css-class", stCssClass)
AddAttr("direction", stDirection)
AddAttr("full-width", stFullWidth)
AddAttr("padding", stPadding)
AddAttr("padding-bottom", stPaddingBottom)
AddAttr("padding-left", stPaddingLeft)
AddAttr("padding-right", stPaddingRight)
AddAttr("padding-top", stPaddingTop)
AddAttr("text-align", stTextAlign)
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

public Sub setBackgroundColor(varBackgroundColor As String)
AddAttr("background-color", varBackgroundColor)
stBackgroundColor = varBackgroundColor
End Sub

public Sub getBackgroundColor() As String
Return stBackgroundColor
End Sub

public Sub setBackgroundRepeat(varBackgroundRepeat As String)
AddAttr("background-repeat", varBackgroundRepeat)
stBackgroundRepeat = varBackgroundRepeat
End Sub

public Sub getBackgroundRepeat() As String
Return stBackgroundRepeat
End Sub

public Sub setBackgroundSize(varBackgroundSize As String)
AddAttr("background-size", varBackgroundSize)
stBackgroundSize = varBackgroundSize
End Sub

public Sub getBackgroundSize() As String
Return stBackgroundSize
End Sub

public Sub setBackgroundUrl(varBackgroundUrl As String)
AddAttr("background-url", varBackgroundUrl)
stBackgroundUrl = varBackgroundUrl
End Sub

public Sub getBackgroundUrl() As String
Return stBackgroundUrl
End Sub

public Sub setBorder(varBorder As String)
AddAttr("border", varBorder)
stBorder = varBorder
End Sub

public Sub getBorder() As String
Return stBorder
End Sub

public Sub setBorderBottom(varBorderBottom As String)
AddAttr("border-bottom", varBorderBottom)
stBorderBottom = varBorderBottom
End Sub

public Sub getBorderBottom() As String
Return stBorderBottom
End Sub

public Sub setBorderLeft(varBorderLeft As String)
AddAttr("border-left", varBorderLeft)
stBorderLeft = varBorderLeft
End Sub

public Sub getBorderLeft() As String
Return stBorderLeft
End Sub

public Sub setBorderRadius(varBorderRadius As String)
AddAttr("border-radius", varBorderRadius)
stBorderRadius = varBorderRadius
End Sub

public Sub getBorderRadius() As String
Return stBorderRadius
End Sub

public Sub setBorderRight(varBorderRight As String)
AddAttr("border-right", varBorderRight)
stBorderRight = varBorderRight
End Sub

public Sub getBorderRight() As String
Return stBorderRight
End Sub

public Sub setBorderTop(varBorderTop As String)
AddAttr("border-top", varBorderTop)
stBorderTop = varBorderTop
End Sub

public Sub getBorderTop() As String
Return stBorderTop
End Sub

public Sub setCssClass(varCssClass As String)
AddAttr("css-class", varCssClass)
stCssClass = varCssClass
End Sub

public Sub getCssClass() As String
Return stCssClass
End Sub

public Sub setDirection(varDirection As String)
AddAttr("direction", varDirection)
stDirection = varDirection
End Sub

public Sub getDirection() As String
Return stDirection
End Sub

public Sub setFullWidth(varFullWidth As String)
AddAttr("full-width", varFullWidth)
stFullWidth = varFullWidth
End Sub

public Sub getFullWidth() As String
Return stFullWidth
End Sub

public Sub setPadding(varPadding As String)
AddAttr("padding", varPadding)
stPadding = varPadding
End Sub

public Sub getPadding() As String
Return stPadding
End Sub

public Sub setPaddingBottom(varPaddingBottom As String)
AddAttr("padding-bottom", varPaddingBottom)
stPaddingBottom = varPaddingBottom
End Sub

public Sub getPaddingBottom() As String
Return stPaddingBottom
End Sub

public Sub setPaddingLeft(varPaddingLeft As String)
AddAttr("padding-left", varPaddingLeft)
stPaddingLeft = varPaddingLeft
End Sub

public Sub getPaddingLeft() As String
Return stPaddingLeft
End Sub

public Sub setPaddingRight(varPaddingRight As String)
AddAttr("padding-right", varPaddingRight)
stPaddingRight = varPaddingRight
End Sub

public Sub getPaddingRight() As String
Return stPaddingRight
End Sub

public Sub setPaddingTop(varPaddingTop As String)
AddAttr("padding-top", varPaddingTop)
stPaddingTop = varPaddingTop
End Sub

public Sub getPaddingTop() As String
Return stPaddingTop
End Sub

public Sub setTextAlign(varTextAlign As String)
AddAttr("text-align", varTextAlign)
stTextAlign = varTextAlign
End Sub

public Sub getTextAlign() As String
Return stTextAlign
End Sub


'add a child component
Sub AddChild(child As String)
sbText.Append(child)
End Sub

