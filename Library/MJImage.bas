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
#DesignerProperty: Key: Alt, DisplayName: Alt, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Border, DisplayName: Border, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: BorderRadius, DisplayName: BorderRadius, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: ContainerBackgroundColor, DisplayName: ContainerBackgroundColor, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: CssClass, DisplayName: CssClass, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: FluidOnMobile, DisplayName: FluidOnMobile, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Height, DisplayName: Height, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Href, DisplayName: Href, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Padding, DisplayName: Padding, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingBottom, DisplayName: PaddingBottom, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingLeft, DisplayName: PaddingLeft, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingRight, DisplayName: PaddingRight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: PaddingTop, DisplayName: PaddingTop, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Rel, DisplayName: Rel, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Src, DisplayName: Src, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Srcset, DisplayName: Srcset, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Target, DisplayName: Target, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Title, DisplayName: Title, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Usemap, DisplayName: Usemap, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: Width, DisplayName: Width, FieldType: String, DefaultValue:  , Description: 

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
Private mTagName As String = "mj-image"
Private sbText As StringBuilder
Public bindings As Map
Private stAlign As String = ""
Private stAlt As String = ""
Private stBorder As String = ""
Private stBorderRadius As String = ""
Private stContainerBackgroundColor As String = ""
Private stCssClass As String = ""
Private stFluidOnMobile As String = ""
Private stHeight As String = ""
Private stHref As String = ""
Private stPadding As String = ""
Private stPaddingBottom As String = ""
Private stPaddingLeft As String = ""
Private stPaddingRight As String = ""
Private stPaddingTop As String = ""
Private stRel As String = ""
Private stSrc As String = ""
Private stSrcset As String = ""
Private stTarget As String = ""
Private stTitle As String = ""
Private stUsemap As String = ""
Private stWidth As String = ""
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
stAlt = Props.Get("Alt")
stBorder = Props.Get("Border")
stBorderRadius = Props.Get("BorderRadius")
stContainerBackgroundColor = Props.Get("ContainerBackgroundColor")
stCssClass = Props.Get("CssClass")
stFluidOnMobile = Props.Get("FluidOnMobile")
stHeight = Props.Get("Height")
stHref = Props.Get("Href")
stPadding = Props.Get("Padding")
stPaddingBottom = Props.Get("PaddingBottom")
stPaddingLeft = Props.Get("PaddingLeft")
stPaddingRight = Props.Get("PaddingRight")
stPaddingTop = Props.Get("PaddingTop")
stRel = Props.Get("Rel")
stSrc = Props.Get("Src")
stSrcset = Props.Get("Srcset")
stTarget = Props.Get("Target")
stTitle = Props.Get("Title")
stUsemap = Props.Get("Usemap")
stWidth = Props.Get("Width")
End If

AddAttr("align", stAlign)
AddAttr("alt", stAlt)
AddAttr("border", stBorder)
AddAttr("border-radius", stBorderRadius)
AddAttr("container-background-color", stContainerBackgroundColor)
AddAttr("css-class", stCssClass)
AddAttr("fluid-on-mobile", stFluidOnMobile)
AddAttr("height", stHeight)
AddAttr("href", stHref)
AddAttr("padding", stPadding)
AddAttr("padding-bottom", stPaddingBottom)
AddAttr("padding-left", stPaddingLeft)
AddAttr("padding-right", stPaddingRight)
AddAttr("padding-top", stPaddingTop)
AddAttr("rel", stRel)
AddAttr("src", stSrc)
AddAttr("srcset", stSrcset)
AddAttr("target", stTarget)
AddAttr("title", stTitle)
AddAttr("usemap", stUsemap)
AddAttr("width", stWidth)
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

public Sub setAlt(varAlt As String)
AddAttr("alt", varAlt)
stAlt = varAlt
End Sub

public Sub getAlt() As String
Return stAlt
End Sub

public Sub setBorder(varBorder As String)
AddAttr("border", varBorder)
stBorder = varBorder
End Sub

public Sub getBorder() As String
Return stBorder
End Sub

public Sub setBorderRadius(varBorderRadius As String)
AddAttr("border-radius", varBorderRadius)
stBorderRadius = varBorderRadius
End Sub

public Sub getBorderRadius() As String
Return stBorderRadius
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

public Sub setFluidOnMobile(varFluidOnMobile As String)
AddAttr("fluid-on-mobile", varFluidOnMobile)
stFluidOnMobile = varFluidOnMobile
End Sub

public Sub getFluidOnMobile() As String
Return stFluidOnMobile
End Sub

public Sub setHeight(varHeight As String)
AddAttr("height", varHeight)
stHeight = varHeight
End Sub

public Sub getHeight() As String
Return stHeight
End Sub

public Sub setHref(varHref As String)
AddAttr("href", varHref)
stHref = varHref
End Sub

public Sub getHref() As String
Return stHref
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

public Sub setRel(varRel As String)
AddAttr("rel", varRel)
stRel = varRel
End Sub

public Sub getRel() As String
Return stRel
End Sub

public Sub setSrc(varSrc As String)
AddAttr("src", varSrc)
stSrc = varSrc
End Sub

public Sub getSrc() As String
Return stSrc
End Sub

public Sub setSrcset(varSrcset As String)
AddAttr("srcset", varSrcset)
stSrcset = varSrcset
End Sub

public Sub getSrcset() As String
Return stSrcset
End Sub

public Sub setTarget(varTarget As String)
AddAttr("target", varTarget)
stTarget = varTarget
End Sub

public Sub getTarget() As String
Return stTarget
End Sub

public Sub setTitle(varTitle As String)
AddAttr("title", varTitle)
stTitle = varTitle
End Sub

public Sub getTitle() As String
Return stTitle
End Sub

public Sub setUsemap(varUsemap As String)
AddAttr("usemap", varUsemap)
stUsemap = varUsemap
End Sub

public Sub getUsemap() As String
Return stUsemap
End Sub

public Sub setWidth(varWidth As String)
AddAttr("width", varWidth)
stWidth = varWidth
End Sub

public Sub getWidth() As String
Return stWidth
End Sub


'add a child component
Sub AddChild(child As String)
sbText.Append(child)
End Sub

