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
#DesignerProperty: Key: BorderRadius, DisplayName: BorderRadius, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Color, DisplayName: Color, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: ContainerBackgroundColor, DisplayName: ContainerBackgroundColor, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: CssClass, DisplayName: CssClass, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: FontFamily, DisplayName: FontFamily, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: FontSize, DisplayName: FontSize, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: FontStyle, DisplayName: FontStyle, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: FontWeight, DisplayName: FontWeight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconHeight, DisplayName: IconHeight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconPadding, DisplayName: IconPadding, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconSize, DisplayName: IconSize, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: InnerPadding, DisplayName: InnerPadding, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: LineHeight, DisplayName: LineHeight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Mode, DisplayName: Mode, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Name, DisplayName: Name, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Padding, DisplayName: Padding, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingBottom, DisplayName: PaddingBottom, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingLeft, DisplayName: PaddingLeft, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingRight, DisplayName: PaddingRight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingTop, DisplayName: PaddingTop, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: TextDecoration, DisplayName: TextDecoration, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: TextPadding, DisplayName: TextPadding, FieldType: String, DefaultValue:  , Description: 

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
Private mTagName As String = "mj-social"
Private sbText As StringBuilder
Public bindings As Map
Private stAlign As String = ""
Private stBorderRadius As String = ""
Private stColor As String = ""
Private stContainerBackgroundColor As String = ""
Private stCssClass As String = ""
Private stFontFamily As String = ""
Private stFontSize As String = ""
Private stFontStyle As String = ""
Private stFontWeight As String = ""
Private stIconHeight As String = ""
Private stIconPadding As String = ""
Private stIconSize As String = ""
Private stInnerPadding As String = ""
Private stLineHeight As String = ""
Private stMode As String = ""
Private stName As String = ""
Private stPadding As String = ""
Private stPaddingBottom As String = ""
Private stPaddingLeft As String = ""
Private stPaddingRight As String = ""
Private stPaddingTop As String = ""
Private stTextDecoration As String = ""
Private stTextPadding As String = ""
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
stBorderRadius = Props.Get("BorderRadius")
stColor = Props.Get("Color")
stContainerBackgroundColor = Props.Get("ContainerBackgroundColor")
stCssClass = Props.Get("CssClass")
stFontFamily = Props.Get("FontFamily")
stFontSize = Props.Get("FontSize")
stFontStyle = Props.Get("FontStyle")
stFontWeight = Props.Get("FontWeight")
stIconHeight = Props.Get("IconHeight")
stIconPadding = Props.Get("IconPadding")
stIconSize = Props.Get("IconSize")
stInnerPadding = Props.Get("InnerPadding")
stLineHeight = Props.Get("LineHeight")
stMode = Props.Get("Mode")
stName = Props.Get("Name")
stPadding = Props.Get("Padding")
stPaddingBottom = Props.Get("PaddingBottom")
stPaddingLeft = Props.Get("PaddingLeft")
stPaddingRight = Props.Get("PaddingRight")
stPaddingTop = Props.Get("PaddingTop")
stTextDecoration = Props.Get("TextDecoration")
stTextPadding = Props.Get("TextPadding")
End If

AddAttr("align", stAlign)
AddAttr("border-radius", stBorderRadius)
AddAttr("color", stColor)
AddAttr("container-background-color", stContainerBackgroundColor)
AddAttr("css-class", stCssClass)
AddAttr("font-family", stFontFamily)
AddAttr("font-size", stFontSize)
AddAttr("font-style", stFontStyle)
AddAttr("font-weight", stFontWeight)
AddAttr("icon-height", stIconHeight)
AddAttr("icon-padding", stIconPadding)
AddAttr("icon-size", stIconSize)
AddAttr("inner-padding", stInnerPadding)
AddAttr("line-height", stLineHeight)
AddAttr("mode", stMode)
AddAttr("name", stName)
AddAttr("padding", stPadding)
AddAttr("padding-bottom", stPaddingBottom)
AddAttr("padding-left", stPaddingLeft)
AddAttr("padding-right", stPaddingRight)
AddAttr("padding-top", stPaddingTop)
AddAttr("text-decoration", stTextDecoration)
AddAttr("text-padding", stTextPadding)
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
If varClass = "" Then Return
If mElement <> Null Then mElement.AddClass(varClass)
Dim mxItems As List = BANanoShared.StrParse(" ", varClass)
For Each mt As String In mxItems
classList.put(mt, mt)
Next
End Sub

'add a class on condition
public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As Boolean)
If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return
If varShouldBe <> varCondition Then Return
If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return
If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass)
varClass = varClass.trim
If varClass = "" Then Return
If mElement <> Null Then mElement.AddClass(varClass)
Dim mxItems As List = BANanoShared.StrParse(" ", varClass)
For Each mt As String In mxItems
classList.put(mt, mt)
Next
End Sub

'add a style
public Sub AddStyle(varProp As String, varStyle As String)
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
For Each k As String In classList.Keys
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
Dim mres As Map = BANano.FromJSON(varStyle)
For Each k As String In mres.Keys
Dim v As String = mres.Get(k)
styleList.put(k, v)
Next
End Sub

'returns the style as JSON
public Sub getStyle() As String
Dim sbStyle As StringBuilder
sbStyle.Initialize
sbStyle.Append("{")
For Each k As String In styleList.Keys
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
For Each k As String In attributeList.Keys
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

public Sub setBorderRadius(varBorderRadius As String)
AddAttr("border-radius", varBorderRadius)
stBorderRadius = varBorderRadius
End Sub

public Sub getBorderRadius() As String
Return stBorderRadius
End Sub

public Sub setColor(varColor As String)
AddAttr("color", varColor)
stColor = varColor
End Sub

public Sub getColor() As String
Return stColor
End Sub

public Sub setContainerBackgroundColor(varContainerBackgroundColor As String)
AddAttr("container-background-color", varContainerBackgroundColor)
stContainerBackgroundColor = varContainerBackgroundColor
End Sub

public Sub getContainerBackgroundColor() As String
Return stContainerBackgroundColor
End Sub

public Sub setCssClass(varCssClass As String)
AddAttr("css-class", varCssClass)
stCssClass = varCssClass
End Sub

public Sub getCssClass() As String
Return stCssClass
End Sub

public Sub setFontFamily(varFontFamily As String)
AddAttr("font-family", varFontFamily)
stFontFamily = varFontFamily
End Sub

public Sub getFontFamily() As String
Return stFontFamily
End Sub

public Sub setFontSize(varFontSize As String)
AddAttr("font-size", varFontSize)
stFontSize = varFontSize
End Sub

public Sub getFontSize() As String
Return stFontSize
End Sub

public Sub setFontStyle(varFontStyle As String)
AddAttr("font-style", varFontStyle)
stFontStyle = varFontStyle
End Sub

public Sub getFontStyle() As String
Return stFontStyle
End Sub

public Sub setFontWeight(varFontWeight As String)
AddAttr("font-weight", varFontWeight)
stFontWeight = varFontWeight
End Sub

public Sub getFontWeight() As String
Return stFontWeight
End Sub

public Sub setIconHeight(varIconHeight As String)
AddAttr("icon-height", varIconHeight)
stIconHeight = varIconHeight
End Sub

public Sub getIconHeight() As String
Return stIconHeight
End Sub

public Sub setIconPadding(varIconPadding As String)
AddAttr("icon-padding", varIconPadding)
stIconPadding = varIconPadding
End Sub

public Sub getIconPadding() As String
Return stIconPadding
End Sub

public Sub setIconSize(varIconSize As String)
AddAttr("icon-size", varIconSize)
stIconSize = varIconSize
End Sub

public Sub getIconSize() As String
Return stIconSize
End Sub

public Sub setInnerPadding(varInnerPadding As String)
AddAttr("inner-padding", varInnerPadding)
stInnerPadding = varInnerPadding
End Sub

public Sub getInnerPadding() As String
Return stInnerPadding
End Sub

public Sub setLineHeight(varLineHeight As String)
AddAttr("line-height", varLineHeight)
stLineHeight = varLineHeight
End Sub

public Sub getLineHeight() As String
Return stLineHeight
End Sub

public Sub setMode(varMode As String)
AddAttr("mode", varMode)
stMode = varMode
End Sub

public Sub getMode() As String
Return stMode
End Sub

public Sub setName(varName As String)
AddAttr("name", varName)
stName = varName
End Sub

public Sub getName() As String
Return stName
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

public Sub setTextDecoration(varTextDecoration As String)
AddAttr("text-decoration", varTextDecoration)
stTextDecoration = varTextDecoration
End Sub

public Sub getTextDecoration() As String
Return stTextDecoration
End Sub

public Sub setTextPadding(varTextPadding As String)
AddAttr("text-padding", varTextPadding)
stTextPadding = varTextPadding
End Sub

public Sub getTextPadding() As String
Return stTextPadding
End Sub


'add a child component
Sub AddChild(child As String)
sbText.Append(child)
End Sub

