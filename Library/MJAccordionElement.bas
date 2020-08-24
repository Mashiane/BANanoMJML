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
#DesignerProperty: Key: CssClass, DisplayName: CssClass, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: FontFamily, DisplayName: FontFamily, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconAlign, DisplayName: IconAlign, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconHeight, DisplayName: IconHeight, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconPosition, DisplayName: IconPosition, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconUnwrappedAlt, DisplayName: IconUnwrappedAlt, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconUnwrappedUrl, DisplayName: IconUnwrappedUrl, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconWidth, DisplayName: IconWidth, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconWrappedAlt, DisplayName: IconWrappedAlt, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: IconWrappedUrl, DisplayName: IconWrappedUrl, FieldType: String, DefaultValue:  , Description: 

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
Private mTagName As String = "mj-accordion-element"
Private sbText As StringBuilder
Public bindings As Map
Private stBackgroundColor As String = ""
Private stCssClass As String = ""
Private stFontFamily As String = ""
Private stIconAlign As String = ""
Private stIconHeight As String = ""
Private stIconPosition As String = ""
Private stIconUnwrappedAlt As String = ""
Private stIconUnwrappedUrl As String = ""
Private stIconWidth As String = ""
Private stIconWrappedAlt As String = ""
Private stIconWrappedUrl As String = ""
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
stCssClass = Props.Get("CssClass")
stFontFamily = Props.Get("FontFamily")
stIconAlign = Props.Get("IconAlign")
stIconHeight = Props.Get("IconHeight")
stIconPosition = Props.Get("IconPosition")
stIconUnwrappedAlt = Props.Get("IconUnwrappedAlt")
stIconUnwrappedUrl = Props.Get("IconUnwrappedUrl")
stIconWidth = Props.Get("IconWidth")
stIconWrappedAlt = Props.Get("IconWrappedAlt")
stIconWrappedUrl = Props.Get("IconWrappedUrl")
End If

AddAttr("background-color", stBackgroundColor)
AddAttr("css-class", stCssClass)
AddAttr("font-family", stFontFamily)
AddAttr("icon-align", stIconAlign)
AddAttr("icon-height", stIconHeight)
AddAttr("icon-position", stIconPosition)
AddAttr("icon-unwrapped-alt", stIconUnwrappedAlt)
AddAttr("icon-unwrapped-url", stIconUnwrappedUrl)
AddAttr("icon-width", stIconWidth)
AddAttr("icon-wrapped-alt", stIconWrappedAlt)
AddAttr("icon-wrapped-url", stIconWrappedUrl)
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

public Sub setIconAlign(varIconAlign As String)
AddAttr("icon-align", varIconAlign)
stIconAlign = varIconAlign
End Sub

public Sub getIconAlign() As String
Return stIconAlign
End Sub

public Sub setIconHeight(varIconHeight As String)
AddAttr("icon-height", varIconHeight)
stIconHeight = varIconHeight
End Sub

public Sub getIconHeight() As String
Return stIconHeight
End Sub

public Sub setIconPosition(varIconPosition As String)
AddAttr("icon-position", varIconPosition)
stIconPosition = varIconPosition
End Sub

public Sub getIconPosition() As String
Return stIconPosition
End Sub

public Sub setIconUnwrappedAlt(varIconUnwrappedAlt As String)
AddAttr("icon-unwrapped-alt", varIconUnwrappedAlt)
stIconUnwrappedAlt = varIconUnwrappedAlt
End Sub

public Sub getIconUnwrappedAlt() As String
Return stIconUnwrappedAlt
End Sub

public Sub setIconUnwrappedUrl(varIconUnwrappedUrl As String)
AddAttr("icon-unwrapped-url", varIconUnwrappedUrl)
stIconUnwrappedUrl = varIconUnwrappedUrl
End Sub

public Sub getIconUnwrappedUrl() As String
Return stIconUnwrappedUrl
End Sub

public Sub setIconWidth(varIconWidth As String)
AddAttr("icon-width", varIconWidth)
stIconWidth = varIconWidth
End Sub

public Sub getIconWidth() As String
Return stIconWidth
End Sub

public Sub setIconWrappedAlt(varIconWrappedAlt As String)
AddAttr("icon-wrapped-alt", varIconWrappedAlt)
stIconWrappedAlt = varIconWrappedAlt
End Sub

public Sub getIconWrappedAlt() As String
Return stIconWrappedAlt
End Sub

public Sub setIconWrappedUrl(varIconWrappedUrl As String)
AddAttr("icon-wrapped-url", varIconWrappedUrl)
stIconWrappedUrl = varIconWrappedUrl
End Sub

public Sub getIconWrappedUrl() As String
Return stIconWrappedUrl
End Sub


'add a child component
Sub AddChild(child As String)
sbText.Append(child)
End Sub

