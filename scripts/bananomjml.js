

/* bananomjml */
/* =========================== BANanoMJML  =========================== */
function banano_bananomjml_bananomjml() {
var _B=this;
_B._body=null;

_B._beautify=false;

_B._minify=false;

_B._validationlevel="";

_B._options={};

_B._nameof="";

_B._minifyoptions={};

_B._minifycss=false;

_B._removeemptyattributes=false;

_B._collapsewhitespace=false;

_B._emailframe=null;

// [18] Public Sub Initialize(nameit As String) 
_B.initialize=function(_nameit) {
var _istyle;
// [19]  nameof = nameit.tolowercase 
_B._nameof=_nameit.toLowerCase();
// [20]  body.Initialize( {2} ) 
_B._body=u("#body");
// [21]  body.Empty 
_B._body.empty();
// [22]  body.Append( {0} ) 
_B._body.append("<iframe id=\"emailframe\" frameborder=\"0\"></iframe>");
// [23]  body.Append( {1} ) 
_B._body.append("<div id=\"template\" style=\"display:none;\"></div>");
// [24]  options.Initialize 
_B._options={};
// [25]  minifyOptions.Initialize 
_B._minifyoptions={};
// [26]  minifyCSS = True 
_B._minifycss=true;
// [27]  removeEmptyAttributes = True 
_B._removeemptyattributes=true;
// [28]  collapseWhitespace = True 
_B._collapsewhitespace=true;
// [29]  Minify = True 
_B._minify=true;
// [30]  Beautify = False 
_B._beautify=false;
// [31]  emailframe.Initialize( {3} ) 
_B._emailframe=u("#emailframe");
// [32]  Dim istyle As Map = CreateMap( {4} : {5} , {6} :0, {7} :0, {8} :0, {9} :0, {10} : {11} , {12} : {13} , {14} : {15} ) 
_istyle={"position":"fixed", "top":0, "left":0, "bottom":0, "right":0, "width":"100%", "height":"100%", "border":"none"};
// [33]  istyle.Put( {16} ,0) 
_istyle["margin"]=0;
// [34]  istyle.Put( {17} ,0) 
_istyle["padding"]=0;
// [35]  istyle.Put( {18} , {19} ) 
_istyle["overflow"]="hidden";
// [36]  istyle.Put( {20} ,999999) 
_istyle["z-index"]=999999;
// [37]  emailframe.SetStyle(banano.ToJson(istyle)) 
_B._emailframe.css(JSON.parse(JSON.stringify(_istyle)));
// End Sub
};

// [43] Sub getTemplate As String 
_B.gettemplate=function() {
var _tmp,_stmp;
// [44]  Dim tmp As BANanoElement 
_tmp=null;
// [45]  tmp.Initialize( {21} ) 
_tmp=u("#template");
// [46]  Dim stmp As String = tmp.GetHTML 
_stmp=_tmp.html();
// [47]  Return stmp 
return _stmp;
// End Sub
};

// [51] Sub getHTML As String 
_B.gethtml=function() {
var _stmp,_window,_mjml,_mjml2html,_response,_shtml;
// [52]  minifyOptions.Put( {22} , minifyCSS) 
_B._minifyoptions["minifyCSS"]=_B._minifycss;
// [53]  minifyOptions.Put( {23} , removeEmptyAttributes) 
_B._minifyoptions["removeEmptyAttributes"]=_B._removeemptyattributes;
// [54]  minifyOptions.Put( {24} , collapseWhitespace) 
_B._minifyoptions["collapseWhitespace"]=_B._collapsewhitespace;
// [55]  options.Put( {25} , minifyOptions) 
_B._options["minifyOptions"]=_B._minifyoptions;
// [56]  If Beautify Then options.Put( {26} , True) 
if (_B._beautify) {_B._options["beautify"]=true;}
// [57]  If Minify Then options.Put( {27} , True) 
if (_B._minify) {_B._options["minify"]=true;}
// [59]  Dim stmp As String = getTemplate 
_stmp=_B.gettemplate(_B);
// [61]  Dim window As BANanoObject = banano.Window 
_window=window;
// [62]  Dim mjml As BANanoObject = window.getfield( {28} ) 
_mjml=_window["mjml"];
// [63]  Dim mjml2html As BANanoObject = mjml.GetField( {29} ) 
_mjml2html=_mjml["default"];
// [64]  Dim Response As Map = mjml2html.Execute(Array(stmp, options)) 
_response=_mjml2html(_stmp,_B._options);
// [65]  Dim shtml As String = Response.get( {30} ) 
_shtml=_response["html"];
// [66]  Return shtml 
return _shtml;
// End Sub
};

// [70] Sub Preview 
_B.preview=function() {
var _shtml;
// [72]  Dim shtml As String = getHTML 
_shtml=_B.gethtml(_B);
// [74]  emailframe.GetField( {31} ).GetField( {32} ).RunMethod( {33} , Null) 
_B._emailframe.nodes[0]["contentWindow"]["document"]["open"]();
// [75]  emailframe.GetField( {34} ).GetField( {35} ).RunMethod( {36} , Array(shtml)) 
_B._emailframe.nodes[0]["contentWindow"]["document"]["write"](_shtml);
// [76]  emailframe.GetField( {37} ).GetField( {38} ).RunMethod( {39} , Null) 
_B._emailframe.nodes[0]["contentWindow"]["document"]["close"]();
// End Sub
};

}
/* =========================== BANanoShared  =========================== */
function banano_bananomjml_bananoshared() {
var _B;
this._unitwords=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];

this._tenwords=["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

this._thousandwords=["","Thousand","Million","Billion","Trillion","Quadrillion","Pentillion","Sexillion","Septillion","Octillion"];

// [23] Sub NewB4xList(items As List) As List 
this.newb4xlist=function(_items) {
if (_B==null) _B=this;
var _nl;
// [24]  Dim nl As List 
_nl=[];
// [25]  nl.Initialize 
_nl.length=0;
// [26]  nl.AddAll(items) 
_nl.splice(_nl.length,0,..._items);
// [27]  Return nl 
return _nl;
// End Sub
};

// [30] Sub NewList As List 
this.newlist=function() {
if (_B==null) _B=this;
var _elx;
// [31]  Dim elx As List 
_elx=[];
// [32]  elx.Initialize 
_elx.length=0;
// [33]  Return elx 
return _elx;
// End Sub
};

// [37] Sub BuildPHPEmail(sfrom As String, sto As String, scc As String, ssubject As String, smsg As String) As Map 
this.buildphpemail=function(_sfrom,_sto,_scc,_ssubject,_smsg) {
if (_B==null) _B=this;
var _se;
// [38]  Dim Se As Map = CreateMap( {65} :sfrom, {66} :sto, {67} :scc, {68} :ssubject, {69} :smsg) 
_se={"from":_sfrom, "to":_sto, "cc":_scc, "subject":_ssubject, "msg":_smsg};
// [39]  Return Se 
return _se;
// End Sub
};

// [43] Sub GetIDFromEvent(e As BANanoEvent) As String 
this.getidfromevent=function(_e) {
if (_B==null) _B=this;
var _cureve,_id;
// [44]  Dim curEve As BANanoElement = BANano.ToElement(e.OtherField( {70} )) 
_cureve=u(_e["currentTarget"]);
// [45]  Dim ID As String = curEve.GetField( {71} ).Result 
_id=_cureve.nodes[0]["id"];
// [46]  Return ID 
return _id;
// End Sub
};

// [50] Sub GetKeyFromEvent(e As BANanoEvent) As String 
this.getkeyfromevent=function(_e) {
if (_B==null) _B=this;
var _cureve,_id;
// [51]  Dim curEve As BANanoElement = BANano.ToElement(e.OtherField( {72} )) 
_cureve=u(_e["currentTarget"]);
// [52]  Dim ID As String = curEve.GetField( {73} ).Result 
_id=_cureve.nodes[0]["key"];
// [53]  Return ID 
return _id;
// End Sub
};

// [56] Sub GetEventTargetProperty(e As BANanoEvent, prop As String) As String 
this.geteventtargetproperty=function(_e,_prop) {
if (_B==null) _B=this;
var _sid;
// [57]  Dim sid As String = e.OtherField( {74} ).GetField(prop).Result 
_sid=_e["target"][_prop];
// [58]  Return sid 
return _sid;
// End Sub
};

// [61] Sub GetFileListFromTarget(e As BANanoEvent) As List 
this.getfilelistfromtarget=function(_e) {
if (_B==null) _B=this;
var _files;
// [62]  Dim files As List = e.OtherField( {75} ).GetField( {76} ).Result 
_files=_e["target"]["files"];
// [63]  Return files 
return _files;
// End Sub
};

// [67] Sub BeautifyName(idName As String) As String 
this.beautifyname=function(_idname) {
if (_B==null) _B=this;
var _ls,_slen,_i,_mout,_sname;
// [68]  idName = idName.trim 
_idname=_idname.trim();
// [69]  If idName = {77} Then Return {78} 
if (_idname=="") { return "";}
// [70]  Dim ls As StringBuilder 
_ls=new StringBuilder();
// [71]  ls.Initialize 
_ls.init();
_ls.isinitialized=true;
// [72]  Dim slen As Int = idName.Length 
_slen=_idname.length;
// [73]  Dim i As Int = 0 
_i=0;
// [74]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [75]  Dim mout As String = idName.CharAt(i) 
_mout=_idname.charAt(_i);
// [76]  If {79} .IndexOf(mout) = -1 Then 
if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".indexOf(_mout)==-1) {
// [77]  ls.Append( {80} ) 
_ls.append("-");
// [78]  Else 
} else {
// [79]  ls.Append(mout) 
_ls.append(_mout);
// [80]  End If 
}
// [81]  Next 
}
// [82]  Dim sname As String = ls.tostring 
_sname=_ls.toString();
// [83]  sname = ProperSubName(sname, False) 
_sname=_B.propersubname(_sname,false,_B);
// [84]  Return sname 
return _sname;
// End Sub
};

// [87] Sub ProperSubName(vx As String, removePref As Boolean) As String 
this.propersubname=function(_vx,_removepref) {
if (_B==null) _B=this;
var _varlist,_vartot,_varcnt,_varitem,_subname1;
// [88]  vx = vx.Replace( {81} , {82} ) 
_vx=_vx.split(":").join("-");
// [89]  vx = vx.Replace( {83} , {84} ) 
_vx=_vx.split(".").join("-");
// [90]  Dim varList As List = StrParse( {85} , vx) 
_varlist=_B.strparse("-",_vx,_B);
// [91]  If removePref Then 
if (_removepref) {
// [92]  varList.RemoveAt(0) 
_varlist.splice(0,1);
// [93]  End If 
}
// [94]  Dim varTot As Int = varList.Size - 1 
_vartot=_varlist.length-1;
// [95]  Dim varCnt As Int 
_varcnt=0;
// [96]  For varCnt = 0 To varTot 
for (_varcnt=0;_varcnt<=_vartot;_varcnt++) {
// [97]  Dim varItem As String = varList.Get(varCnt) 
_varitem=_varlist[_varcnt];
// [98]  varItem = ProperCase(varItem) 
_varitem=_B.propercase(_varitem,_B);
// [99]  varList.Set(varCnt, varItem) 
_varlist[_varcnt]=_varitem;
// [100]  Next 
}
// [101]  Dim subName1 As String = Join( {86} ,varList) 
_subname1=_B.join("",_varlist,_B);
// [102]  Return subName1 
return _subname1;
// End Sub
};

// [105] Sub Capitalize(t As String) As String 
this.capitalize=function(_t) {
if (_B==null) _B=this;
// [106]  Return ProperCase(t) 
return _B.propercase(_t,_B);
// End Sub
};

// [109] Sub StrParse(delim As String, inputString As String) As List 
this.strparse=function(_delim,_inputstring) {
if (_B==null) _B=this;
var _nl,_values;
// [110]  Dim nl As List 
_nl=[];
// [111]  nl.Initialize 
_nl.length=0;
// [112]  inputString = CStr(inputString) 
_inputstring=_B.cstr(_inputstring,_B);
// [113]  If inputString = {87} Then inputString = {88} 
if (_inputstring=="null") {_inputstring="";}
// [114]  If inputString = {89} Then inputString = {90} 
if (_inputstring=="undefined") {_inputstring="";}
// [115]  If inputString = {91} Then Return nl 
if (_inputstring=="") { return _nl;}
// [116]  Dim values() As String = BANano.Split(delim,inputString) 
_values=_inputstring.split(_delim);
// [117]  nl.AddAll(values) 
_nl.splice(_nl.length,0,..._values);
// [118]  Return nl 
return _nl;
// End Sub
};

// [122] Sub Join(delimiter As String, lst As List) As String 
this.join=function(_delimiter,_lst) {
if (_B==null) _B=this;
var _i,_sbx,_fld;
// [123]  Dim i As Int 
_i=0;
// [124]  Dim sbx As StringBuilder 
_sbx=new StringBuilder();
// [125]  Dim fld As String 
_fld="";
// [126]  sbx.Initialize 
_sbx.init();
_sbx.isinitialized=true;
// [127]  fld = lst.Get(0) 
_fld=_lst[0];
// [128]  sbx.Append(fld) 
_sbx.append(_fld);
// [129]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [130]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [131]  sbx.Append(delimiter).Append(fld) 
_sbx.append(_delimiter).append(_fld);
// [132]  Next 
}
// [133]  Return sbx.ToString 
return _sbx.toString();
// End Sub
};

// [137] Sub CorrectName(oldName As String) As String 
this.correctname=function(_oldname) {
if (_B==null) _B=this;
var _strname;
// [138]  Dim strName As String = StringBreakAtUpperCase(oldName) 
_strname=_B.stringbreakatuppercase(_oldname,_B);
// [139]  strName = strName.replace( {92} , {93} ) 
_strname=_strname.split(" ").join("-");
// [140]  strName = strName.tolowercase 
_strname=_strname.toLowerCase();
// [141]  Return strName 
return _strname;
// End Sub
};

// [146] Sub MVQuoteItems(delim As String, mvstring As String) As String 
this.mvquoteitems=function(_delim,_mvstring) {
if (_B==null) _B=this;
var _sbout,_litems,_k,_sout;
// [147]  Dim sbOut As StringBuilder 
_sbout=new StringBuilder();
// [148]  sbOut.Initialize 
_sbout.init();
_sbout.isinitialized=true;
// [149]  Dim lItems As List = StrParse(delim, mvstring) 
_litems=_B.strparse(_delim,_mvstring,_B);
// [150]  For Each k As String In lItems 
for (var _kindex=0;_kindex<_litems.length;_kindex++) {
_k=_litems[_kindex];
// [151]  k = CStr(k) 
_k=_B.cstr(_k,_B);
// [152]  k = k.Trim 
_k=_k.trim();
// [153]  sbOut.Append( {0} ).Append(delim) 
_sbout.append("\"" + _k + "\"").append(_delim);
// [154]  Next 
}
// [155]  Dim sout As String = sbOut.ToString 
_sout=_sbout.toString();
// [156]  sout = RemDelim(sout, delim) 
_sout=_B.remdelim(_sout,_delim,_B);
// [157]  Return sout 
return _sout;
// End Sub
};

// [161] Sub MVSingleQuoteItems(delim As String, mvstring As String) As String 
this.mvsinglequoteitems=function(_delim,_mvstring) {
if (_B==null) _B=this;
var _sbout,_litems,_k,_sout;
// [162]  Dim sbOut As StringBuilder 
_sbout=new StringBuilder();
// [163]  sbOut.Initialize 
_sbout.init();
_sbout.isinitialized=true;
// [164]  Dim lItems As List = StrParse(delim, mvstring) 
_litems=_B.strparse(_delim,_mvstring,_B);
// [165]  For Each k As String In lItems 
for (var _kindex=0;_kindex<_litems.length;_kindex++) {
_k=_litems[_kindex];
// [166]  k = CStr(k) 
_k=_B.cstr(_k,_B);
// [167]  k = k.Trim 
_k=_k.trim();
// [168]  sbOut.Append( {1} ).Append(delim) 
_sbout.append("'" + _k + "'").append(_delim);
// [169]  Next 
}
// [170]  Dim sout As String = sbOut.ToString 
_sout=_sbout.toString();
// [171]  sout = RemDelim(sout, delim) 
_sout=_B.remdelim(_sout,_delim,_B);
// [172]  Return sout 
return _sout;
// End Sub
};

// [177] Sub GetReadyState As String 
this.getreadystate=function() {
if (_B==null) _B=this;
var _rs;
// [178]  Dim rs As String = BANano.Window.GetField( {94} ).GetField( {95} ).Result 
_rs=window["document"]["readyState"];
// [179]  Return rs 
return _rs;
// End Sub
};

// [183] Sub SetOnReadyChange(EventHandler As Object) 
this.setonreadychange=function(_eventhandler) {
if (_B==null) _B=this;
var _cb;
// [184]  If SubExists(EventHandler, {96} ) = False Then Return 
if ((typeof _eventhandler[("ReadyChange").toLowerCase()]==="function")==false) { return ;}
// [185]  Dim cb As BANanoObject = BANano.callback(EventHandler, {97} , Null) 
_cb=function() {if (typeof _eventhandler[("ReadyChange").toLowerCase()]==="function") {return _eventhandler[("ReadyChange").toLowerCase()](_B)};};
// [186]  BANano.Window.GetField( {98} ).AddEventListener( {99} , cb, True) 
window["document"].addEventListener("readystatechange", _cb, true);
// End Sub
};

// [190] Sub YesNoToBoolean(xvalue As String) As Boolean 
this.yesnotoboolean=function(_xvalue) {
if (_B==null) _B=this;
// [191]  Select Case xvalue 
switch ("" + _xvalue) {
// [192]  Case {100} , {101} 
case "" + "Yes":
case "" + "yes":
// [193]  Return True 
return true;
// [194]  Case Else 
default:
// [195]  Return False 
return false;
// [196]  End Select 
}
// End Sub
};

// [200] Sub DateIsAfter(date1 As String, date2 As String) As Boolean 
this.dateisafter=function(_date1,_date2) {
if (_B==null) _B=this;
var _d1,_d2,_b;
// [201]  Dim d1 As Int = DateIconv(date1) 
_d1=_B.dateiconv(_date1,_B);
// [202]  Dim d2 As Int = DateIconv(date2) 
_d2=_B.dateiconv(_date2,_B);
// [203]  d1 = BANano.parseint(d1) 
_d1=parseInt(_d1);
// [204]  d2 = BANano.parseInt(d2) 
_d2=parseInt(_d2);
// [205]  Dim b As Boolean = BANano.IIf(d1 > d2, True, False) 
_b=(_d1>_d2) ? true : false;
// [206]  Return b 
return _b;
// End Sub
};

// [211] Sub RemDelim(sValue As String, Delim As String) As String 
this.remdelim=function(_svalue,_delim) {
if (_B==null) _B=this;
var _sw,_ldelim,_nvalue;
// [212]  Dim sw As Boolean = sValue.EndsWith(Delim) 
_sw=_svalue.endsWith(_delim);
// [213]  If sw Then 
if (_sw) {
// [214]  Dim lDelim As Int = Delim.Length 
_ldelim=_delim.length;
// [215]  Dim nValue As String = sValue 
_nvalue=_svalue;
// [216]  sw = nValue.EndsWith(Delim) 
_sw=_nvalue.endsWith(_delim);
// [217]  If sw Then 
if (_sw) {
// [218]  nValue = nValue.SubString2(0, nValue.Length-lDelim) 
_nvalue=_nvalue.substring(0,_nvalue.length-_ldelim);
// [219]  End If 
}
// [220]  Return nValue 
return _nvalue;
// [221]  Else 
} else {
// [222]  Return sValue 
return _svalue;
// [223]  End If 
}
// End Sub
};

// [226] Sub DateIconv(sdate As String) As Long 
this.dateiconv=function(_sdate) {
if (_B==null) _B=this;
var _lps;
// [227]  Dim lps As Long = DateTime.DateParse(sdate) 
_lps=DateTime.DateParse(_sdate);
// [228]  Return lps 
return _lps;
// End Sub
};

// [231] Sub DateOconv(lDate As Long) As String 
this.dateoconv=function(_ldate) {
if (_B==null) _B=this;
var _sdate;
// [232]  DateTime.DateFormat = {102} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [233]  Dim sdate As String = DateTime.Date(lDate) 
_sdate=DateTime.Date(_ldate);
// [234]  Return sdate 
return _sdate;
// End Sub
};

// [238] Sub StringBreakAtUpperCase(st As String) As String 
this.stringbreakatuppercase=function(_st) {
if (_B==null) _B=this;
var _k,_s,_newst,_i;
// [239]  If st.Length = 0 Then Return {103} 
if (_st.length==0) { return "";}
// [240]  Dim k As Int 
_k=0;
// [241]  Dim s As String 
_s="";
// [242]  Dim newst As String = st.CharAt(0) 
_newst=_st.charAt(0);
// [243]  For i = 1 To st.Length - 1 
for (_i=1;_i<=_st.length-1;_i++) {
// [244]  s = st.CharAt(i) 
_s=_st.charAt(_i);
// [245]  k = Asc(s) 
_k=_s.charCodeAt(0);
// [246]  If (k > 64) And (k < 91) And (st.CharAt(i-1) <> {104} ) Then 
if ((_k>64) && (_k<91) && (_st.charAt(_i-1)!=" ")) {
// [247]  newst = newst & {105} & s 
_newst=_newst+" "+_s;
// [248]  Else 
} else {
// [249]  newst = newst & s 
_newst=_newst+_s;
// [250]  End If 
}
// [251]  Next 
}
// [252]  Return newst 
return _newst;
// End Sub
};

// [257] Sub BuildStyle(styles As Map) As String 
this.buildstyle=function(_styles) {
if (_B==null) _B=this;
var _sbx,_k,_v;
// [258]  Dim sbx As StringBuilder 
_sbx=new StringBuilder();
// [259]  sbx.Initialize 
_sbx.init();
_sbx.isinitialized=true;
// [260]  For Each k As String In styles.keys 
var _kKeys = Object.keys(_styles);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [261]  Dim v As String = styles.get(k) 
_v=_styles[_k];
// [262]  If BANano.IsUndefined(v) Then v = {106} 
if (is.undefined(_v)) {_v="";}
// [263]  If BANano.IsNull(v) Then v = {107} 
if (is.null(_v)) {_v="";}
// [264]  k = k.trim 
_k=_k.trim();
// [265]  v = v.trim 
_v=_v.trim();
// [266]  If k = {108} Then Continue 
if (_k=="") {continue;}
// [267]  If v = {109} Then Continue 
if (_v=="") {continue;}
// [268]  sbx.Append( {2} ) 
_sbx.append("" + _k + ":" + _v + ";");
// [269]  Next 
}
// [270]  Return sbx.tostring 
return _sbx.toString();
// End Sub
};

// [273] Sub BuildAttributes(properties As Map) As String 
this.buildattributes=function(_properties) {
if (_B==null) _B=this;
var _sbx,_k,_v;
// [274]  If properties.ContainsKey( {110} ) Then 
if (("tagname" in _properties)) {
// [275]  properties.remove( {111} ) 
delete _properties["tagname"];
// [276]  End If 
}
// [277]  Dim sbx As StringBuilder 
_sbx=new StringBuilder();
// [278]  sbx.Initialize 
_sbx.init();
_sbx.isinitialized=true;
// [279]  For Each k As String In properties.keys 
var _kKeys = Object.keys(_properties);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [280]  Dim v As String = properties.get(k) 
_v=_properties[_k];
// [281]  If BANano.IsUndefined(v) Then v = {112} 
if (is.undefined(_v)) {_v="";}
// [282]  If BANano.IsNull(v) Then v = {113} 
if (is.null(_v)) {_v="";}
// [283]  If BANano.IsBoolean(v) Then 
if (is.boolean(_v)) {
// [284]  sbx.Append( {3} ) 
_sbx.append("" + _k + "=\"" + _v + "\" ");
// [285]  Else 
} else {
// [286]  k = k.trim 
_k=_k.trim();
// [287]  v = v.trim 
_v=_v.trim();
// [288]  If k = {114} Then Continue 
if (_k=="") {continue;}
// [289]  If v = {115} Then Continue 
if (_v=="") {continue;}
// [290]  sbx.Append( {4} ) 
_sbx.append("" + _k + "=\"" + _v + "\" ");
// [291]  End If 
}
// [292]  Next 
}
// [293]  Return sbx.tostring 
return _sbx.toString();
// End Sub
};

// [296] Sub JoinMapKeys(m As Map, delim As String) As String 
this.joinmapkeys=function(_m,_delim) {
if (_B==null) _B=this;
var _sb,_ktot,_kcnt,_strkey;
// [297]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [298]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [299]  Dim kTot As Int = m.Size - 1 
_ktot=Object.keys(_m).length-1;
// [300]  Dim kCnt As Int 
_kcnt=0;
// [301]  Dim strKey As String = m.getkeyat(0) 
_strkey=banano_getB4JKeyAt(_m,0);
// [302]  sb.Append(strKey) 
_sb.append(_strkey);
// [303]  For kCnt = 1 To kTot 
for (_kcnt=1;_kcnt<=_ktot;_kcnt++) {
// [304]  Dim strKey As String = m.getkeyat(kCnt) 
_strkey=banano_getB4JKeyAt(_m,_kcnt);
// [305]  sb.Append(delim).append(strKey) 
_sb.append(_delim).append(_strkey);
// [306]  Next 
}
// [307]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [310] Sub LoremIpsum(count As String) As String 
this.loremipsum=function(_count) {
if (_B==null) _B=this;
// [311]  Return Rand_LoremIpsum(count) 
return _B.rand_loremipsum(_count,_B);
// End Sub
};

// [315] Sub Rand_LoremIpsum(count As Int) As String 
this.rand_loremipsum=function(_count) {
if (_B==null) _B=this;
var _str,_sb,_i;
// [316]  Dim str As String = {5} 
_str="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// [317]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [318]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [319]  For i = 1 To count 
for (_i=1;_i<=_count;_i++) {
// [320]  sb.Append(str).Append(CRLF) 
_sb.append(_str).append("\n");
// [321]  Next 
}
// [322]  Return sb.tostring 
return _sb.toString();
// End Sub
};

// [327] Sub ListOfMapsRecordPos(lst As List, k As String, v As String) As Int 
this.listofmapsrecordpos=function(_lst,_k,_v) {
if (_B==null) _B=this;
var _ltot,_lcnt,_m,_sk;
// [328]  Dim lTot As Int = lst.Size - 1 
_ltot=_lst.length-1;
// [329]  Dim lCnt As Int 
_lcnt=0;
// [330]  For lCnt = 0 To lTot 
for (_lcnt=0;_lcnt<=_ltot;_lcnt++) {
// [331]  Dim m As Map = lst.Get(lCnt) 
_m=_lst[_lcnt];
// [332]  Dim sk As String = m.GetDefault(k, {116} ) 
_sk=(_m[_k] || "");
// [333]  If sk.EqualsIgnoreCase(v) Then 
if (_sk.equalsIgnoreCase(_v)) {
// [334]  Return lCnt 
return _lcnt;
// [335]  End If 
}
// [336]  Next 
}
// [337]  Return -1 
return -1;
// End Sub
};

// [340] Sub MvDistinct(delim As String, strmv As String) As String 
this.mvdistinct=function(_delim,_strmv) {
if (_B==null) _B=this;
var _items,_mi,_k,_nl,_sout;
// [341]  Dim items As List = StrParse(delim, strmv) 
_items=_B.strparse(_delim,_strmv,_B);
// [342]  Dim mi As Map = CreateMap() 
_mi={};
// [343]  For Each k As String In items 
for (var _kindex=0;_kindex<_items.length;_kindex++) {
_k=_items[_kindex];
// [344]  mi.Put(k, k) 
_mi[_k]=_k;
// [345]  Next 
}
// [346]  Dim nl As List = NewList 
_nl=_B.newlist(_B);
// [347]  For Each k As String In mi.Keys 
var _kKeys = Object.keys(_mi);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [348]  nl.Add(k) 
_nl.push(_k);
// [349]  Next 
}
// [350]  Dim sout As String = Join(delim, nl) 
_sout=_B.join(_delim,_nl,_B);
// [351]  Return sout 
return _sout;
// End Sub
};

// [355] Sub KeyValues2Map(delim As String, keys As String, values As String) As Map 
this.keyvalues2map=function(_delim,_keys,_values) {
if (_B==null) _B=this;
var _rkeys,_rvalues,_optm,_rtot,_vtot,_rcnt,_k,_v;
// [356]  Dim rkeys As List = StrParse(delim, keys) 
_rkeys=_B.strparse(_delim,_keys,_B);
// [357]  Dim rvalues As List = StrParse(delim, values) 
_rvalues=_B.strparse(_delim,_values,_B);
// [359]  Dim optm As Map = CreateMap() 
_optm={};
// [361]  Dim rTot As Int = rkeys.Size -1 
_rtot=_rkeys.length-1;
// [362]  Dim vTot As Int = rvalues.Size - 1 
_vtot=_rvalues.length-1;
// [363]  If rTot <> vTot Then 
if (_rtot!=_vtot) {
// [364]  Else 
} else {
// [365]  Dim rCnt As Int 
_rcnt=0;
// [366]  For rCnt = 0 To rTot 
for (_rcnt=0;_rcnt<=_rtot;_rcnt++) {
// [367]  Dim k As String = rkeys.Get(rCnt) 
_k=_rkeys[_rcnt];
// [368]  Dim v As String = rvalues.Get(rCnt) 
_v=_rvalues[_rcnt];
// [369]  optm.put(k, v) 
_optm[_k]=_v;
// [370]  Next 
}
// [371]  End If 
}
// [372]  Return optm 
return _optm;
// End Sub
};

// [375] Sub NewMap As Map 
this.newmap=function() {
if (_B==null) _B=this;
var _nm;
// [376]  Dim nm As Map 
_nm={};
// [377]  nm.Initialize 
_nm={};
// [378]  Return nm 
return _nm;
// End Sub
};

// [382] Sub getElementById(sid As String) As BANanoObject 
this.getelementbyid=function(_sid) {
if (_B==null) _B=this;
var _el;
// [383]  Dim el As BANanoObject = BANano.Window.GetField( {117} ).RunMethod( {118} , Array(sid)) 
_el=window["document"]["getElementById"](_sid);
// [384]  Return el 
return _el;
// End Sub
};

// [395] Sub ListRemoveDuplicates(lst As List) As List 
this.listremoveduplicates=function(_lst) {
if (_B==null) _B=this;
var _nd,_k,_nl;
// [396]  Dim nd As Map = CreateMap() 
_nd={};
// [397]  For Each k As String In lst 
for (var _kindex=0;_kindex<_lst.length;_kindex++) {
_k=_lst[_kindex];
// [398]  nd.Put(k, k) 
_nd[_k]=_k;
// [399]  Next 
}
// [400]  Dim nl As List 
_nl=[];
// [401]  nl.Initialize 
_nl.length=0;
// [402]  For Each k As String In nd.Keys 
var _kKeys = Object.keys(_nd);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [403]  nl.Add(k) 
_nl.push(_k);
// [404]  Next 
}
// [405]  nl.Sort(True) 
if (!isNaN(parseFloat(_nl[0])) && isFinite(_nl[0])) {
_nl.sort(function(a, b){return a - b});
} else {
_nl.sort();
};
// [406]  Return nl 
return _nl;
// End Sub
};

// [410] Sub GetFileDetails(fileObj As Map) As FileObject 
this.getfiledetails=function(_fileobj) {
if (_B==null) _B=this;
var _sname,_slastmodifieddate,_ssize,_stype,_yyyy,_dd,_mm,_hh,_minutes,_fd,_ff;
// [411]  Dim sname As String = fileObj.Get( {123} ) 
_sname=_fileobj["name"];
// [412]  Dim slastModifiedDate As BANanoObject = fileObj.Get( {124} ) 
_slastmodifieddate=_fileobj["lastModifiedDate"];
// [413]  Dim ssize As String = fileObj.Get( {125} ) 
_ssize=_fileobj["size"];
// [414]  Dim stype As String = fileObj.Get( {126} ) 
_stype=_fileobj["type"];
// [416]  Dim yyyy As String = slastModifiedDate.RunMethod( {127} , Null).Result 
_yyyy=_slastmodifieddate["getFullYear"]();
// [417]  Dim dd As String = slastModifiedDate.RunMethod( {128} , Null).Result 
_dd=_slastmodifieddate["getDate"]();
// [418]  Dim mm As String = slastModifiedDate.RunMethod( {129} , Null).Result 
_mm=_slastmodifieddate["getMonth"]();
// [419]  Dim hh As String = slastModifiedDate.RunMethod( {130} , Null).Result 
_hh=_slastmodifieddate["getHours"]();
// [420]  Dim minutes As String = slastModifiedDate.RunMethod( {131} , Null).Result 
_minutes=_slastmodifieddate["getMinutes"]();
// [422]  dd = PadRight(dd, 2, {132} ) 
_dd=_B.padright(_dd,2,"0",_B);
// [423]  mm = PadRight(mm, 2, {133} ) 
_mm=_B.padright(_mm,2,"0",_B);
// [424]  hh = PadRight(hh, 2, {134} ) 
_hh=_B.padright(_hh,2,"0",_B);
// [425]  minutes = PadRight(minutes, 2, {135} ) 
_minutes=_B.padright(_minutes,2,"0",_B);
// [427]  Dim fd As String = {6} 
_fd="" + _yyyy + "-" + _mm + "-" + _dd + " " + _hh + ":" + _minutes + "";
// [430]  Dim ff As FileObject 
_ff= new banano_bananomjml_fileobject();
// [431]  ff.Initialize 
_ff.initialize();
// [432]  ff.FileName = sname 
_ff._filename=_sname;
// [433]  ff.FileDate = fd 
_ff._filedate=_fd;
// [434]  ff.FileSize = ssize 
_ff._filesize=_ssize;
// [435]  ff.FileType = stype 
_ff._filetype=_stype;
// [436]  Return ff 
return _ff;
// End Sub
};

// [440] Sub BeautifySourceCode(slang As String, sc As String) As String 
this.beautifysourcecode=function(_slang,_sc) {
if (_B==null) _B=this;
var _res;
// [441]  Select Case slang 
switch ("" + _slang) {
// [442]  Case {136} 
case "" + "js":
// [443]  Dim res As String = BANano.RunJavascriptMethod( {137} , Array(sc)) 
_res=BANanoExec("js_beautify", window, _sc);
// [444]  Case {138} 
break;
case "" + "css":
// [445]  Dim res As String = BANano.RunJavascriptMethod( {139} , Array(sc)) 
_res=BANanoExec("css_beautify", window, _sc);
// [446]  Case {140} 
break;
case "" + "html":
// [447]  Dim res As String = BANano.RunJavascriptMethod( {141} , Array(sc)) 
_res=BANanoExec("html_beautify", window, _sc);
// [448]  End Select 
break;
}
// [449]  Return res 
return _res;
// End Sub
};

// [453] private Sub DoUpload(fileObj As Object) As String 'ignore 
this.doupload=function(_fileobj) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _aevt,_xhr,_fd,_err,_serr;
// [454]  Dim aEvt As Object 
_aevt={};
// [455]  Dim xhr As BANanoXMLHttpRequest 
_xhr=null;
// [457]  Dim fd As BANanoObject 
_fd=null;
// [458]  fd.Initialize2( {142} ,Null) 
_fd=new FormData();
// [459]  fd.RunMethod( {143} , Array( {144} , fileObj)) 
_fd["append"]("upload",_fileobj);
// [461]  xhr.Initialize 
_xhr=new XMLHttpRequest();
// [462]  xhr.Open( {145} , {146} ) 
_xhr.open("POST","./assets/upload.php");
// [463]  xhr.AddEventListenerOpenAsync( {147} , aEvt) 
_xhr.onreadystatechange=async function(_aevt) {
// [464]  If xhr.ReadyState = 4 Then 
if (_xhr.readyState==4) {
// [465]  If xhr.Status = 200 Then 
if (_xhr.status==200) {
// [466]  BANano.ReturnThen(xhr.ResponseText) 
return _BANp.resolve(_xhr.responseText);
// [467]  Else 
} else {
// [468]  Dim err As Map = CreateMap() 
_err={};
// [469]  err.Put( {148} , {149} ) 
_err["status"]="error";
// [470]  Dim serr As String = BANano.ToJson(err) 
_serr=JSON.stringify(_err);
// [471]  BANano.ReturnElse(serr) 
return _BANp.reject(_serr);
// [472]  End If 
}
// [473]  End If 
}
// [474]  xhr.CloseEventListener 
};
// [475]  xhr.Send2(fd) 
_xhr.send(_fd);
// End Sub
};

// [478] Sub HTTPUpload(fileObj As Object, module As Object, methodname As String) 
this.httpupload=function(_fileobj,_module,_methodname) {
if (_B==null) _B=this;
var _promise,_error,_json;
// [479]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [481]  Dim Error As String 
_error="";
// [482]  Dim json As String 
_json="";
// [485]  promise.CallSub(Me, {150} , Array(fileObj)) 
_promise=BANanoPromise();
_B[("DoUpload").toLowerCase()](_fileobj,_promise,_B);
// [486]  promise.ThenWait(json) 
_promise.then(async function(_json) {
// [487]  BANano.CallSub(module, methodname, Array(fileObj, json)) 
(function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {var CSr = _module[(_methodname).toLowerCase()](_fileobj,_json,_B);if(CSr!=null) {return CSr}}})();
// [488]  promise.ElseWait(Error) 'ignore 
}).catch(async function(_error) {
// [489]  BANano.CallSub(module, methodname, Array(fileObj, Error)) 
(function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {var CSr = _module[(_methodname).toLowerCase()](_fileobj,_error,_B);if(CSr!=null) {return CSr}}})();
// [490]  promise.End 
});
// End Sub
};

// [494] Public Sub GetAlphabets(value As String) As String 
this.getalphabets=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [495]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [496]  Try 
try {
// [497]  value = value.Trim 
_value=_value.trim();
// [498]  If value = {151} Then value = {152} 
if (_value=="") {_value="";}
// [499]  Dim sout As String = {153} 
_sout="";
// [500]  Dim mout As String = {154} 
_mout="";
// [501]  Dim slen As Int = value.Length 
_slen=_value.length;
// [502]  Dim i As Int = 0 
_i=0;
// [503]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [504]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [505]  If InStr( {155} , mout) <> -1 Then 
if (_B.instr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ",_mout,_B)!=-1) {
// [506]  sout = sout & mout 
_sout=_sout+_mout;
// [507]  End If 
}
// [508]  Next 
}
// [509]  Return sout 
return _sout;
// [510]  Catch 
} catch(err) {
// [511]  Return value 
return _value;
// [512]  End Try 
}
// End Sub
};

// [516] Sub JSONPretty(m As Object) As String 
this.jsonpretty=function(_m) {
if (_B==null) _B=this;
var _pretty;
// [517]  Dim pretty As String = BANano.RunJavascriptMethod( {156} , Array(m, Null, 4)) 
_pretty=BANanoExec("JSON.stringify", window, _m,null,4);
// [518]  Return pretty 
return _pretty;
// End Sub
};

// [522] Sub ExtractMap(source As Map, keys As List) As Map 
this.extractmap=function(_source,_keys) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [523]  Dim nm As Map = CreateMap() 
_nm={};
// [524]  For Each k As String In keys 
for (var _kindex=0;_kindex<_keys.length;_kindex++) {
_k=_keys[_kindex];
// [525]  Dim v As Object = source.get(k) 
_v=_source[_k];
// [526]  nm.put(k, v) 
_nm[_k]=_v;
// [527]  Next 
}
// [528]  Return nm 
return _nm;
// End Sub
};

// [531] Sub InStr(Text As String, sFind As String) As Int 
this.instr=function(_text,_sfind) {
if (_B==null) _B=this;
// [532]  Return Text.tolowercase.IndexOf(sFind.tolowercase) 
return _text.toLowerCase().indexOf(_sfind.toLowerCase());
// End Sub
};

// [536] Sub JoinNonBlanks(delimiter As String, lst As List) As String 
this.joinnonblanks=function(_delimiter,_lst) {
if (_B==null) _B=this;
var _nl,_str,_i,_sb,_fld;
// [537]  If lst.size = 0 Then Return {157} 
if (_lst.length==0) { return "";}
// [539]  Dim nl As List 
_nl=[];
// [540]  nl.Initialize 
_nl.length=0;
// [541]  For Each str As String In lst 
for (var _strindex=0;_strindex<_lst.length;_strindex++) {
_str=_lst[_strindex];
// [542]  str = str.Trim 
_str=_str.trim();
// [543]  If str.Length > 0 Then 
if (_str.length>0) {
// [544]  nl.Add(str) 
_nl.push(_str);
// [545]  End If 
}
// [546]  Next 
}
// [547]  If nl.Size = 0 Then Return {158} 
if (_nl.length==0) { return "";}
// [549]  Dim i As Int 
_i=0;
// [550]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [551]  Dim fld As String 
_fld="";
// [552]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [553]  fld = nl.Get(0) 
_fld=_nl[0];
// [554]  sb.Append(fld) 
_sb.append(_fld);
// [555]  For i = 1 To nl.size - 1 
for (_i=1;_i<=_nl.length-1;_i++) {
// [556]  Dim fld As String = nl.Get(i) 
_fld=_nl[_i];
// [557]  sb.Append(delimiter).Append(fld) 
_sb.append(_delimiter).append(_fld);
// [558]  Next 
}
// [559]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [564] Sub JoinMaps(lst As List) As Map 
this.joinmaps=function(_lst) {
if (_B==null) _B=this;
var _nm,_mr,_k,_v;
// [565]  Dim nm As Map = CreateMap() 
_nm={};
// [566]  If lst.Size = 0 Then Return nm 
if (_lst.length==0) { return _nm;}
// [567]  For Each mr As Map In lst 
for (var _mrindex=0;_mrindex<_lst.length;_mrindex++) {
_mr=_lst[_mrindex];
// [568]  For Each k As String In mr.Keys 
var _kKeys = Object.keys(_mr);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [569]  Dim v As Object = mr.Get(k) 
_v=_mr[_k];
// [570]  nm.Put(k, v) 
_nm[_k]=_v;
// [571]  Next 
}
// [572]  Next 
}
// [573]  Return nm 
return _nm;
// End Sub
};

// [577] Sub JoinLists(lst As List) As List 
this.joinlists=function(_lst) {
if (_B==null) _B=this;
var _nl,_lo,_k;
// [578]  Dim nl As List 
_nl=[];
// [579]  nl.Initialize 
_nl.length=0;
// [580]  For Each lo As List In lst 
for (var _loindex=0;_loindex<_lst.length;_loindex++) {
_lo=_lst[_loindex];
// [581]  For Each k As Object In lo 
for (var _kindex=0;_kindex<_lo.length;_kindex++) {
_k=_lo[_kindex];
// [582]  nl.Add(k) 
_nl.push(_k);
// [583]  Next 
}
// [584]  Next 
}
// [585]  Return nl 
return _nl;
// End Sub
};

// [590] Sub MapKeys2List(m As Map) As List 
this.mapkeys2list=function(_m) {
if (_B==null) _B=this;
var _lst,_k;
// [591]  Dim lst As List 
_lst=[];
// [592]  lst.Initialize 
_lst.length=0;
// [593]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [594]  lst.Add(k) 
_lst.push(_k);
// [595]  Next 
}
// [596]  Return lst 
return _lst;
// End Sub
};

// [600] Sub MapValues2List(m As Map) As List 
this.mapvalues2list=function(_m) {
if (_B==null) _B=this;
var _lst,_k;
// [601]  Dim lst As List 
_lst=[];
// [602]  lst.Initialize 
_lst.length=0;
// [603]  For Each k As String In m.values 
for (_kKEY in _m) {
var _k=_m[_kKEY];
// [604]  lst.Add(k) 
_lst.push(_k);
// [605]  Next 
}
// [606]  Return lst 
return _lst;
// End Sub
};

// [611] Sub RSAIDNumber2DateOfBirth(rsaID As String) As String 
this.rsaidnumber2dateofbirth=function(_rsaid) {
if (_B==null) _B=this;
var _yymmdd,_yy,_mm,_dd;
// [613]  If rsaID.length = 13 Then 
if (_rsaid.length==13) {
// [614]  Dim yymmdd As String = LeftString(rsaID, 6) 
_yymmdd=_B.leftstring(_rsaid,6,_B);
// [615]  Dim yy As String = LeftString(yymmdd,2) 
_yy=_B.leftstring(_yymmdd,2,_B);
// [616]  Dim mm As String = MidString(yymmdd,3,2) 
_mm=_B.midstring(_yymmdd,3,2,_B);
// [617]  Dim dd As String = RightString(yymmdd,2) 
_dd=_B.rightstring(_yymmdd,2,_B);
// [618]  yymmdd = {7} 
_yymmdd="19" + _yy + "-" + _mm + "-" + _dd + "";
// [619]  Return yymmdd 
return _yymmdd;
// [620]  Else 
} else {
// [621]  Return {159} 
return "";
// [622]  End If 
}
// End Sub
};

// [625] Public Sub YearNow() As String 
this.yearnow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [626]  Dim lNow As Long 
_lnow=0;
// [627]  Dim dt As String 
_dt="";
// [628]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [629]  DateTime.DateFormat = {160} 
DateTime.SetDateFormat("yyyy");
// [630]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [631]  Return dt 
return _dt;
// End Sub
};

// [634] Public Sub MonthNow() As String 
this.monthnow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [635]  Dim lNow As Long 
_lnow=0;
// [636]  Dim dt As String 
_dt="";
// [637]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [638]  DateTime.DateFormat = {161} 
DateTime.SetDateFormat("M");
// [639]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [640]  Return dt 
return _dt;
// End Sub
};

// [643] Sub DateAdd(mDate As String, HowManyDays As Int) As String 
this.dateadd=function(_mdate,_howmanydays) {
if (_B==null) _B=this;
var _convertdate,_newdateday;
// [644]  HowManyDays = BANano.parseInt(HowManyDays) 
_howmanydays=parseInt(_howmanydays);
// [645]  Dim ConvertDate, NewDateDay As Long 
_convertdate=0;
_newdateday=0;
// [646]  ConvertDate = DateTime.DateParse(mDate) 
_convertdate=DateTime.DateParse(_mdate);
// [647]  NewDateDay = DateTime.Add(ConvertDate, 0, 0, HowManyDays) 
_newdateday=DateTime.Add(_convertdate,0,0,_howmanydays);
// [648]  Return DateTime.Date(NewDateDay) 
return DateTime.Date(_newdateday);
// End Sub
};

// [651] Sub MonthAdd(mDate As String, HowManyMonths As Int) As String 
this.monthadd=function(_mdate,_howmanymonths) {
if (_B==null) _B=this;
var _convertdate,_newdateday;
// [652]  HowManyMonths = BANano.parseInt(HowManyMonths) 
_howmanymonths=parseInt(_howmanymonths);
// [653]  Dim ConvertDate, NewDateDay As Long 
_convertdate=0;
_newdateday=0;
// [654]  ConvertDate = DateTime.DateParse(mDate) 
_convertdate=DateTime.DateParse(_mdate);
// [655]  NewDateDay = DateTime.Add(ConvertDate, 0, HowManyMonths, 0) 
_newdateday=DateTime.Add(_convertdate,0,_howmanymonths,0);
// [656]  Return DateTime.Date(NewDateDay) 
return DateTime.Date(_newdateday);
// End Sub
};

// [662] Sub NumberOfDaysBetweenDates(CurrentDate As String, OtherDate As String) As Int 
this.numberofdaysbetweendates=function(_currentdate,_otherdate) {
if (_B==null) _B=this;
var _currdate,_othdate,_tpd,_iout;
// [663]  Dim CurrDate, OthDate As Long 
_currdate=0;
_othdate=0;
// [664]  CurrDate = DateTime.DateParse(CurrentDate) 
_currdate=DateTime.DateParse(_currentdate);
// [665]  OthDate = DateTime.DateParse(OtherDate) 
_othdate=DateTime.DateParse(_otherdate);
// [666]  Dim tpd As Long = DateTime.TicksPerDay 
_tpd=DateTime.TicksPerDay();
// [667]  Dim iOut As Long = (CurrDate - OthDate)/tpd 
_iout=(_currdate-_othdate)/_tpd;
// [668]  Return iOut 
return _iout;
// End Sub
};

// [671] Public Sub CDbl(value As String) As Double 
this.cdbl=function(_value) {
if (_B==null) _B=this;
var _out;
// [672]  Try 
try {
// [673]  value = value.Trim 
_value=_value.trim();
// [674]  If value = {162} Then value = {163} 
if (_value=="") {_value="0";}
// [675]  value = value.Replace( {164} , {165} ) 
_value=_value.split(",").join("");
// [676]  Dim out As Double = NumberFormat2(value,0,2,2,False) 
_out=BANano_nf2(BANano_r2f(_value, 2, 2),0,false);
// [677]  Return out 
return _out;
// [678]  Catch 
} catch(err) {
// [679]  Return value 
return _value;
// [680]  End Try 
}
// End Sub
};

// [684] Sub ProjectDays(sDays As String) As String 
this.projectdays=function(_sdays) {
if (_B==null) _B=this;
// [685]  Try 
try {
// [686]  sDays = sDays.trim 
_sdays=_sdays.trim();
// [687]  If sDays = {166} Then sDays = {167} 
if (_sdays=="") {_sdays="0";}
// [688]  sDays = sDays.Replace( {168} , {169} ) 
_sdays=_sdays.split(",").join("");
// [689]  sDays = NumberFormat2(sDays,0,0,0,True) 
_sdays=BANano_nf2(BANano_r2f(_sdays, 0, 0),0,true);
// [690]  Return sDays & {170} 
return _sdays+" Dys";
// [691]  Catch 
} catch(err) {
// [692]  Return {171} 
return "0 Dys";
// [693]  End Try 
}
// End Sub
};

// [696] Sub ProjectDate(sDate As String) As String 
this.projectdate=function(_sdate) {
if (_B==null) _B=this;
var _dt;
// [697]  If sDate.Length = 0 Then Return {172} 
if (_sdate.length==0) { return "";}
// [698]  Try 
try {
// [699]  DateTime.DateFormat = {173} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [700]  Dim dt As Long = DateTime.DateParse(sDate) 
_dt=DateTime.DateParse(_sdate);
// [701]  DateTime.DateFormat = {174} 
DateTime.SetDateFormat("dd-MMM-yyyy, EEE");
// [702]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// [703]  Catch 
} catch(err) {
// [704]  Return {175} 
return "";
// [705]  End Try 
}
// End Sub
};

// [709] Sub FormatFileSize(Bytes As Float) As String 
this.formatfilesize=function(_bytes) {
if (_B==null) _B=this;
var _unit,_po,_si,_i;
// [710]  If BANano.IsNull(Bytes) Or BANano.IsUndefined(Bytes) Then 
if (is.null(_bytes) || is.undefined(_bytes)) {
// [711]  Bytes = 0 
_bytes=0;
// [712]  End If 
}
// [713]  Bytes = BANano.parsefloat(Bytes) 
_bytes=parseFloat(_bytes);
// [714]  Try 
try {
// [715]  Private Unit() As String = Array As String( {176} , {177} , {178} , {179} , {180} , {181} , {182} , {183} , {184} ) 
_unit=[" Byte"," KB"," MB"," GB"," TB"," PB"," EB"," ZB"," YB"];
// [716]  If Bytes = 0 Then 
if (_bytes==0) {
// [717]  Return {185} 
return "0 Bytes";
// [718]  Else 
} else {
// [719]  Private Po, Si As Double 
_po=0;
_si=0;
// [720]  Private I As Int 
_i=0;
// [721]  Bytes = Abs(Bytes) 
_bytes=(Math.abs(_bytes));
// [722]  I = Floor(Logarithm(Bytes, 1024)) 
_i=(Math.floor((Math.log(_bytes)/Math.log(1024))));
// [723]  Po = Power(1024, I) 
_po=Math.pow(1024,_i);
// [724]  Si = Bytes / Po 
_si=_bytes/_po;
// [725]  Return NumberFormat(Si, 1, 3) & Unit(I) 
return BANano_nf(BANano_r(_si, 3),1)+_unit[_i];
// [726]  End If 
}
// [727]  Catch 
} catch(err) {
// [728]  Return {186} 
return "0 Bytes";
// [729]  End Try 
}
// End Sub
};

// [732] Sub InStrRev(value As String, search As String) As Long 
this.instrrev=function(_value,_search) {
if (_B==null) _B=this;
// [733]  Return value.LastIndexOf(search) + 1 
return _value.lastIndexOf(_search)+1;
// End Sub
};

// [738] Sub Len(Text As String) As Int 
this.len=function(_text) {
if (_B==null) _B=this;
// [739]  Return Text.Length 
return _text.length;
// End Sub
};

// [743] Sub PadRight(Value As String, MaxLen As Int, PadChar As String) As String 
this.padright=function(_value,_maxlen,_padchar) {
if (_B==null) _B=this;
var _intordnolen,_i;
// [744]  Value = CStr(Value) 
_value=_B.cstr(_value,_B);
// [745]  Dim intOrdNoLen As Int = Len(Value) 
_intordnolen=_B.len(_value,_B);
// [746]  Dim i As Int 
_i=0;
// [747]  For i = 1 To (MaxLen - intOrdNoLen) Step 1 
for (_i=1;_i<=(_maxlen-_intordnolen);_i+=1) {
// [748]  Value = PadChar & Value 
_value=_padchar+_value;
// [749]  Next 
}
// [750]  Return Value 
return _value;
// End Sub
};

// [753] Sub GetListOfMapsProperty(lst As List, prop As String) As List 
this.getlistofmapsproperty=function(_lst,_prop) {
if (_B==null) _B=this;
var _kc,_rec,_v;
// [754]  prop = prop.tolowercase 
_prop=_prop.toLowerCase();
// [755]  Dim kc As List 
_kc=[];
// [756]  kc.initialize 
_kc.length=0;
// [757]  For Each rec As Map In lst 
for (var _recindex=0;_recindex<_lst.length;_recindex++) {
_rec=_lst[_recindex];
// [758]  Dim v As String = rec.Get(prop) 
_v=_rec[_prop];
// [759]  kc.add(v) 
_kc.push(_v);
// [760]  Next 
}
// [761]  Return kc 
return _kc;
// End Sub
};

// [765] Sub SumListOfMapsProperty(lst As List, prop As String) As Double 
this.sumlistofmapsproperty=function(_lst,_prop) {
if (_B==null) _B=this;
var _tsum,_rec,_propv;
// [766]  Dim tsum As Double = 0 
_tsum=0;
// [767]  For Each rec As Map In lst 
for (var _recindex=0;_recindex<_lst.length;_recindex++) {
_rec=_lst[_recindex];
// [768]  Dim propv As String = rec.GetDefault(prop, {187} ) 
_propv=(_rec[_prop] || "0");
// [769]  tsum = tsum + BANAno.parseFloat(propv) 
_tsum=_tsum+parseFloat(_propv);
// [770]  Next 
}
// [771]  Return tsum 
return _tsum;
// End Sub
};

// [775] Public Sub Val(value As String) As String 
this.val=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [776]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [777]  Try 
try {
// [778]  value = value.Trim 
_value=_value.trim();
// [779]  If value = {188} Then value = {189} 
if (_value=="") {_value="0";}
// [780]  Dim sout As String = {190} 
_sout="";
// [781]  Dim mout As String = {191} 
_mout="";
// [782]  Dim slen As Int = value.Length 
_slen=_value.length;
// [783]  Dim i As Int = 0 
_i=0;
// [784]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [785]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [786]  If InStr( {192} , mout) <> -1 Then 
if (_B.instr("0123456789.-",_mout,_B)!=-1) {
// [787]  sout = sout & mout 
_sout=_sout+_mout;
// [788]  End If 
}
// [789]  Next 
}
// [790]  Return sout 
return _sout;
// [791]  Catch 
} catch(err) {
// [792]  Return value 
return _value;
// [793]  End Try 
}
// End Sub
};

// [796] Public Sub Alpha(value As String) As String 
this.alpha=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [797]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [798]  Try 
try {
// [799]  value = value.Trim 
_value=_value.trim();
// [800]  If value = {193} Then value = {194} 
if (_value=="") {_value="";}
// [801]  Dim sout As String = {195} 
_sout="";
// [802]  Dim mout As String = {196} 
_mout="";
// [803]  Dim slen As Int = value.Length 
_slen=_value.length;
// [804]  Dim i As Int = 0 
_i=0;
// [805]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [806]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [807]  If InStr( {197} , mout) <> -1 Then 
if (_B.instr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",_mout,_B)!=-1) {
// [808]  sout = sout & mout 
_sout=_sout+_mout;
// [809]  End If 
}
// [810]  Next 
}
// [811]  Return sout 
return _sout;
// [812]  Catch 
} catch(err) {
// [813]  Return value 
return _value;
// [814]  End Try 
}
// End Sub
};

// [819] Sub List2KeyValues(lst As List, mapvalues As List) As List 
this.list2keyvalues=function(_lst,_mapvalues) {
if (_B==null) _B=this;
// [820]  Return List2IDValue(lst, mapvalues) 
return _B.list2idvalue(_lst,_mapvalues,_B);
// End Sub
};

// [824] Sub List2IDValue(lst As List, mapValues As List) As List 
this.list2idvalue=function(_lst,_mapvalues) {
if (_B==null) _B=this;
var _mv1,_mv2,_nlst,_dict,_mk,_mv,_nm;
// [825]  Dim mv1 As String = mapValues.get(0) 
_mv1=_mapvalues[0];
// [826]  Dim mv2 As String = mapValues.get(1) 
_mv2=_mapvalues[1];
// [827]  Dim nlst As List 
_nlst=[];
// [828]  nlst.initialize 
_nlst.length=0;
// [829]  For Each dict As Map In lst 
for (var _dictindex=0;_dictindex<_lst.length;_dictindex++) {
_dict=_lst[_dictindex];
// [830]  Dim mk As String = dict.get(mv1) 
_mk=_dict[_mv1];
// [831]  Dim mv As String = dict.get(mv2) 
_mv=_dict[_mv2];
// [832]  Dim nm As Map = CreateMap() 
_nm={};
// [833]  nm.Put( {198} , mk) 
_nm["id"]=_mk;
// [834]  nm.put( {199} , mv) 
_nm["value"]=_mv;
// [835]  nlst.Add(nm) 
_nlst.push(_nm);
// [836]  Next 
}
// [837]  Return nlst 
return _nlst;
// End Sub
};

// [840] Sub List2ArrayVariable(lst As List) As String 
this.list2arrayvariable=function(_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld;
// [841]  If lst.Size = 0 Then 
if (_lst.length==0) {
// [842]  Return {8} 
return "\"\"";
// [843]  End If 
}
// [844]  Dim i As Int 
_i=0;
// [845]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [846]  Dim fld As String 
_fld="";
// [847]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [848]  fld = lst.Get(0) 
_fld=_lst[0];
// [849]  fld = {9} 
_fld="\"" + _fld + "\"";
// [850]  sb.Append(fld) 
_sb.append(_fld);
// [851]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [852]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [853]  fld = {10} 
_fld="\"" + _fld + "\"";
// [854]  sb.Append( {200} ).Append(fld) 
_sb.append(",").append(_fld);
// [855]  Next 
}
// [856]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [860] Sub JSONValues2LowerCase(sJSON As String, props As List) As String 
this.jsonvalues2lowercase=function(_sjson,_props) {
if (_B==null) _B=this;
var _jmap,_njson;
// [862]  Dim jmap As Map = Json2Map(sJSON) 
_jmap=_B.json2map(_sjson,_B);
// [863]  MapValues2LowerCase(jmap, props) 
_B.mapvalues2lowercase(_jmap,_props,_B);
// [864]  Dim nJSON As String = Map2Json(jmap) 
_njson=_B.map2json(_jmap,_B);
// [865]  Return nJSON 
return _njson;
// End Sub
};

// [870] Sub Map2Json(mp As Map) As String 
this.map2json=function(_mp) {
if (_B==null) _B=this;
var _json;
// [871]  Dim JSON As BANanoJSONGenerator 
_json={};
// [872]  JSON.Initialize(mp) 
_json=_mp;
// [873]  Return JSON.ToString 
return JSON.stringify(_json);
// End Sub
};

// [876] Sub Map2JsonPretty(mp As Map) As String 
this.map2jsonpretty=function(_mp) {
if (_B==null) _B=this;
var _json;
// [877]  Dim JSON As BANanoJSONGenerator 
_json={};
// [878]  JSON.Initialize(mp) 
_json=_mp;
// [879]  Return JSON.ToPrettyString(4) 
return JSON.stringify(_json, null, 4);
// End Sub
};

// [884] Sub Json2Map(strJSON As String) As Map 
this.json2map=function(_strjson) {
if (_B==null) _B=this;
var _json,_map1;
// [885]  Dim json As BANanoJSONParser 
_json={};
// [886]  Dim Map1 As Map 
_map1={};
// [887]  Map1.Initialize 
_map1={};
// [888]  Map1.clear 
_map1={};
// [889]  Try 
try {
// [890]  If strJSON.length > 0 Then 
if (_strjson.length>0) {
// [891]  json.Initialize(strJSON) 
_json=JSON.parse(_strjson);
// [892]  Map1 = json.NextObject 
_map1=_json;
// [893]  End If 
}
// [894]  Return Map1 
return _map1;
// [895]  Catch 
} catch(err) {
// [896]  Return Map1 
return _map1;
// [897]  End Try 
}
// End Sub
};

// [900] Sub NewDate(year As Int, month As Int, day As Int) As BANanoObject 
this.newdate=function(_year,_month,_day) {
if (_B==null) _B=this;
var _dd;
// [901]  Dim dd As BANanoObject 
_dd=null;
// [902]  dd.Initialize2( {201} , Array(year, month, day)) 
_dd=new Date(_year,_month,_day);
// [903]  Return dd 
return _dd;
// End Sub
};

// [906] Sub NewDateTime(year As Int, month As Int, day As Int, hour As Int, minute As Int) As BANanoObject 
this.newdatetime=function(_year,_month,_day,_hour,_minute) {
if (_B==null) _B=this;
var _dd;
// [907]  Dim dd As BANanoObject 
_dd=null;
// [908]  dd.Initialize2( {202} , Array(year, month, day, hour, minute)) 
_dd=new Date(_year,_month,_day,_hour,_minute);
// [909]  Return dd 
return _dd;
// End Sub
};

// [912] Sub Pad(Value As String, MaxLen As Int, PadChar As String, right As Boolean) As String 
this.pad=function(_value,_maxlen,_padchar,_right) {
if (_B==null) _B=this;
var _intordnolen,_i;
// [913]  Dim intOrdNoLen As Int = Value.Length 
_intordnolen=_value.length;
// [914]  Dim i As Int 
_i=0;
// [915]  For i = 1 To (MaxLen - intOrdNoLen) Step 1 
for (_i=1;_i<=(_maxlen-_intordnolen);_i+=1) {
// [916]  If right Then 
if (_right) {
// [917]  Value = Value & PadChar 
_value=_value+_padchar;
// [918]  Else 
} else {
// [919]  Value = PadChar & Value 
_value=_padchar+_value;
// [920]  End If 
}
// [921]  Next 
}
// [922]  Return Value 
return _value;
// End Sub
};

// [925] Sub CLng(o As Object) As Long 
this.clng=function(_o) {
if (_B==null) _B=this;
// [926]  Return Floor(o) 
return (Math.floor(_o));
// End Sub
};

// [929] Sub CInt(o As Object) As Int 
this.cint=function(_o) {
if (_B==null) _B=this;
// [930]  Return Floor(o) 
return (Math.floor(_o));
// End Sub
};

// [935] Sub List2Json(mp As List) As String 
this.list2json=function(_mp) {
if (_B==null) _B=this;
var _json;
// [936]  Dim JSON As BANanoJSONGenerator 
_json={};
// [937]  JSON.Initialize2(mp) 
_json=_mp;
// [938]  Return JSON.ToString 
return JSON.stringify(_json);
// End Sub
};

// [942] Sub Json2List(strValue As String) As List 
this.json2list=function(_strvalue) {
if (_B==null) _B=this;
var _lst,_parser;
// [943]  Dim lst As List 
_lst=[];
// [944]  lst.Initialize 
_lst.length=0;
// [945]  lst.clear 
_lst.length=0;
// [946]  If strValue.Length = 0 Then 
if (_strvalue.length==0) {
// [947]  Return lst 
return _lst;
// [948]  End If 
}
// [949]  Try 
try {
// [950]  Dim parser As BANanoJSONParser 
_parser={};
// [951]  parser.Initialize(strValue) 
_parser=JSON.parse(_strvalue);
// [952]  Return parser.NextArray 
return _parser;
// [953]  Catch 
} catch(err) {
// [954]  Return lst 
return _lst;
// [955]  End Try 
}
// End Sub
};

// [959] Sub MapValues2LowerCase(m As Map, props As List) 
this.mapvalues2lowercase=function(_m,_props) {
if (_B==null) _B=this;
var _prop,_v;
// [960]  For Each prop As String In props 
for (var _propindex=0;_propindex<_props.length;_propindex++) {
_prop=_props[_propindex];
// [961]  If m.ContainsKey(prop) Then 
if ((_prop in _m)) {
// [962]  Dim v As String = m.GetDefault(prop, {203} ) 
_v=(_m[_prop] || "");
// [963]  v = v.tolowercase 
_v=_v.toLowerCase();
// [964]  m.Put(prop,v) 
_m[_prop]=_v;
// [965]  End If 
}
// [966]  Next 
}
// End Sub
};

// [969] Sub NumberSuffix(N As Double) As String 
this.numbersuffix=function(_n) {
if (_B==null) _B=this;
var _suffix,_thousands,_maxdecimalplaces,_relativeerror;
// [970]  If N < 0 Then 
if (_n<0) {
// [971]  Return {204} & NumberSuffix(-N) 
return "-"+_B.numbersuffix(-_n,_B);
// [972]  End If 
}
// [973]  Dim Suffix() As String = Array As String( {205} , {206} , {207} , {208} , {209} ) 
_suffix=["","k","M","B","T"];
// [974]  Dim Thousands As Int = 0 
_thousands=0;
// [975]  Do While N >= 1000 And Thousands < Suffix.Length - 1 
while (_n>=1000 && _thousands<_suffix.length-1) {
// [976]  Thousands = Thousands + 1 
_thousands=_thousands+1;
// [977]  N = N / 1000 
_n=_n/1000;
// [978]  Loop 
}
// [979]  If Thousands = 0 Then 
if (_thousands==0) {
// [980]  Return NumberFormat2(N, 1, 2, 2, False) 
return BANano_nf2(BANano_r2f(_n, 2, 2),1,false);
// [981]  End If 
}
// [983]  Dim MaxDecimalPlaces As Int = 0 
_maxdecimalplaces=0;
// [984]  Do While MaxDecimalPlaces < 5 
while (_maxdecimalplaces<5) {
// [985]  Dim RelativeError As Double = Abs(N - Round2(N, MaxDecimalPlaces)) / N 
_relativeerror=(Math.abs(_n-(+(Math.round(_n+"e+"+_maxdecimalplaces)+"e-"+_maxdecimalplaces))))/_n;
// [986]  If RelativeError < 0.007 Then 
if (_relativeerror<0.007) {
// [987]  Exit 
break;
// [988]  End If 
}
// [989]  MaxDecimalPlaces = MaxDecimalPlaces + 1 
_maxdecimalplaces=_maxdecimalplaces+1;
// [990]  Loop 
}
// [991]  Return NumberFormat2(N, 1, 0, MaxDecimalPlaces, False) & Suffix(Thousands) 
return BANano_nf2(BANano_r2f(_n, 0, _maxdecimalplaces),1,false)+_suffix[_thousands];
// End Sub
};

// [995] Sub List2Array (a_lstArgs As List) As String() 
this.list2array=function(_a_lstargs) {
if (_B==null) _B=this;
var _arrargs,_i;
// [996]  Dim arrArgs(a_lstArgs.Size) As String 
_arrargs=[];
// [997]  For i = 0 To arrArgs.Length - 1 
for (_i=0;_i<=_arrargs.length-1;_i++) {
// [998]  arrArgs(i) = a_lstArgs.Get(i) 
_arrargs[_i]=_a_lstargs[_i];
// [999]  Next 
}
// [1000]  Return arrArgs 
return _arrargs;
// End Sub
};

// [1004] Sub RandomString(iLength As Int, bLowerCase As Boolean, bUpperCase As Boolean, bNumbers As Boolean, AdditionalChars As String) As String 
this.randomstring=function(_ilength,_blowercase,_buppercase,_bnumbers,_additionalchars) {
if (_B==null) _B=this;
var _source,_sb,_i,_r;
// [1005]  Dim source As String 
_source="";
// [1006]  If bLowerCase = True Then 
if (_blowercase==true) {
// [1007]  source = source & {210} 
_source=_source+"abcdefghijklmnopqrstuvwxyz";
// [1008]  End If 
}
// [1009]  If bUpperCase = True Then 
if (_buppercase==true) {
// [1010]  source = source & {211} 
_source=_source+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// [1011]  End If 
}
// [1012]  If bNumbers = True Then 
if (_bnumbers==true) {
// [1013]  source = source & {212} 
_source=_source+"0123456789";
// [1014]  End If 
}
// [1015]  If AdditionalChars.Length > 0 Then 
if (_additionalchars.length>0) {
// [1016]  source = source&AdditionalChars 
_source=_source+_additionalchars;
// [1017]  End If 
}
// [1019]  Dim SB As StringBuilder 
_sb=new StringBuilder();
// [1020]  SB.Initialize 
_sb.init();
_sb.isinitialized=true;
// [1021]  For i = 1 To iLength 
for (_i=1;_i<=_ilength;_i++) {
// [1022]  Dim r As Int = Rnd(0,source.Length-1) 
_r=(Math.floor(Math.random() * (_source.length-1 - 0) + 0));
// [1023]  SB.Append(source.SubString2(r,r+1)) 
_sb.append(_source.substring(_r,_r+1));
// [1024]  Next 
}
// [1025]  Return SB.ToString 
return _sb.toString();
// End Sub
};

// [1028] Sub GeneratePassword(IntNum As Int) As String 
this.generatepassword=function(_intnum) {
if (_B==null) _B=this;
// [1029]  Return RandomString(IntNum,True,True,True, {213} ) 
return _B.randomstring(_intnum,true,true,true,"",_B);
// End Sub
};

// [1033] Sub RemDelimSB(delimiter As String, value As StringBuilder) As StringBuilder 
this.remdelimsb=function(_delimiter,_value) {
if (_B==null) _B=this;
var _delimlen;
// [1034]  If value.tostring.EndsWith(delimiter) = True Then 
if (_value.toString().endsWith(_delimiter)==true) {
// [1035]  Dim delimLen As Int = delimiter.length 
_delimlen=_delimiter.length;
// [1036]  value.Remove(value.Length-delimLen,value.Length) 
_value.remove(_value.length()-_delimlen, _value.length());
// [1037]  End If 
}
// [1038]  Return value 
return _value;
// End Sub
};

// [1042] Sub Space(HM As Int) As String 
this.space=function(_hm) {
if (_B==null) _B=this;
var _rs;
// [1043]  Dim RS As String = {214} 
_rs="";
// [1044]  Do While Len(RS) < HM 
while (_B.len(_rs,_B)<_hm) {
// [1045]  RS = RS & {215} 
_rs=_rs+" ";
// [1046]  Loop 
}
// [1047]  Return RS 
return _rs;
// End Sub
};

// [1050] Sub MakeMoney(sValue As String) As String 
this.makemoney=function(_svalue) {
if (_B==null) _B=this;
// [1051]  If sValue.Length = 0 Then Return {216} 
if (_svalue.length==0) { return "0.00";}
// [1052]  If sValue = {217} Then sValue = {218} 
if (_svalue=="null") {_svalue="0.00";}
// [1053]  sValue = sValue.Replace( {219} , {220} ) 
_svalue=_svalue.split(",").join("");
// [1054]  sValue = Val(sValue) 
_svalue=_B.val(_svalue,_B);
// [1055]  If sValue = {221} Then sValue = {222} 
if (_svalue=="0") {_svalue="000";}
// [1056]  sValue = Round2(sValue,2) 
_svalue=(+(Math.round(_svalue+"e+"+2)+"e-"+2));
// [1057]  Return NumberFormat2(sValue, 1, 2, 2, True) 
return BANano_nf2(BANano_r2f(_svalue, 2, 2),1,true);
// End Sub
};

// [1060] Sub Percentage(sValue As String) As String 
this.percentage=function(_svalue) {
if (_B==null) _B=this;
// [1061]  If sValue = {223} Then sValue = {224} 
if (_svalue=="") {_svalue="0.00";}
// [1062]  If sValue.Length = 0 Then Return {225} 
if (_svalue.length==0) { return "0.00";}
// [1063]  If sValue = {226} Then sValue = {227} 
if (_svalue=="null") {_svalue="0.00";}
// [1064]  sValue = sValue.Replace( {228} , {229} ) 
_svalue=_svalue.split(",").join("");
// [1065]  sValue = Val(sValue) 
_svalue=_B.val(_svalue,_B);
// [1066]  If sValue = {230} Then sValue = {231} 
if (_svalue=="0") {_svalue="0.00";}
// [1067]  sValue = Round2(sValue,2) 
_svalue=(+(Math.round(_svalue+"e+"+2)+"e-"+2));
// [1068]  sValue = sValue & {232} 
_svalue=_svalue+"%";
// [1069]  Return sValue 
return _svalue;
// End Sub
};

// [1072] Sub MidString(Text As String, Start As Int, lLength As Int) As String 
this.midstring=function(_text,_start,_llength) {
if (_B==null) _B=this;
// [1073]  Return Text.SubString2(Start-1,Start+lLength-1) 
return _text.substring(_start-1,_start+_llength-1);
// End Sub
};

// [1076] Sub MidString2(Text As String, Start As Int) As String 
this.midstring2=function(_text,_start) {
if (_B==null) _B=this;
// [1077]  Return Text.SubString(Start-1) 
return _text.substring(_start-1);
// End Sub
};

// [1080] Sub RightString(Text As String, lLength As Long) As String 
this.rightstring=function(_text,_llength) {
if (_B==null) _B=this;
// [1081]  If lLength>Text.Length Then lLength=Text.Length 
if (_llength>_text.length) {_llength=_text.length;}
// [1082]  Return Text.SubString(Text.Length-lLength) 
return _text.substring(_text.length-_llength);
// End Sub
};

// [1085] Sub LeftString(Text As String, lLength As Long)As String 
this.leftstring=function(_text,_llength) {
if (_B==null) _B=this;
// [1086]  If lLength>Text.Length Then lLength=Text.Length 
if (_llength>_text.length) {_llength=_text.length;}
// [1087]  Return Text.SubString2(0, lLength) 
return _text.substring(0,_llength);
// End Sub
};

// [1090] Sub ReplaceString(Text As String, sFind As String, sReplaceWith As String) As String 
this.replacestring=function(_text,_sfind,_sreplacewith) {
if (_B==null) _B=this;
// [1091]  Return Text.Replace(sFind, sReplaceWith) 
return _text.split(_sfind).join(_sreplacewith);
// End Sub
};

// [1094] Sub LongDate(sDate As String) As String 
this.longdate=function(_sdate) {
if (_B==null) _B=this;
var _dt;
// [1095]  If sDate.Length = 0 Then Return {233} 
if (_sdate.length==0) { return "";}
// [1096]  Try 
try {
// [1097]  DateTime.DateFormat = {234} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [1098]  Dim dt As Long = DateTime.DateParse(sDate) 
_dt=DateTime.DateParse(_sdate);
// [1099]  DateTime.DateFormat = {235} 
DateTime.SetDateFormat("EEEE, dd MMMM yyyy");
// [1100]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// [1101]  Catch 
} catch(err) {
// [1102]  Return {236} 
return "";
// [1103]  End Try 
}
// End Sub
};

// [1106] Sub LongDateTime(sDate As String) As String 
this.longdatetime=function(_sdate) {
if (_B==null) _B=this;
var _dt;
// [1107]  If sDate.Length = 0 Then Return {237} 
if (_sdate.length==0) { return "";}
// [1108]  Try 
try {
// [1109]  DateTime.DateFormat = {238} 
DateTime.SetDateFormat("yyyy-MM-dd HH:mm");
// [1110]  Dim dt As Long = DateTime.DateParse(sDate) 
_dt=DateTime.DateParse(_sdate);
// [1111]  DateTime.DateFormat = {239} 
DateTime.SetDateFormat("EEEE, dd MMMM yyyy HH:mm");
// [1112]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// [1113]  Catch 
} catch(err) {
// [1114]  Return {240} 
return "";
// [1115]  End Try 
}
// End Sub
};

// [1118] private Sub TrimString(strValue As String) As String 
this.trimstring=function(_strvalue) {
if (_B==null) _B=this;
// [1119]  Return strValue.trim 
return _strvalue.trim();
// End Sub
};

// [1122] Sub LCase(Text As String) As String 
this.lcase=function(_text) {
if (_B==null) _B=this;
// [1123]  Return Text.ToLowerCase 
return _text.toLowerCase();
// End Sub
};

// [1126] Public Sub InQuotes(sValue As String) As String 
this.inquotes=function(_svalue) {
if (_B==null) _B=this;
// [1127]  Return QUOTE & sValue & QUOTE 
return "\""+_svalue+"\"";
// End Sub
};

// [1130] Sub ProperCase(myStr As String) As String 
this.propercase=function(_mystr) {
if (_B==null) _B=this;
var _x,_j,_k;
// [1131]  Try 
try {
// [1132]  If myStr.trim.length = 0 Then Return {241} 
if (_mystr.trim().length==0) { return "";}
// [1133]  Dim x As String 
_x="";
// [1134]  Dim j, k As Int 
_j=0;
_k=0;
// [1135]  myStr = myStr.tolowercase 
_mystr=_mystr.toLowerCase();
// [1136]  x = myStr.ToUpperCase.CharAt(0) 
_x=_mystr.toUpperCase().charAt(0);
// [1137]  myStr = x & myStr.SubString2(1, myStr.Length) 
_mystr=_x+_mystr.substring(1,_mystr.length);
// [1138]  For j = 1 To myStr.Length 
for (_j=1;_j<=_mystr.length;_j++) {
// [1139]  k = myStr.IndexOf2( {242} , j + 1) 
_k=_mystr.indexOf(" ",_j+1);
// [1140]  If k = -1 Then Exit 
if (_k==-1) {break;}
// [1141]  x = myStr.ToUpperCase.CharAt(k + 1) 
_x=_mystr.toUpperCase().charAt(_k+1);
// [1142]  myStr = myStr.SubString2(0, k + 1) & x & myStr.SubString2(k + 2, myStr.Length) 
_mystr=_mystr.substring(0,_k+1)+_x+_mystr.substring(_k+2,_mystr.length);
// [1143]  Next 
}
// [1144]  Return myStr 
return _mystr;
// [1145]  Catch 
} catch(err) {
// [1146]  Return myStr 
return _mystr;
// [1147]  End Try 
}
// End Sub
};

// [1152] Sub MapKeysLowerCaseSingle(m As Map) As Map 
this.mapkeyslowercasesingle=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1153]  Dim nm As Map = CreateMap() 
_nm={};
// [1154]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1155]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [1156]  k = k.tolowercase 
_k=_k.toLowerCase();
// [1157]  nm.Put(k, v) 
_nm[_k]=_v;
// [1158]  Next 
}
// [1159]  Return nm 
return _nm;
// End Sub
};

// [1163] Sub MapKeysLowerCaseList(lst As List) As List 
this.mapkeyslowercaselist=function(_lst) {
if (_B==null) _B=this;
var _nl,_rec;
// [1164]  Dim nl As List 
_nl=[];
// [1165]  nl.Initialize 
_nl.length=0;
// [1166]  For Each rec As Map In lst 
for (var _recindex=0;_recindex<_lst.length;_recindex++) {
_rec=_lst[_recindex];
// [1167]  rec = MapKeysLowerCaseSingle(rec) 
_rec=_B.mapkeyslowercasesingle(_rec,_B);
// [1168]  nl.Add(rec) 
_nl.push(_rec);
// [1169]  Next 
}
// [1170]  Return nl 
return _nl;
// End Sub
};

// [1175] Sub GetMapValues(sourceMap As Map) As List 
this.getmapvalues=function(_sourcemap) {
if (_B==null) _B=this;
var _listofvalues,_icnt,_itot,_value;
// [1176]  Dim listOfValues As List 
_listofvalues=[];
// [1177]  listOfValues.Initialize 
_listofvalues.length=0;
// [1178]  Dim iCnt As Int 
_icnt=0;
// [1179]  Dim iTot As Int 
_itot=0;
// [1180]  iTot = sourceMap.Size - 1 
_itot=Object.keys(_sourcemap).length-1;
// [1181]  For iCnt = 0 To iTot 
for (_icnt=0;_icnt<=_itot;_icnt++) {
// [1182]  Dim value As Object = sourceMap.GetValueAt(iCnt) 
_value=banano_getB4JValueAt(_sourcemap,_icnt);
// [1183]  listOfValues.Add(value) 
_listofvalues.push(_value);
// [1184]  Next 
}
// [1185]  Return listOfValues 
return _listofvalues;
// End Sub
};

// [1189] Sub GetMapKeys(sourceMap As Map) As List 
this.getmapkeys=function(_sourcemap) {
if (_B==null) _B=this;
var _listofvalues,_icnt,_itot,_value;
// [1190]  Dim listOfValues As List 
_listofvalues=[];
// [1191]  listOfValues.Initialize 
_listofvalues.length=0;
// [1192]  Dim iCnt As Int 
_icnt=0;
// [1193]  Dim iTot As Int 
_itot=0;
// [1194]  iTot = sourceMap.Size - 1 
_itot=Object.keys(_sourcemap).length-1;
// [1195]  For iCnt = 0 To iTot 
for (_icnt=0;_icnt<=_itot;_icnt++) {
// [1196]  Dim value As Object = sourceMap.GetKeyAt(iCnt) 
_value=banano_getB4JKeyAt(_sourcemap,_icnt);
// [1197]  listOfValues.Add(value) 
_listofvalues.push(_value);
// [1198]  Next 
}
// [1199]  Return listOfValues 
return _listofvalues;
// End Sub
};

// [1204] Public Sub GetNumbers(value As String) As String 
this.getnumbers=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [1205]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [1206]  Try 
try {
// [1207]  value = value.Trim 
_value=_value.trim();
// [1208]  Dim sout As String = {243} 
_sout="";
// [1209]  Dim mout As String = {244} 
_mout="";
// [1210]  Dim slen As Int = value.Length 
_slen=_value.length;
// [1211]  Dim i As Int = 0 
_i=0;
// [1212]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [1213]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [1214]  If InStr( {245} , mout) <> -1 Then 
if (_B.instr("0123456789.-",_mout,_B)!=-1) {
// [1215]  sout = sout & mout 
_sout=_sout+_mout;
// [1216]  End If 
}
// [1217]  Next 
}
// [1218]  Return sout 
return _sout;
// [1219]  Catch 
} catch(err) {
// [1220]  Return value 
return _value;
// [1221]  End Try 
}
// End Sub
};

// [1225] Sub SortMap(m As Map) As Map 
this.sortmap=function(_m) {
if (_B==null) _B=this;
var _nm,_lst,_strkey,_strvalue;
// [1226]  Try 
try {
// [1227]  Dim nm As Map 
_nm={};
// [1228]  nm.Initialize 
_nm={};
// [1229]  Dim lst As List 
_lst=[];
// [1230]  lst.Initialize 
_lst.length=0;
// [1231]  For Each strkey As String In m.Keys 
var _strkeyKeys = Object.keys(_m);
for (var _strkeyindex=0;_strkeyindex<_strkeyKeys.length;_strkeyindex++) {
_strkey=_strkeyKeys[_strkeyindex];
// [1232]  lst.Add(strkey) 
_lst.push(_strkey);
// [1233]  Next 
}
// [1235]  lst.Sort(True) 
if (!isNaN(parseFloat(_lst[0])) && isFinite(_lst[0])) {
_lst.sort(function(a, b){return a - b});
} else {
_lst.sort();
};
// [1236]  For Each strkey As String In lst 
for (var _strkeyindex=0;_strkeyindex<_lst.length;_strkeyindex++) {
_strkey=_lst[_strkeyindex];
// [1237]  Dim strvalue As Object = m.Get(strkey) 
_strvalue=_m[_strkey];
// [1238]  nm.Put(strkey,strvalue) 
_nm[_strkey]=_strvalue;
// [1239]  Next 
}
// [1240]  Return nm 
return _nm;
// [1241]  Catch 
} catch(err) {
// [1242]  Return m 
return _m;
// [1243]  End Try 
}
// End Sub
};

// [1247] Sub MergeMaps(oldm As Map, newm As Map) As Map 
this.mergemaps=function(_oldm,_newm) {
if (_B==null) _B=this;
var _om,_k,_v;
// [1248]  Dim om As Map = CreateMap() 
_om={};
// [1249]  For Each k As String In oldm.Keys 
var _kKeys = Object.keys(_oldm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1250]  Dim v As Object = oldm.Get(k) 
_v=_oldm[_k];
// [1251]  om.Put(k, v) 
_om[_k]=_v;
// [1252]  Next 
}
// [1254]  For Each k As String In newm.Keys 
var _kKeys = Object.keys(_newm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1255]  Dim v As Object = newm.Get(k) 
_v=_newm[_k];
// [1256]  om.Put(k, v) 
_om[_k]=_v;
// [1257]  Next 
}
// [1258]  Return om 
return _om;
// End Sub
};

// [1262] Sub List2MapSimple(lst As List, bSort As Boolean) As Map 
this.list2mapsimple=function(_lst,_bsort) {
if (_B==null) _B=this;
var _nm,_k;
// [1263]  If bSort Then lst.Sort(True) 
if (_bsort) {if (!isNaN(parseFloat(_lst[0])) && isFinite(_lst[0])) {
_lst.sort(function(a, b){return a - b});
} else {
_lst.sort();
}
;}
// [1264]  Dim nm As Map = CreateMap() 
_nm={};
// [1265]  For Each k As String In lst 
for (var _kindex=0;_kindex<_lst.length;_kindex++) {
_k=_lst[_kindex];
// [1266]  nm.Put(k, k) 
_nm[_k]=_k;
// [1267]  Next 
}
// [1268]  Return nm 
return _nm;
// End Sub
};

// [1273] Sub List2Options(lst As List, keyName As String, valueName As String) As Map 
this.list2options=function(_lst,_keyname,_valuename) {
if (_B==null) _B=this;
var _recs,_k,_nrec;
// [1274]  Dim recs As List 
_recs=[];
// [1275]  recs.Initialize 
_recs.length=0;
// [1276]  For Each k As String In lst 
for (var _kindex=0;_kindex<_lst.length;_kindex++) {
_k=_lst[_kindex];
// [1277]  Dim nrec As Map = CreateMap() 
_nrec={};
// [1278]  nrec.Put(keyName, k) 
_nrec[_keyname]=_k;
// [1279]  nrec.Put(valueName, k) 
_nrec[_valuename]=_k;
// [1280]  recs.Add(nrec) 
_recs.push(_nrec);
// [1281]  Next 
}
// [1282]  Return recs 
return _recs;
// End Sub
};

// [1286] Sub List2Map(lst As List, keyName As String, valueName As String) As Map 
this.list2map=function(_lst,_keyname,_valuename) {
if (_B==null) _B=this;
// [1287]  Return List2Options(lst, keyName, valueName) 
return _B.list2options(_lst,_keyname,_valuename,_B);
// End Sub
};

// [1291] Sub Map2Options(m As Map, keyName As String, valueName As String) As List 
this.map2options=function(_m,_keyname,_valuename) {
if (_B==null) _B=this;
var _recs,_k,_v,_nrec;
// [1292]  Dim recs As List 
_recs=[];
// [1293]  recs.Initialize 
_recs.length=0;
// [1294]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1295]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [1296]  Dim nrec As Map = CreateMap() 
_nrec={};
// [1297]  nrec.Put(keyName, k) 
_nrec[_keyname]=_k;
// [1298]  nrec.Put(valueName, v) 
_nrec[_valuename]=_v;
// [1299]  recs.Add(nrec) 
_recs.push(_nrec);
// [1300]  Next 
}
// [1301]  Return recs 
return _recs;
// End Sub
};

// [1305] Sub MapClone(oldMap As Map) As Map 
this.mapclone=function(_oldmap) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1306]  Dim nm As Map = CreateMap() 
_nm={};
// [1307]  For Each k As String In oldMap.keys 
var _kKeys = Object.keys(_oldmap);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1308]  Dim v As Object = oldMap.Get(k) 
_v=_oldmap[_k];
// [1309]  nm.Put(k, v) 
_nm[_k]=_v;
// [1310]  Next 
}
// [1311]  Return nm 
return _nm;
// End Sub
};

// [1315] Sub MapCloneSwap(oldMap As Map) As Map 
this.mapcloneswap=function(_oldmap) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1316]  Dim nm As Map = CreateMap() 
_nm={};
// [1317]  For Each k As String In oldMap.keys 
var _kKeys = Object.keys(_oldmap);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1318]  Dim v As Object = oldMap.Get(k) 
_v=_oldmap[_k];
// [1319]  nm.Put(v, k) 
_nm[_v]=_k;
// [1320]  Next 
}
// [1321]  Return nm 
return _nm;
// End Sub
};

// [1325] Sub SetBackgroundImage(elid As String, url As String) 
this.setbackgroundimage=function(_elid,_url) {
if (_B==null) _B=this;
// [1326]  BANano.GetElement(elid).SetStyle(BANano.ToJson(CreateMap( {246} : {11} , {247} : {248} ))) 
u(_elid).css(JSON.parse(JSON.stringify({"background-image":"url('" + _url + "')", "background-size":"100% 100%"})));
// End Sub
};

// [1330] Sub JSONSetProperty(sjson As String, updates As Map) As String 
this.jsonsetproperty=function(_sjson,_updates) {
if (_B==null) _B=this;
var _m,_k,_v,_sout;
// [1331]  Dim m As Map = BANano.FromJson(sjson) 
_m=JSON.parse(_sjson);
// [1332]  For Each k As String In updates.Keys 
var _kKeys = Object.keys(_updates);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1333]  Dim v As Object = updates.Get(k) 
_v=_updates[_k];
// [1334]  m.Put(k, v) 
_m[_k]=_v;
// [1335]  Next 
}
// [1336]  Dim sout As String = BANano.ToJson(m) 
_sout=JSON.stringify(_m);
// [1337]  Return sout 
return _sout;
// End Sub
};

// [1341] Sub EQOperators(sm As Map) As List 'ignore 
this.eqoperators=function(_sm) {
if (_B==null) _B=this;
var _nl,_k;
// [1342]  Dim nl As List 
_nl=[];
// [1343]  nl.initialize 
_nl.length=0;
// [1344]  For Each k As String In sm.Keys 
var _kKeys = Object.keys(_sm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1345]  nl.Add( {249} ) 
_nl.push("=");
// [1346]  Next 
}
// [1347]  Return nl 
return _nl;
// End Sub
};

// [1352] Sub BR As String 
this.br=function() {
if (_B==null) _B=this;
// [1353]  Return {250} 
return "<br>";
// End Sub
};

// [1357] Sub HR As String 
this.hr=function() {
if (_B==null) _B=this;
// [1358]  Return {251} 
return "<hr>";
// End Sub
};

// [1364] Sub MakePx(sValue As String) As String 
this.makepx=function(_svalue) {
if (_B==null) _B=this;
// [1365]  sValue = sValue.trim 
_svalue=_svalue.trim();
// [1366]  If sValue.EndsWith( {252} ) Then 
if (_svalue.endsWith("%")) {
// [1367]  Return sValue 
return _svalue;
// [1368]  else If sValue.EndsWith( {253} ) Then 
} else if (_svalue.endsWith("vm")) {
// [1369]  Return sValue 
return _svalue;
// [1370]  else If sValue.EndsWith( {254} ) Then 
} else if (_svalue.endsWith("px")) {
// [1371]  Return sValue 
return _svalue;
// [1372]  else If sValue.EndsWith( {255} ) Then 
} else if (_svalue.endsWith("cm")) {
// [1373]  Return sValue 
return _svalue;
// [1374]  else If sValue.EndsWith( {256} ) Then 
} else if (_svalue.endsWith("mm")) {
// [1375]  Return sValue 
return _svalue;
// [1376]  else If sValue.EndsWith( {257} ) Then 
} else if (_svalue.endsWith("in")) {
// [1377]  Return sValue 
return _svalue;
// [1378]  else If sValue.EndsWith( {258} ) Then 
} else if (_svalue.endsWith("pt")) {
// [1379]  Return sValue 
return _svalue;
// [1380]  else If sValue.EndsWith( {259} ) Then 
} else if (_svalue.endsWith("pc")) {
// [1381]  Return sValue 
return _svalue;
// [1382]  else If sValue.EndsWith( {260} ) Then 
} else if (_svalue.endsWith("em")) {
// [1383]  Return sValue 
return _svalue;
// [1384]  else If sValue.EndsWith( {261} ) Then 
} else if (_svalue.endsWith("ex")) {
// [1385]  Return sValue 
return _svalue;
// [1386]  else If sValue.EndsWith( {262} ) Then 
} else if (_svalue.endsWith("ch")) {
// [1387]  Return sValue 
return _svalue;
// [1388]  else If sValue.EndsWith( {263} ) Then 
} else if (_svalue.endsWith("rem")) {
// [1389]  Return sValue 
return _svalue;
// [1390]  else If sValue.EndsWith( {264} ) Then 
} else if (_svalue.endsWith("vw")) {
// [1391]  Return sValue 
return _svalue;
// [1392]  else If sValue.EndsWith( {265} ) Then 
} else if (_svalue.endsWith("vh")) {
// [1393]  Return sValue 
return _svalue;
// [1394]  else If sValue.EndsWith( {266} ) Then 
} else if (_svalue.endsWith("vmin")) {
// [1395]  Return sValue 
return _svalue;
// [1396]  else If sValue.EndsWith( {267} ) Then 
} else if (_svalue.endsWith("vmax")) {
// [1397]  Return sValue 
return _svalue;
// [1398]  else If sValue.EndsWith( {268} ) Then 
} else if (_svalue.endsWith(";")) {
// [1399]  Return sValue 
return _svalue;
// [1400]  Else 
} else {
// [1401]  sValue = sValue.Replace( {269} , {270} ) 
_svalue=_svalue.split("px").join("");
// [1402]  sValue = {12} 
_svalue="" + _svalue + "px";
// [1403]  If sValue = {271} Then sValue = {272} 
if (_svalue=="px") {_svalue="";}
// [1404]  Return sValue 
return _svalue;
// [1405]  End If 
}
// End Sub
};

// [1410] Sub SaveText2File(content As String, fileName As String) 
this.savetext2file=function(_content,_filename) {
if (_B==null) _B=this;
var _fc,_blob;
// [1411]  Dim fc As List 
_fc=[];
// [1412]  fc.Initialize 
_fc.length=0;
// [1413]  fc.Add(content) 
_fc.push(_content);
// [1414]  Dim blob As BANanoObject 
_blob=null;
// [1415]  blob.Initialize2( {273} ,Array(fc, CreateMap( {274} : {275} ))) 
_blob=new Blob(_fc,{"type":"text/plain;charset=utf-8"});
// [1416]  BANano.RunJavascriptMethod( {276} ,Array(blob,fileName)) 
BANanoExec("saveAs", window, _blob,_filename);
// End Sub
};

// [1419] Sub SaveBinaryArray2File(iUint8Array As Object, dbName As String) 
this.savebinaryarray2file=function(_iuint8array,_dbname) {
if (_B==null) _B=this;
var _fc,_blob;
// [1420]  Dim fc As List 
_fc=[];
// [1421]  fc.Initialize 
_fc.length=0;
// [1422]  fc.Add(iUint8Array) 
_fc.push(_iuint8array);
// [1424]  Dim blob As BANanoObject 
_blob=null;
// [1425]  blob.Initialize2( {277} ,Array(fc, CreateMap( {278} : {279} ))) 
_blob=new Blob(_fc,{"type":"application/octet-stream"});
// [1426]  BANano.RunJavascriptMethod( {280} ,Array(blob, dbName)) 
BANanoExec("saveAs", window, _blob,_dbname);
// End Sub
};

// [1430] Sub MvCount(strMV As String, Delimiter As String) As Int 
this.mvcount=function(_strmv,_delimiter) {
if (_B==null) _B=this;
var _spvalues;
// [1431]  Dim spValues() As String = BANano.Split(Delimiter,strMV) 
_spvalues=_strmv.split(_delimiter);
// [1432]  Return spValues.Length 
return _spvalues.length;
// End Sub
};

// [1436] Sub AuditTrail(oldM As Map, newM As Map) As Map 
this.audittrail=function(_oldm,_newm) {
if (_B==null) _B=this;
var _df,_k,_v,_nv,_ov;
// [1437]  Dim df As Map = CreateMap() 
_df={};
// [1438]  For Each k As String In oldM.Keys 
var _kKeys = Object.keys(_oldm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1439]  Dim v As Object = oldM.Get(k) 
_v=_oldm[_k];
// [1440]  If newM.ContainsKey(k) Then 
if ((_k in _newm)) {
// [1441]  Dim nv As Object = newM.Get(k) 
_nv=_newm[_k];
// [1442]  If v <> nv Then 
if (_v!=_nv) {
// [1443]  df.Put(k, nv) 
_df[_k]=_nv;
// [1444]  End If 
}
// [1445]  End If 
}
// [1446]  Next 
}
// [1447]  For Each k As String In newM.Keys 
var _kKeys = Object.keys(_newm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1448]  Dim v As Object = newM.Get(k) 
_v=_newm[_k];
// [1449]  If oldM.ContainsKey(k) Then 
if ((_k in _oldm)) {
// [1450]  Dim ov As Object = oldM.Get(k) 
_ov=_oldm[_k];
// [1451]  If v <> ov Then 
if (_v!=_ov) {
// [1452]  df.Put(k, v) 
_df[_k]=_v;
// [1453]  End If 
}
// [1454]  Else 
} else {
// [1455]  df.Put(k, v) 
_df[_k]=_v;
// [1456]  End If 
}
// [1457]  Next 
}
// [1458]  Return df 
return _df;
// End Sub
};

// [1461] Public Sub TimeNow() As String 
this.timenow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [1462]  Dim lNow As Long 
_lnow=0;
// [1463]  Dim dt As String 
_dt="";
// [1464]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [1465]  DateTime.DateFormat = {281} 
DateTime.SetDateFormat("HH:mm");
// [1466]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [1467]  Return dt 
return _dt;
// End Sub
};

// [1470] Public Sub DateNow() As String 
this.datenow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [1471]  Dim lNow As Long 
_lnow=0;
// [1472]  Dim dt As String 
_dt="";
// [1473]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [1474]  DateTime.DateFormat = {282} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [1475]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [1476]  Return dt 
return _dt;
// End Sub
};

// [1479] Public Sub DateTimeNow() As String 
this.datetimenow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [1480]  Dim lNow As Long 
_lnow=0;
// [1481]  Dim dt As String 
_dt="";
// [1482]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [1483]  DateTime.DateFormat = {283} 
DateTime.SetDateFormat("yyyy-MM-dd HH:mm");
// [1484]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [1485]  Return dt 
return _dt;
// End Sub
};

// [1489] Sub LongDateTimeToday() As String 
this.longdatetimetoday=function() {
if (_B==null) _B=this;
var _dt;
// [1490]  DateTime.DateFormat = {284} 
DateTime.SetDateFormat("yyyy-MM-dd HH:mm");
// [1491]  Dim dt As Long = DateTime.now 
_dt=DateTime.Now();
// [1492]  DateTime.DateFormat = {285} 
DateTime.SetDateFormat("dd/MM/yyyy, HH:mm");
// [1493]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// End Sub
};

// [1496] Sub CopyMap(source As Map, keys As List) As Map 
this.copymap=function(_source,_keys) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1497]  Dim nm As Map = CreateMap() 
_nm={};
// [1498]  If keys.Get(0) = {286} Then 
if (_keys[0]=="*") {
// [1499]  For Each k As String In source.Keys 
var _kKeys = Object.keys(_source);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1500]  Dim v As Object = source.Get(k) 
_v=_source[_k];
// [1501]  nm.Put(k, v) 
_nm[_k]=_v;
// [1502]  Next 
}
// [1503]  Else 
} else {
// [1504]  For Each k As String In keys 
for (var _kindex=0;_kindex<_keys.length;_kindex++) {
_k=_keys[_kindex];
// [1505]  Dim v As Object = source.Get(k) 
_v=_source[_k];
// [1506]  nm.Put(k, v) 
_nm[_k]=_v;
// [1507]  Next 
}
// [1508]  End If 
}
// [1509]  Return nm 
return _nm;
// End Sub
};

// [1513] Sub GetFileParentPath(Path As String) As String 
this.getfileparentpath=function(_path) {
if (_B==null) _B=this;
var _path1,_l;
// [1514]  Dim Path1 As String 
_path1="";
// [1515]  Dim L As Int 
_l=0;
// [1516]  If Path = {287} Then 
if (_path=="/") {
// [1517]  Return {288} 
return "/";
// [1518]  End If 
}
// [1519]  L = Path.LastIndexOf( {289} ) 
_l=_path.lastIndexOf("/");
// [1520]  If L = Path.Length - 1 Then 
if (_l==_path.length-1) {
// [1522]  Path1 = Path.SubString2(0,L) 
_path1=_path.substring(0,_l);
// [1523]  Else 
} else {
// [1524]  Path1 = Path 
_path1=_path;
// [1525]  End If 
}
// [1526]  L = Path.LastIndexOf( {290} ) 
_l=_path.lastIndexOf("/");
// [1527]  If L = 0 Then 
if (_l==0) {
// [1528]  L = 1 
_l=1;
// [1529]  End If 
}
// [1530]  Return Path1.SubString2(0,L) 
return _path1.substring(0,_l);
// End Sub
};

// [1533] Sub GetFileExt(FullPath As String) As String 
this.getfileext=function(_fullpath) {
if (_B==null) _B=this;
// [1534]  Return FullPath.SubString(FullPath.LastIndexOf( {291} )+1) 
return _fullpath.substring(_fullpath.lastIndexOf(".")+1);
// End Sub
};

// [1537] Sub SetPrefix(prefix As String, target As Map) As Map 
this.setprefix=function(_prefix,_target) {
if (_B==null) _B=this;
var _nm,_mk,_mv,_mk1;
// [1538]  Dim nm As Map = CreateMap() 
_nm={};
// [1539]  For Each mk As String In target.Keys 
var _mkKeys = Object.keys(_target);
for (var _mkindex=0;_mkindex<_mkKeys.length;_mkindex++) {
_mk=_mkKeys[_mkindex];
// [1540]  Dim mv As Object = target.Get(mk) 
_mv=_target[_mk];
// [1541]  Dim mk1 As String = prefix & {292} & mk 
_mk1=_prefix+"_"+_mk;
// [1542]  nm.Put(mk1,mv) 
_nm[_mk1]=_mv;
// [1543]  Next 
}
// [1544]  Return nm 
return _nm;
// End Sub
};

// [1548] Sub CStr(o As Object) As String 
this.cstr=function(_o) {
if (_B==null) _B=this;
// [1549]  If o = BANano.UNDEFINED Then o = {293} 
if (_o==undefined) {_o="";}
// [1550]  Return {294} & o 
return ""+_o;
// End Sub
};

// [1554] Sub FixRecords(recs As List, trimThese As List, numThese As List, boolThese As List, dateThese As List, dblThese As List) 
this.fixrecords=function(_recs,_trimthese,_numthese,_boolthese,_datethese,_dblthese) {
if (_B==null) _B=this;
var _rtot,_rcnt,_rec,_nrec,_k,_v;
// [1555]  Dim rTot As Int = recs.Size - 1 
_rtot=_recs.length-1;
// [1556]  Dim rCnt As Int 
_rcnt=0;
// [1557]  For rCnt = 0 To rTot 
for (_rcnt=0;_rcnt<=_rtot;_rcnt++) {
// [1558]  Dim rec As Map = recs.Get(rCnt) 
_rec=_recs[_rcnt];
// [1560]  Dim nrec As Map = CreateMap() 
_nrec={};
// [1561]  For Each k As String In rec.keys 
var _kKeys = Object.keys(_rec);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1562]  Dim v As Object = rec.Get(k) 
_v=_rec[_k];
// [1563]  k = k.ToLowerCase 
_k=_k.toLowerCase();
// [1564]  nrec.Put(k, v) 
_nrec[_k]=_v;
// [1565]  Next 
}
// [1566]  If dateThese <> Null Then MakeDate(nrec,dateThese) 
if (_datethese!=null) {_B.makedate(_nrec,_datethese,_B);}
// [1567]  If trimThese <> Null Then MakeTrim(nrec,trimThese) 
if (_trimthese!=null) {_B.maketrim(_nrec,_trimthese,_B);}
// [1568]  If numThese <> Null Then MakeInteger(nrec, numThese) 
if (_numthese!=null) {_B.makeinteger(_nrec,_numthese,_B);}
// [1569]  If dblThese <> Null Then MakeDouble(nrec, dblThese) 
if (_dblthese!=null) {_B.makedouble(_nrec,_dblthese,_B);}
// [1570]  If boolThese <> Null Then MakeBoolean(nrec, boolThese) 
if (_boolthese!=null) {_B.makeboolean(_nrec,_boolthese,_B);}
// [1571]  recs.Set(rCnt, nrec) 
_recs[_rcnt]=_nrec;
// [1572]  Next 
}
// End Sub
};

// [1575] Sub MakeInteger(m As Map, xkeys As List) 
this.makeinteger=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1576]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1577]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1578]  Dim v As String = m.GetDefault(k, {295} ) 
_v=(_m[_k] || "");
// [1579]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1580]  v = v.trim 
_v=_v.trim();
// [1581]  If v = {296} Then v = {297} 
if (_v=="") {_v="0";}
// [1582]  v = BANano.parseInt(v) 
_v=parseInt(_v);
// [1583]  m.Put(k, v) 
_m[_k]=_v;
// [1584]  End If 
}
// [1585]  Next 
}
// End Sub
};

// [1588] Sub MakeDouble(m As Map, xkeys As List) 
this.makedouble=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1589]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1590]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1591]  Dim v As String = m.GetDefault(k, {298} ) 
_v=(_m[_k] || "");
// [1592]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1593]  v = v.trim 
_v=_v.trim();
// [1594]  If v = {299} Then v = {300} 
if (_v=="") {_v="0";}
// [1595]  v = BANano.parseFloat(v) 
_v=parseFloat(_v);
// [1596]  m.Put(k, v) 
_m[_k]=_v;
// [1597]  End If 
}
// [1598]  Next 
}
// End Sub
};

// [1601] Sub MakeYesNo(m As Map, xkeys As List) 
this.makeyesno=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1602]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1603]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1604]  Dim v As String = m.GetDefault(k, {301} ) 
_v=(_m[_k] || "No");
// [1605]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1606]  v = v.trim 
_v=_v.trim();
// [1607]  Select Case v 
switch ("" + _v) {
// [1608]  Case {302} , {303} , {304} , {305} ,False,0, {306} , {307} 
case "" + "":
case "" + "0":
case "" + "false":
case "" + "False":
case "" + false:
case "" + 0:
case "" + "no":
case "" + "No":
// [1609]  m.Put(k, {308} ) 
_m[_k]="No";
// [1610]  Case {309} , {310} , {311} ,True,1, {312} , {313} 
break;
case "" + "1":
case "" + "true":
case "" + "True":
case "" + true:
case "" + 1:
case "" + "yes":
case "" + "Yes":
// [1611]  m.Put(k, {314} ) 
_m[_k]="Yes";
// [1612]  End Select 
break;
}
// [1613]  End If 
}
// [1614]  Next 
}
// End Sub
};

// [1619] Sub MakeBoolean(m As Map, xkeys As List) 
this.makeboolean=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1620]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1621]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1622]  Dim v As String = m.GetDefault(k, {315} ) 
_v=(_m[_k] || "0");
// [1623]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1624]  v = v.trim 
_v=_v.trim();
// [1625]  Select Case v 
switch ("" + _v) {
// [1626]  Case {316} , {317} , {318} , {319} ,False,0, {320} , {321} 
case "" + "":
case "" + "0":
case "" + "false":
case "" + "False":
case "" + false:
case "" + 0:
case "" + "no":
case "" + "No":
// [1627]  m.Put(k, False) 
_m[_k]=false;
// [1628]  Case {322} , {323} , {324} ,True,1, {325} , {326} 
break;
case "" + "1":
case "" + "true":
case "" + "True":
case "" + true:
case "" + 1:
case "" + "yes":
case "" + "Yes":
// [1629]  m.Put(k, True) 
_m[_k]=true;
// [1630]  End Select 
break;
}
// [1631]  End If 
}
// [1632]  Next 
}
// End Sub
};

// [1636] Sub MakeTrim(m As Map, xkeys As List) 
this.maketrim=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1637]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1638]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1639]  Dim v As String = m.GetDefault(k, {327} ) 
_v=(_m[_k] || "");
// [1640]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1641]  v = v.trim 
_v=_v.trim();
// [1642]  m.Put(k, v) 
_m[_k]=_v;
// [1643]  End If 
}
// [1644]  Next 
}
// End Sub
};

// [1647] Sub MakeLowerCase(m As Map) As Map 
this.makelowercase=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1648]  Dim nm As Map = CreateMap() 
_nm={};
// [1649]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1650]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [1651]  k = k.tolowercase 
_k=_k.toLowerCase();
// [1652]  nm.Put(k, v) 
_nm[_k]=_v;
// [1653]  Next 
}
// [1654]  Return nm 
return _nm;
// End Sub
};

// [1657] Sub MakeDate(m As Map, xkeys As List) 
this.makedate=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1658]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1659]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1660]  Dim v As String = m.GetDefault(k, {328} ) 
_v=(_m[_k] || "");
// [1661]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1662]  v = v.trim 
_v=_v.trim();
// [1663]  v = MvField(v,1, {329} ) 
_v=_B.mvfield(_v,1," ",_B);
// [1664]  m.Put(k, v) 
_m[_k]=_v;
// [1665]  End If 
}
// [1666]  Next 
}
// End Sub
};

// [1670] Sub CreateList(Delimiter As String, Values As String) As List 
this.createlist=function(_delimiter,_values) {
if (_B==null) _B=this;
var _newlst,_spv;
// [1671]  Dim newLst As List 
_newlst=[];
// [1672]  newLst.Initialize 
_newlst.length=0;
// [1673]  If Values.length > 0 Then 
if (_values.length>0) {
// [1674]  Dim spV As List = StrParse(Delimiter,Values) 
_spv=_B.strparse(_delimiter,_values,_B);
// [1675]  newLst.AddAll(spV) 
_newlst.splice(_newlst.length,0,..._spv);
// [1676]  End If 
}
// [1677]  Return newLst 
return _newlst;
// End Sub
};

// [1681] Sub MvField(sValue As String, iPosition As Int, Delimiter As String) As String 
this.mvfield=function(_svalue,_iposition,_delimiter) {
if (_B==null) _B=this;
var _xpos,_mvalues,_tvalues,_sb,_startcnt;
// [1682]  If sValue.Length = 0 Then Return {330} 
if (_svalue.length==0) { return "";}
// [1683]  Dim xPos As Int = sValue.IndexOf(Delimiter) 
_xpos=_svalue.indexOf(_delimiter);
// [1684]  If xPos = -1 Then Return sValue 
if (_xpos==-1) { return _svalue;}
// [1685]  Dim mValues As List = StrParse(Delimiter,sValue) 
_mvalues=_B.strparse(_delimiter,_svalue,_B);
// [1686]  Dim tValues As Int 
_tvalues=0;
// [1687]  tValues = mValues.size -1 
_tvalues=_mvalues.length-1;
// [1688]  Select Case iPosition 
switch ("" + _iposition) {
// [1689]  Case -1 
case "" + -1:
// [1690]  Return mValues.get(tValues) 
return _mvalues[_tvalues];
// [1691]  Case -2 
case "" + -2:
// [1692]  Return mValues.get(tValues - 1) 
return _mvalues[_tvalues-1];
// [1693]  Case -3 
case "" + -3:
// [1694]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [1695]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [1696]  Dim startcnt As Int 
_startcnt=0;
// [1697]  sb.Append(mValues.Get(1)) 
_sb.append(_mvalues[1]);
// [1698]  For startcnt = 2 To tValues 
for (_startcnt=2;_startcnt<=_tvalues;_startcnt++) {
// [1699]  sb.Append(Delimiter) 
_sb.append(_delimiter);
// [1700]  sb.Append(mValues.get(startcnt)) 
_sb.append(_mvalues[_startcnt]);
// [1701]  Next 
}
// [1702]  Return sb.tostring 
return _sb.toString();
// [1703]  Case Else 
default:
// [1704]  iPosition = iPosition - 1 
_iposition=_iposition-1;
// [1705]  If iPosition <= -1 Then 
if (_iposition<=-1) {
// [1706]  Return mValues.get(tValues) 
return _mvalues[_tvalues];
// [1707]  End If 
}
// [1708]  If iPosition > tValues Then 
if (_iposition>_tvalues) {
// [1709]  Return {331} 
return "";
// [1710]  End If 
}
// [1711]  Return mValues.get(iPosition) 
return _mvalues[_iposition];
// [1712]  End Select 
}
// End Sub
};

// [1717] Sub RandListValue(ListX As List) As Object 
this.randlistvalue=function(_listx) {
if (_B==null) _B=this;
// [1718]  ShuffleList(ListX) 
_B.shufflelist(_listx,_B);
// [1719]  Return ListX.Get(Rnd(0, ListX.Size -1)) 
return _listx[(Math.floor(Math.random() * (_listx.length-1 - 0) + 0))];
// End Sub
};

// [1723] Sub RamoveFromList(listX As List, item As String) 
this.ramovefromlist=function(_listx,_item) {
if (_B==null) _B=this;
var _li;
// [1724]  Dim li As Int = listX.IndexOf(item) 
_li=_listx.indexOf(_item);
// [1725]  If li >= 0 Then listX.RemoveAt(li) 
if (_li>=0) {_listx.splice(_li,1);}
// End Sub
};

// [1728] Sub ShuffleList(pl As List) As List 
this.shufflelist=function(_pl) {
if (_B==null) _B=this;
var _i,_j,_k;
// [1729]  For i = pl.Size - 1 To 0 Step -1 
for (_i=_pl.length-1;_i>=0;_i-=1) {
// [1730]  Dim j As Int 
_j=0;
// [1731]  Dim k As Object 
_k={};
// [1732]  j = Rnd(0, i + 1) 
_j=(Math.floor(Math.random() * (_i+1 - 0) + 0));
// [1733]  k = pl.Get(j) 
_k=_pl[_j];
// [1734]  pl.Set(j,pl.Get(i)) 
_pl[_j]=_pl[_i];
// [1735]  pl.Set(i,k) 
_pl[_i]=_k;
// [1736]  Next 
}
// [1737]  Return pl 
return _pl;
// End Sub
};

// [1773] public Sub AfterTodayRG(dVariance As Long) As String 
this.aftertodayrg=function(_dvariance) {
if (_B==null) _B=this;
// [1774]  If dVariance <= 0 Then 
if (_dvariance<=0) {
// [1775]  Return {362} 
return "./assets/green.png";
// [1776]  else if dVariance > 0 Then 
} else if (_dvariance>0) {
// [1777]  Return {363} 
return "./assets/red.png";
// [1778]  Else 
} else {
// [1779]  Return {364} 
return "./assets/gray.png";
// [1780]  End If 
}
// End Sub
};

// [1784] Public Sub ProgressRAG(dVariance As Double) As String 
this.progressrag=function(_dvariance) {
if (_B==null) _B=this;
// [1785]  If dVariance < 0 Then 
if (_dvariance<0) {
// [1786]  Return {365} 
return "./assets/red.png";
// [1787]  else if dVariance > 0 Then 
} else if (_dvariance>0) {
// [1788]  Return {366} 
return "./assets/green.png";
// [1789]  else if dVariance = 0 Then 
} else if (_dvariance==0) {
// [1790]  Return {367} 
return "./assets/orange.png";
// [1791]  Else 
} else {
// [1792]  Return {368} 
return "./assets/gray.png";
// [1793]  End If 
}
// End Sub
};

// [1797] Public Sub ExpectedRAG(dValue As Double) As String 
this.expectedrag=function(_dvalue) {
if (_B==null) _B=this;
// [1798]  If dValue = 0 Then 
if (_dvalue==0) {
// [1799]  Return {369} 
return "./assets/orange.png";
// [1800]  else if dValue > 0 Then 
} else if (_dvalue>0) {
// [1801]  Return {370} 
return "./assets/red.png";
// [1802]  else if dValue < 0 Then 
} else if (_dvalue<0) {
// [1803]  Return {371} 
return "./assets/green.png";
// [1804]  Else 
} else {
// [1805]  Return {372} 
return "./assets/red.png";
// [1806]  End If 
}
// End Sub
};

// [1809] Public Sub ExpenditureRAG(dVariance As Double) As String 
this.expenditurerag=function(_dvariance) {
if (_B==null) _B=this;
// [1810]  If dVariance > 0 Then 
if (_dvariance>0) {
// [1811]  Return {373} 
return "./assets/green.png";
// [1812]  else if dVariance < 0 Then 
} else if (_dvariance<0) {
// [1813]  Return {374} 
return "./assets/red.png";
// [1814]  else if dVariance = 0 Then 
} else if (_dvariance==0) {
// [1815]  Return {375} 
return "./assets/orange.png";
// [1816]  Else 
} else {
// [1817]  Return {376} 
return "./assets/gray.png";
// [1818]  End If 
}
// End Sub
};

// [1821] Public Sub PriorityRAG(dValue As Int) As String 
this.priorityrag=function(_dvalue) {
if (_B==null) _B=this;
// [1822]  Select Case dValue 
switch ("" + _dvalue) {
// [1823]  Case 0 
case "" + 0:
// [1824]  Return {377} 
return "./assets/green.png";
// [1825]  Case 1 
case "" + 1:
// [1826]  Return {378} 
return "./assets/orange.png";
// [1827]  Case 2 
case "" + 2:
// [1828]  Return {379} 
return "./assets/red.png";
// [1829]  Case Else 
default:
// [1830]  Return {380} 
return "./assets/gray.png";
// [1831]  End Select 
}
// End Sub
};

// [1834] Public Sub RAG(dValue As Int) As String 
this.rag=function(_dvalue) {
if (_B==null) _B=this;
// [1835]  Select Case dValue 
switch ("" + _dvalue) {
// [1836]  Case 0 
case "" + 0:
// [1837]  Return {381} 
return "./assets/red.png";
// [1838]  Case 1 
case "" + 1:
// [1839]  Return {382} 
return "./assets/orange.png";
// [1840]  Case 2 
case "" + 2:
// [1841]  Return {383} 
return "./assets/green.png";
// [1842]  Case Else 
default:
// [1843]  Return {384} 
return "./assets/gray.png";
// [1844]  End Select 
}
// End Sub
};

// [1847] Public Sub GAR(dValue As Int) As String 
this.gar=function(_dvalue) {
if (_B==null) _B=this;
// [1848]  Select Case dValue 
switch ("" + _dvalue) {
// [1849]  Case 0 
case "" + 0:
// [1850]  Return {385} 
return "./assets/green.png";
// [1851]  Case 1 
case "" + 1:
// [1852]  Return {386} 
return "./assets/orange.png";
// [1853]  Case 2 
case "" + 2:
// [1854]  Return {387} 
return "./assets/red.png";
// [1855]  Case Else 
default:
// [1856]  Return {388} 
return "./assets/gray.png";
// [1857]  End Select 
}
// End Sub
};

// [1860] Public Sub StatusRAG(dValue As Int) As String 
this.statusrag=function(_dvalue) {
if (_B==null) _B=this;
// [1861]  Select Case dValue 
switch ("" + _dvalue) {
// [1862]  Case 0 
case "" + 0:
// [1863]  Return {389} 
return "./assets/red.png";
// [1864]  Case 1 
case "" + 1:
// [1865]  Return {390} 
return "./assets/orange.png";
// [1866]  Case 2 
case "" + 2:
// [1867]  Return {391} 
return "./assets/green.png";
// [1868]  Case Else 
default:
// [1869]  Return {392} 
return "./assets/gray.png";
// [1870]  End Select 
}
// End Sub
};

// [1873] Public Sub FaceRAG(dValue As Int) As String 
this.facerag=function(_dvalue) {
if (_B==null) _B=this;
// [1874]  Select Case dValue 
switch ("" + _dvalue) {
// [1875]  Case 0 
case "" + 0:
// [1876]  Return {393} 
return "./assets/sadface.png";
// [1877]  Case 1 
case "" + 1:
// [1878]  Return {394} 
return "./assets/neutralface.png";
// [1879]  Case 2 
case "" + 2:
// [1880]  Return {395} 
return "./assets/happyface.png";
// [1881]  Case Else 
default:
// [1882]  Return {396} 
return "./assets/sadface.png";
// [1883]  End Select 
}
// End Sub
};

// [1886] Public Sub FaceRG(dValue As Int) As String 
this.facerg=function(_dvalue) {
if (_B==null) _B=this;
// [1887]  Select Case dValue 
switch ("" + _dvalue) {
// [1888]  Case 0 
case "" + 0:
// [1889]  Return {397} 
return "./assets/sadface.png";
// [1890]  Case 1 
case "" + 1:
// [1891]  Return {398} 
return "./assets/happyface.png";
// [1892]  Case Else 
default:
// [1893]  Return {399} 
return "./assets/sadface.png";
// [1894]  End Select 
}
// End Sub
};

// [1897] Public Sub FaceRG1(dValue As Int) As String 
this.facerg1=function(_dvalue) {
if (_B==null) _B=this;
// [1898]  Select Case dValue 
switch ("" + _dvalue) {
// [1899]  Case 1 
case "" + 1:
// [1900]  Return {400} 
return "./assets/sadface.png";
// [1901]  Case 0 
case "" + 0:
// [1902]  Return {401} 
return "./assets/happyface.png";
// [1903]  Case Else 
default:
// [1904]  Return {402} 
return "./assets/sadface.png";
// [1905]  End Select 
}
// End Sub
};

// [1908] Public Sub FaceDone(dValue As Int) As String 
this.facedone=function(_dvalue) {
if (_B==null) _B=this;
// [1909]  Select Case dValue 
switch ("" + _dvalue) {
// [1910]  Case 100 
case "" + 100:
// [1911]  Return {403} 
return "./assets/happyface.png";
// [1912]  Case Else 
default:
// [1913]  Return {404} 
return "./assets/sadface.png";
// [1914]  End Select 
}
// End Sub
};

// [1917] Sub ProgressStatus(dValue As Int) As Int 
this.progressstatus=function(_dvalue) {
if (_B==null) _B=this;
// [1918]  Select Case dValue 
switch ("" + _dvalue) {
// [1919]  Case 100 
case "" + 100:
// [1920]  Return 1 
return 1;
// [1921]  Case Else 
default:
// [1922]  Return 0 
return 0;
// [1923]  End Select 
}
// End Sub
};

// [1926] Sub StatusRG(dValue As Int) As String 
this.statusrg=function(_dvalue) {
if (_B==null) _B=this;
// [1927]  Select Case dValue 
switch ("" + _dvalue) {
// [1928]  Case 0 
case "" + 0:
// [1929]  Return {405} 
return "./assets/red.png";
// [1930]  Case 1 
case "" + 1:
// [1931]  Return {406} 
return "./assets/green.png";
// [1932]  Case Else 
default:
// [1933]  Return {407} 
return "./assets/red.png";
// [1934]  End Select 
}
// End Sub
};

// [1937] Sub EscapeField(f As String) As String 
this.escapefield=function(_f) {
if (_B==null) _B=this;
// [1938]  Return {15} 
return "[" + _f + "]";
// End Sub
};

// [1942] Sub JoinFields(delimiter As String, lst As List) As String 
this.joinfields=function(_delimiter,_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld;
// [1943]  If lst.Size = 0 Then Return {408} 
if (_lst.length==0) { return "";}
// [1944]  Dim i As Int 
_i=0;
// [1945]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [1946]  Dim fld As String 
_fld="";
// [1947]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [1948]  fld = lst.Get(0) 
_fld=_lst[0];
// [1949]  fld = EscapeField(fld) 
_fld=_B.escapefield(_fld,_B);
// [1950]  sb.Append(fld) 
_sb.append(_fld);
// [1951]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [1952]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [1953]  fld = EscapeField(fld) 
_fld=_B.escapefield(_fld,_B);
// [1954]  sb.Append(delimiter).Append(fld) 
_sb.append(_delimiter).append(_fld);
// [1955]  Next 
}
// [1956]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [1960] Sub JoinFields1(delimiter As String, sQuote As String, lst As List) As String 
this.joinfields1=function(_delimiter,_squote,_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld,_xfld;
// [1961]  If lst.Size = 0 Then Return {409} 
if (_lst.length==0) { return "";}
// [1962]  Dim i As Int 
_i=0;
// [1963]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [1964]  Dim fld As String 
_fld="";
// [1965]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [1966]  fld = lst.Get(0) 
_fld=_lst[0];
// [1967]  Dim xfld As String = {16} 
_xfld="" + _fld + "";
// [1968]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [1969]  sb.Append(xfld) 
_sb.append(_xfld);
// [1970]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [1971]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [1972]  Dim xfld As String = {17} 
_xfld="" + _fld + "";
// [1973]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [1974]  sb.Append(delimiter).Append(xfld) 
_sb.append(_delimiter).append(_xfld);
// [1975]  Next 
}
// [1976]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [1980] Sub GetOptionsFromKV(delim As String, k As String, v As String) As Map 
this.getoptionsfromkv=function(_delim,_k,_v) {
if (_B==null) _B=this;
var _no,_rkeys,_rvalues,_rtot,_vtot,_rcnt,_k1,_v1;
// [1981]  k = CStr(k) 
_k=_B.cstr(_k,_B);
// [1982]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1983]  Dim no As Map = CreateMap() 
_no={};
// [1984]  Dim rkeys() As String = BANano.Split(delim, k) 
_rkeys=_k.split(_delim);
// [1985]  Dim rvalues() As String = BANano.Split(delim, v) 
_rvalues=_v.split(_delim);
// [1987]  Dim rTot As Int = rkeys.Length - 1 
_rtot=_rkeys.length-1;
// [1988]  Dim vTot As Int = rvalues.Length - 1 
_vtot=_rvalues.length-1;
// [1990]  If rTot <> vTot Then Return no 
if (_rtot!=_vtot) { return _no;}
// [1992]  Dim rCnt As Int 
_rcnt=0;
// [1993]  For rCnt = 0 To rTot 
for (_rcnt=0;_rcnt<=_rtot;_rcnt++) {
// [1994]  Dim k1 As String = rkeys(rCnt) 
_k1=_rkeys[_rcnt];
// [1995]  Dim v1 As String = rvalues(rCnt) 
_v1=_rvalues[_rcnt];
// [1996]  no.put(k1, v1) 
_no[_k1]=_v1;
// [1997]  Next 
}
// [1998]  Return no 
return _no;
// End Sub
};

// [2003] Sub Unflatten(tdata As List, childname As String) As List 
this.unflatten=function(_tdata,_childname) {
if (_B==null) _B=this;
var _tree,_mappedarr,_arrelem,_did,_cdata,_mappedelem,_parentid,_parentelem,_children,_mk,_mi,_childs;
// [2005]  Dim tree As List 
_tree=[];
// [2006]  Dim mappedArr As Map 
_mappedarr={};
// [2008]  tree.Initialize 
_tree.length=0;
// [2009]  mappedArr.Initialize 
_mappedarr={};
// [2012]  For Each arrElem As Map In tdata 
for (var _arrelemindex=0;_arrelemindex<_tdata.length;_arrelemindex++) {
_arrelem=_tdata[_arrelemindex];
// [2013]  Dim dID As String = arrElem.Get( {410} ) 
_did=_arrelem["id"];
// [2015]  Dim cdata As List 
_cdata=[];
// [2016]  cdata.Initialize 
_cdata.length=0;
// [2017]  arrElem.Put(childname, cdata) 
_arrelem[_childname]=_cdata;
// [2019]  mappedArr.Put(dID, arrElem) 
_mappedarr[_did]=_arrelem;
// [2020]  Next 
}
// [2022]  For Each dID As String In mappedArr.Keys 
var _didKeys = Object.keys(_mappedarr);
for (var _didindex=0;_didindex<_didKeys.length;_didindex++) {
_did=_didKeys[_didindex];
// [2023]  Dim mappedElem As Map = mappedArr.Get(dID) 
_mappedelem=_mappedarr[_did];
// [2024]  Dim parentid As String = mappedElem.Get( {411} ) 
_parentid=_mappedelem["parentid"];
// [2026]  If parentid = {412} Or parentid = {413} Then 
if (_parentid=="" || _parentid=="0") {
// [2027]  tree.Add(mappedElem) 
_tree.push(_mappedelem);
// [2028]  Else 
} else {
// [2030]  Dim parentElem As Map = mappedArr.Get(parentid) 
_parentelem=_mappedarr[_parentid];
// [2031]  Dim children As List = parentElem.Get(childname) 
_children=_parentelem[_childname];
// [2032]  children.Add(mappedElem) 
_children.push(_mappedelem);
// [2033]  parentElem.Put(childname, children) 
_parentelem[_childname]=_children;
// [2034]  mappedArr.Put(parentid, parentElem) 
_mappedarr[_parentid]=_parentelem;
// [2035]  End If 
}
// [2036]  Next 
}
// [2038]  For Each mk As String In mappedArr.Keys 
var _mkKeys = Object.keys(_mappedarr);
for (var _mkindex=0;_mkindex<_mkKeys.length;_mkindex++) {
_mk=_mkKeys[_mkindex];
// [2039]  Dim mi As Map = mappedArr.Get(mk) 
_mi=_mappedarr[_mk];
// [2040]  Dim childs As List = mi.Get(childname) 
_childs=_mi[_childname];
// [2041]  If childs.Size = 0 Then mi.Remove(childname) 
if (_childs.length==0) {delete _mi[_childname];}
// [2042]  Next 
}
// [2043]  Return tree 
return _tree;
// End Sub
};

// [2046] public Sub readAsText(fr As Map) As BANanoPromise 
this.readastext=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2047]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2050]  promise.CallSub(Me, {414} , Array(fr, {415} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsText",_promise,_B);
// [2051]  Return promise 
return _promise;
// End Sub
};

// [2054] Sub readAsBinaryString(fr As Map) As BANanoPromise 
this.readasbinarystring=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2055]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2058]  promise.CallSub(Me, {416} , Array(fr, {417} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsBinaryString",_promise,_B);
// [2059]  Return promise 
return _promise;
// End Sub
};

// [2062] Sub readAsDataURL(fr As Map) As BANanoPromise 
this.readasdataurl=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2063]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2066]  promise.CallSub(Me, {418} , Array(fr, {419} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsDataURL",_promise,_B);
// [2067]  Return promise 
return _promise;
// End Sub
};

// [2070] Sub readAsArrayBuffer(fr As Map) As BANanoPromise 
this.readasarraybuffer=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2071]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2074]  promise.CallSub(Me, {420} , Array(fr, {421} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsArrayBuffer",_promise,_B);
// [2075]  Return promise 
return _promise;
// End Sub
};

// [2078] private Sub ReadFile(FileToRead As Object, MethodName As String) 
this.readfile=function(_filetoread,_methodname) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _filereader,_event;
// [2080]  Dim FileReader As BANanoObject 
_filereader=null;
// [2081]  FileReader.Initialize2( {422} , Null) 
_filereader=new FileReader();
// [2083]  FileReader.SetField( {423} , FileToRead) 
_filereader["file"]=_filetoread;
// [2087]  Dim event As Map 
_event={};
// [2088]  FileReader.SetField( {424} , BANano.CallBack(Me, {425} , Array(event))) 
_filereader["onload"]=function(_event) {if (typeof _B[("OnLoad").toLowerCase()]==="function") {return _B[("OnLoad").toLowerCase()](_event,_BANp,_B)};};
// [2089]  FileReader.SetField( {426} , BANano.CallBack(Me, {427} , Array(event))) 
_filereader["onerror"]=function(_event) {if (typeof _B[("OnError").toLowerCase()]==="function") {return _B[("OnError").toLowerCase()](_event,_BANp,_B)};};
// [2091]  FileReader.RunMethod(MethodName, FileToRead) 
_filereader[_methodname](_filetoread);
// End Sub
};

// [2094] private Sub OnLoad(event As Map) As String 'ignore 
this.onload=function(_event) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _filereader,_uploadedfile;
// [2096]  Dim FileReader As BANanoObject = event.Get( {428} ) 
_filereader=_event["target"];
// [2097]  Dim UploadedFile As BANanoObject = FileReader.GetField( {429} ) 
_uploadedfile=_filereader["file"];
// [2099]  BANano.ReturnThen(CreateMap( {430} : UploadedFile.GetField( {431} ), {432} : FileReader.Getfield( {433} ))) 
return _BANp.resolve({"name":_uploadedfile["name"], "result":_filereader["result"]});
// End Sub
};

// [2102] private Sub OnError(event As Map) As String 'ignore 
this.onerror=function(_event) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _filereader,_uploadedfile,_abort;
// [2103]  Dim FileReader As BANanoObject = event.Get( {434} ) 
_filereader=_event["target"];
// [2104]  Dim UploadedFile As BANanoObject = FileReader.GetField( {435} ) 
_uploadedfile=_filereader["file"];
// [2105]  Dim Abort As Boolean = False 
_abort=false;
// [2110]  BANano.ReturnElse(CreateMap( {437} : UploadedFile.GetField( {438} ), {439} : FileReader.GetField( {440} ), {441} : Abort)) 
return _BANp.reject({"name":_uploadedfile["name"], "result":_filereader["error"], "abort":_abort});
// End Sub
};

// [2115] Sub JoinItems(delimiter As String, sQuote As String, lst As List) As String 
this.joinitems=function(_delimiter,_squote,_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld,_xfld;
// [2116]  If lst.Size = 0 Then Return {442} 
if (_lst.length==0) { return "";}
// [2117]  Dim i As Int 
_i=0;
// [2118]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [2119]  Dim fld As String 
_fld="";
// [2120]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [2121]  fld = lst.Get(0) 
_fld=_lst[0];
// [2122]  Dim xfld As String = {18} 
_xfld="" + _fld + "";
// [2123]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [2124]  sb.Append(xfld) 
_sb.append(_xfld);
// [2125]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [2126]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [2127]  Dim xfld As String = {19} 
_xfld="" + _fld + "";
// [2128]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [2129]  sb.Append(delimiter).Append(xfld) 
_sb.append(_delimiter).append(_xfld);
// [2130]  Next 
}
// [2131]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [2138] Sub FormatText(sText As String) As String 
this.formattext=function(_stext) {
if (_B==null) _B=this;
var _rm,_ktot,_kcnt,_strvalue,_strrep;
// [2139]  Dim RM As Map 
_rm={};
// [2140]  RM.Initialize 
_rm={};
// [2141]  RM.clear 
_rm={};
// [2142]  RM.Put( {443} , {444} ) 
_rm["{U}"]="<ins>";
// [2143]  RM.Put( {445} , {446} ) 
_rm["{/U}"]="</ins>";
// [2144]  RM.Put( {447} , {448} ) 
_rm["¢"]="&cent;";
// [2145]  RM.put( {449} , {450} ) 
_rm["£"]="&pound;";
// [2146]  RM.Put( {451} , {452} ) 
_rm["{SUP}"]="<sup>";
// [2147]  RM.Put( {453} , {454} ) 
_rm["{/SUP}"]="</sup>";
// [2148]  RM.Put( {455} , {456} ) 
_rm["¥"]="&yen;";
// [2149]  RM.Put( {457} , {458} ) 
_rm["€"]="&euro;";
// [2150]  RM.put( {459} , {460} ) 
_rm["©"]="&copy;";
// [2151]  RM.Put( {461} , {462} ) 
_rm["®"]="&reg;";
// [2152]  RM.Put( {463} , {464} ) 
_rm["{POUND}"]="&pound;";
// [2153]  RM.Put( {465} , {466} ) 
_rm["{/B}"]="</b>";
// [2154]  RM.Put( {467} , {468} ) 
_rm["{I}"]="<i>";
// [2155]  RM.Put( {469} , {470} ) 
_rm["{YEN}"]="&yen;";
// [2156]  RM.Put( {471} , {472} ) 
_rm["{EURO}"]="&euro;";
// [2157]  RM.Put( {473} , {474} ) 
_rm["{CODE}"]="<code>";
// [2158]  RM.Put( {475} , {476} ) 
_rm["{/CODE}"]="</code>";
// [2159]  RM.put( {477} , {478} ) 
_rm["{COPYRIGHT}"]="&copy;";
// [2160]  RM.Put( {479} , {480} ) 
_rm["{REGISTERED}"]="&reg;";
// [2161]  RM.Put( {481} , {482} ) 
_rm["®"]="&reg;";
// [2162]  RM.Put( {483} , {484} ) 
_rm["{B}"]="<b>";
// [2163]  RM.Put( {485} , {486} ) 
_rm["{SMALL}"]="<small>";
// [2164]  RM.Put( {487} , {488} ) 
_rm["{/SMALL}"]="</small>";
// [2165]  RM.Put( {489} , {490} ) 
_rm["{EM}"]="<em>";
// [2166]  RM.Put( {491} , {492} ) 
_rm["{/EM}"]="</em>";
// [2167]  RM.Put( {493} , {494} ) 
_rm["{MARK}"]="<mark>";
// [2168]  RM.Put( {495} , {496} ) 
_rm["{/MARK}"]="</mark>";
// [2169]  RM.Put( {497} , {498} ) 
_rm["{/I}"]="</i>";
// [2170]  RM.Put( {499} , {500} ) 
_rm["{SUB}"]="<sub>";
// [2171]  RM.Put( {501} , {502} ) 
_rm["{/SUB}"]="</sub>";
// [2172]  RM.Put( {503} , {504} ) 
_rm["{BR}"]="<br/>";
// [2173]  RM.Put( {505} , {506} ) 
_rm["{WBR}"]="<wbr>";
// [2174]  RM.Put( {507} , {508} ) 
_rm["{STRONG}"]="<strong>";
// [2175]  RM.Put( {509} , {510} ) 
_rm["{/STRONG}"]="</strong>";
// [2176]  RM.Put( {511} , {512} ) 
_rm["{NBSP}"]="&nbsp;";
// [2177]  RM.Put( {513} , {514} ) 
_rm["“"]="";
// [2178]  RM.Put( {515} , {516} ) 
_rm["”"]="";
// [2179]  RM.Put( {517} , {518} ) 
_rm["’"]="'";
// [2180]  Dim kTot As Int = RM.Size - 1 
_ktot=Object.keys(_rm).length-1;
// [2181]  Dim kCnt As Int 
_kcnt=0;
// [2182]  For kCnt = 0 To kTot 
for (_kcnt=0;_kcnt<=_ktot;_kcnt++) {
// [2183]  Dim strValue As String = RM.GetKeyAt(kCnt) 
_strvalue=banano_getB4JKeyAt(_rm,_kcnt);
// [2184]  Dim strRep As String = RM.Get(strValue) 
_strrep=_rm[_strvalue];
// [2185]  sText = sText.Replace(strValue, strRep) 
_stext=_stext.split(_strvalue).join(_strrep);
// [2186]  Next 
}
// [2187]  sText = BANano.SF(sText) 
_stext=banano_sf(_stext,false);
// [2188]  Return sText 
return _stext;
// End Sub
};

// [2191] Sub HideElement(elID As String) 
this.hideelement=function(_elid) {
if (_B==null) _B=this;
var _stylem;
// [2192]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [2193]  Dim stylem As Map = CreateMap( {519} : {520} ) 
_stylem={"visibility":"hidden"};
// [2194]  BANano.GetElement( {20} ).SetStyle(BANano.ToJson(stylem)) 
u("#" + _elid + "").css(JSON.parse(JSON.stringify(_stylem)));
// End Sub
};

// [2197] Sub ShowElement(elID As String) 
this.showelement=function(_elid) {
if (_B==null) _B=this;
var _stylem;
// [2198]  Dim stylem As Map = CreateMap( {521} : {522} ) 
_stylem={"visibility":"visible"};
// [2199]  BANano.GetElement( {21} ).SetStyle(BANano.ToJson(stylem)) 
u("#" + _elid + "").css(JSON.parse(JSON.stringify(_stylem)));
// End Sub
};

// [2202] Sub Age(sdob As String) As Long 
this.age=function(_sdob) {
if (_B==null) _B=this;
var _ldob,_diff,_tpd,_p1,_p2;
// [2203]  DateTime.dateformat = {523} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [2204]  Dim ldob As Long = DateTime.DateParse(sdob) 
_ldob=DateTime.DateParse(_sdob);
// [2205]  Dim diff As Long = DateTime.now - ldob 
_diff=DateTime.Now()-_ldob;
// [2206]  Dim tpd As Long = DateTime.TicksPerDay 
_tpd=DateTime.TicksPerDay();
// [2207]  Dim p1 As Long = diff / tpd 
_p1=_diff/_tpd;
// [2208]  Dim p2 As Long = p1 / 365 
_p2=_p1/365;
// [2209]  p2 = NumberFormat(p2,0,0) 
_p2=BANano_nf(BANano_r(_p2, 0),0);
// [2210]  Return p2 
return _p2;
// End Sub
};

// [2214] Sub DateFormat(item As String, sFormat As String) As String 
this.dateformat=function(_item,_sformat) {
if (_B==null) _B=this;
var _dt,_rslt;
// [2215]  If BANano.IsUndefined(item) Or BANano.IsNull(item) Then Return {524} 
if (is.undefined(_item) || is.null(_item)) { return "";}
// [2216]  If item.Length = 0 Then Return {525} 
if (_item.length==0) { return "";}
// [2217]  Try 
try {
// [2218]  item = MvField(item,1, {526} ) 
_item=_B.mvfield(_item,1," ",_B);
// [2219]  item = item.trim 
_item=_item.trim();
// [2220]  DateTime.DateFormat = {527} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [2221]  Dim dt As Long = DateTime.DateParse(item) 
_dt=DateTime.DateParse(_item);
// [2222]  DateTime.DateFormat = sFormat 
DateTime.SetDateFormat(_sformat);
// [2223]  Dim rslt As String = DateTime.Date(dt) 
_rslt=DateTime.Date(_dt);
// [2224]  Return rslt 
return _rslt;
// [2225]  Catch 
} catch(err) {
// [2226]  Return item 
return _item;
// [2227]  End Try 
}
// End Sub
};

// [2230] Sub GetAlphaNumeric(value As String) As String 
this.getalphanumeric=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [2231]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [2232]  Try 
try {
// [2233]  value = value.Trim 
_value=_value.trim();
// [2234]  If value = {528} Then value = {529} 
if (_value=="") {_value="";}
// [2235]  Dim sout As String = {530} 
_sout="";
// [2236]  Dim mout As String = {531} 
_mout="";
// [2237]  Dim slen As Int = value.Length 
_slen=_value.length;
// [2238]  Dim i As Int = 0 
_i=0;
// [2239]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [2240]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [2241]  If InStr( {532} , mout) <> -1 Then 
if (_B.instr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",_mout,_B)!=-1) {
// [2242]  sout = sout & mout 
_sout=_sout+_mout;
// [2243]  End If 
}
// [2244]  Next 
}
// [2245]  Return sout 
return _sout;
// [2246]  Catch 
} catch(err) {
// [2247]  Return value 
return _value;
// [2248]  End Try 
}
// End Sub
};

// [2251] Sub ListOfMap2Strings(lst As List) As List 
this.listofmap2strings=function(_lst) {
if (_B==null) _B=this;
var _nl,_m,_nm;
// [2252]  Dim nl As List 
_nl=[];
// [2253]  nl = NewList 
_nl=_B.newlist(_B);
// [2254]  For Each m As Map In lst 
for (var _mindex=0;_mindex<_lst.length;_mindex++) {
_m=_lst[_mindex];
// [2255]  Dim nm As Map = Map2Strings(m) 
_nm=_B.map2strings(_m,_B);
// [2256]  nl.Add(nm) 
_nl.push(_nm);
// [2257]  Next 
}
// [2258]  Return nl 
return _nl;
// End Sub
};

// [2263] Sub Map2Strings(m As Map) As Map 
this.map2strings=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v,_vv;
// [2264]  Dim nm As Map = CreateMap() 
_nm={};
// [2265]  For Each k As String In m.keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [2266]  Dim v As Object = m.get(k) 
_v=_m[_k];
// [2267]  If BANano.IsNull(v) Then v = {533} 
if (is.null(_v)) {_v="";}
// [2268]  If BANano.IsUndefined(v) Then v = {534} 
if (is.undefined(_v)) {_v="";}
// [2269]  Dim vv As String = CStr(v) 
_vv=_B.cstr(_v,_B);
// [2270]  nm.put(k, vv) 
_nm[_k]=_vv;
// [2271]  Next 
}
// [2272]  Return nm 
return _nm;
// End Sub
};

// [2276] Sub DataType2FieldType(fldtype As String) As String 
this.datatype2fieldtype=function(_fldtype) {
if (_B==null) _B=this;
// [2277]  fldtype = fldtype.ToUpperCase 
_fldtype=_fldtype.toUpperCase();
// [2278]  If fldtype.EqualsIgnoreCase( {535} ) Then fldtype = {536} 
if (_fldtype.equalsIgnoreCase("double")) {_fldtype="FLOAT";}
// [2279]  If fldtype.EqualsIgnoreCase( {537} ) Then fldtype = {538} 
if (_fldtype.equalsIgnoreCase("integer")) {_fldtype="INT";}
// [2280]  If fldtype.EqualsIgnoreCase( {539} ) Then fldtype = {540} 
if (_fldtype.equalsIgnoreCase("long")) {_fldtype="INT";}
// [2281]  If fldtype.EqualsIgnoreCase( {541} ) Then fldtype = {542} 
if (_fldtype.equalsIgnoreCase("short")) {_fldtype="INT";}
// [2282]  If fldtype.endswith( {543} ) Then fldtype = {544} 
if (_fldtype.endsWith("INT")) {_fldtype="INT";}
// [2283]  If fldtype.endswith( {545} ) Then fldtype = {546} 
if (_fldtype.endsWith("CHAR")) {_fldtype="TEXT";}
// [2284]  If fldtype.endswith( {547} ) Then fldtype = {548} 
if (_fldtype.endsWith("TEXT")) {_fldtype="TEXT";}
// [2285]  If fldtype.endswith( {549} ) Then fldtype = {550} 
if (_fldtype.endsWith("REAL")) {_fldtype="FLOAT";}
// [2286]  If fldtype.endswith( {551} ) Then fldtype = {552} 
if (_fldtype.endsWith("BIT")) {_fldtype="INT";}
// [2288]  fldtype = fldtype.tolowercase 
_fldtype=_fldtype.toLowerCase();
// [2289]  fldtype = fldtype.replace( {553} , {554} ) 
_fldtype=_fldtype.split("text").join("string");
// [2290]  fldtype = fldtype.replace( {555} , {556} ) 
_fldtype=_fldtype.split("float").join("dbl");
// [2291]  fldtype = fldtype.replace( {557} , {558} ) 
_fldtype=_fldtype.split("blob").join("string");
// [2292]  fldtype = fldtype.replace( {559} , {560} ) 
_fldtype=_fldtype.split("none").join("string");
// [2293]  fldtype = fldtype.replace( {561} , {562} ) 
_fldtype=_fldtype.split("varchar").join("string");
// [2294]  Return fldtype 
return _fldtype;
// End Sub
};

// [2298] Sub MapRemovePrefix(m As Map) As Map 
this.mapremoveprefix=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [2299]  Dim nm As Map = CreateMap() 
_nm={};
// [2300]  For Each k As String In m.keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [2301]  Dim v As String = m.Get(k) 
_v=_m[_k];
// [2302]  k = MvField(k,2, {563} ) 
_k=_B.mvfield(_k,2,"_",_B);
// [2303]  nm.Put(k, v) 
_nm[_k]=_v;
// [2304]  Next 
}
// [2305]  Return nm 
return _nm;
// End Sub
};

// [2310] Sub SetCoverImage(imgURL As String) 
this.setcoverimage=function(_imgurl) {
if (_B==null) _B=this;
var _opt,_sjson;
// [2311]  Dim opt As Map = CreateMap() 
_opt={};
// [2312]  If imgURL = {564} Then 
if (_imgurl=="none") {
// [2313]  opt.Put( {565} , {566} ) 
_opt["background-image"]="none";
// [2314]  Else 
} else {
// [2321]  opt.Put( {576} , {23} ) 
_opt["background"]="url('" + _imgurl + "')";
// [2322]  opt.Put( {577} , {578} ) 
_opt["position"]="absolute";
// [2323]  opt.Put( {579} , {580} ) 
_opt["height"]="100%";
// [2324]  opt.Put( {581} , {582} ) 
_opt["width"]="100%";
// [2325]  opt.Put( {583} , {584} ) 
_opt["top"]="0";
// [2326]  opt.Put( {585} , {586} ) 
_opt["bottom"]="0";
// [2327]  opt.Put( {587} , {588} ) 
_opt["right"]="0";
// [2328]  opt.Put( {589} , {590} ) 
_opt["left"]="0";
// [2329]  opt.Put( {591} , {592} ) 
_opt["z-index"]="0";
// [2330]  End If 
}
// [2331]  Dim sjson As String = BANano.ToJson(opt) 
_sjson=JSON.stringify(_opt);
// [2332]  BANano.GetElement( {593} ).SetStyle(sjson) 
u("#body").css(JSON.parse(_sjson));
// End Sub
};

// [2337] Sub GetUploadResult(fileName As String, rslt As Object) As String 
this.getuploadresult=function(_filename,_rslt) {
if (_B==null) _B=this;
var _sfilename,_res,_sresult;
// [2339]  Dim sFileName As String 
_sfilename="";
// [2340]  Dim res As Map = BANano.fromjson(rslt) 
_res=JSON.parse(_rslt);
// [2341]  Dim sResult As String = res.get( {594} ) 
_sresult=_res["status"];
// [2342]  Select Case sResult 
switch ("" + _sresult) {
// [2343]  Case {595} 
case "" + "success":
// [2344]  sFileName = {24} 
_sfilename="./assets/" + _filename + "";
// [2345]  Case {596} 
break;
case "" + "error":
// [2346]  sFileName = {597} 
_sfilename="";
// [2347]  End Select 
break;
}
// [2348]  Return sFileName 
return _sfilename;
// End Sub
};

// [2352] Sub GetFileAsText(e As BANanoEvent) As BANanoPromise 
this.getfileastext=function(_e) {
if (_B==null) _B=this;
var _promise,_filelist,_fr;
// [2353]  Dim promise As BANanoPromise 
_promise=null;
// [2354]  Dim fileList As List = GetFileListFromTarget(e) 
_filelist=_B.getfilelistfromtarget(_e,_B);
// [2356]  If fileList.size = 0 Then Return promise 
if (_filelist.length==0) { return _promise;}
// [2358]  Dim fr As Map = fileList.get(0) 
_fr=_filelist[0];
// [2360]  promise = readAsText(fr) 
_promise=_B.readastext(_fr,_B);
// [2361]  Return promise 
return _promise;
// End Sub
};

// [2366] Sub GetUploadFileName(e As BANanoEvent) As String 
this.getuploadfilename=function(_e) {
if (_B==null) _B=this;
var _filelist,_fileo,_fo,_sfilename;
// [2368]  Dim fileList As List = GetFileListFromTarget(e) 
_filelist=_B.getfilelistfromtarget(_e,_B);
// [2369]  If fileList.size = 0 Then Return {598} 
if (_filelist.length==0) { return "";}
// [2371]  Dim fileO As Map = fileList.Get(0) 
_fileo=_filelist[0];
// [2373]  Dim fo As FileObject = GetFileDetails(fileO) 
_fo=_B.getfiledetails(_fileo,_B);
// [2374]  Dim sFileName As String = fo.FileName 
_sfilename=_fo._filename;
// [2375]  Return sFileName 
return _sfilename;
// End Sub
};

// [2379] public Sub GenerateNanoID() As String 
this.generatenanoid=function() {
if (_B==null) _B=this;
var _crypto,_nanoid,_tmpints,_randoms,_i,_n,_tmpn;
// [2381]  Dim crypto As BANanoObject 
_crypto=null;
// [2382]  If Not(BANano.Window.GetField( {599} )) Then 
if (!(window["crypto"])) {
// [2383]  crypto = BANano.Window.GetField( {600} ) 
_crypto=window["msCrypto"];
// [2384]  Else 
} else {
// [2385]  crypto = BANano.Window.GetField( {601} ) 
_crypto=window["crypto"];
// [2386]  End If 
}
// [2388]  Dim nanoID As String 
_nanoid="";
// [2389]  Dim tmpInts As BANanoObject 
_tmpints=null;
// [2390]  tmpInts.Initialize2( {602} , 21) 
_tmpints=new Uint8Array(21);
// [2391]  Dim Randoms(21) As Byte = crypto.RunMethod( {603} , tmpInts) 
_randoms=_crypto["getRandomValues"](_tmpints);
// [2392]  For i = 20 To 0 Step -1 
for (_i=20;_i>=0;_i-=1) {
// [2393]  Dim n As BANanoObject = Bit.And(63, Randoms(i)) 'ignore 
_n=(63&_randoms[_i]);
// [2394]  If n < 36 Then 
if (_n<36) {
// [2395]  nanoID = nanoID & n.RunMethod( {604} , 36).Result 
_nanoid=_nanoid+_n["toString"](36);
// [2396]  else if n < 62 Then 
} else if (_n<62) {
// [2397]  n = n - 26 'ignore 
_n=_n-26;
// [2398]  Dim tmpN As String = n.RunMethod( {605} , 36).Result 
_tmpn=_n["toString"](36);
// [2399]  nanoID = nanoID & tmpN.ToUpperCase 
_nanoid=_nanoid+_tmpn.toUpperCase();
// [2400]  Else if n < 63 Then 
} else if (_n<63) {
// [2401]  nanoID = nanoID & {606} 
_nanoid=_nanoid+"_";
// [2402]  Else 
} else {
// [2403]  nanoID = nanoID & {607} 
_nanoid=_nanoid+"-";
// [2404]  End If 
}
// [2405]  Next 
}
// [2406]  Return nanoID 
return _nanoid;
// End Sub
};

// [2409] Sub NumberToWords(N As Long) As String 
this.numbertowords=function(_n) {
if (_B==null) _B=this;
// [2410]  If N < 0 Then 
if (_n<0) {
// [2411]  Return {608} & NumberToWordsPositive(-N) 
return "Minus "+_B.numbertowordspositive(-_n,_B);
// [2412]  Else 
} else {
// [2413]  Return NumberToWordsPositive(N) 'including zero 
return _B.numbertowordspositive(_n,_B);
// [2414]  End If 
}
// End Sub
};

// [2417] private Sub NumberToWordsPositive(N As Long) As String 
this.numbertowordspositive=function(_n) {
if (_B==null) _B=this;
var _groupsofthree,_numgroupsofthree,_temp,_groupofthree,_thisgroup;
// [2418]  If N = 0 Then 
if (_n==0) {
// [2419]  Return {609} 'that gets rid of that pesky special case 
return "Zero";
// [2420]  End If 
}
// [2422]  Dim GroupsOfThree(10) As Int 
_groupsofthree=[];
// [2424]  Dim NumGroupsOfThree As Int = 0 
_numgroupsofthree=0;
// [2426]  Do While N <> 0 
while (_n!=0) {
// [2427]  GroupsOfThree(NumGroupsOfThree) = N Mod 1000 
_groupsofthree[_numgroupsofthree]=_n % 1000;
// [2428]  NumGroupsOfThree = NumGroupsOfThree + 1 
_numgroupsofthree=_numgroupsofthree+1;
// [2430]  N = N / 1000 
_n=_n/1000;
// [2431]  Loop 
}
// [2433]  Dim Temp As String = {610} 
_temp="";
// [2434]  For GroupOfThree = NumGroupsOfThree - 1 To 0 Step -1 
for (_groupofthree=_numgroupsofthree-1;_groupofthree>=0;_groupofthree-=1) {
// [2435]  Dim ThisGroup As Int = GroupsOfThree(GroupOfThree) 
_thisgroup=_groupsofthree[_groupofthree];
// [2437]  If ThisGroup <> 0 Then 
if (_thisgroup!=0) {
// [2438]  If Temp.Length <> 0 Then 
if (_temp.length!=0) {
// [2439]  If GroupOfThree = 0 And ThisGroup < 100 Then 
if (_groupofthree==0 && _thisgroup<100) {
// [2440]  Temp = Temp & {611} 
_temp=_temp+" and ";
// [2441]  Else 
} else {
// [2442]  Temp = Temp & {612} 
_temp=_temp+", ";
// [2443]  End If 
}
// [2444]  End If 
}
// [2446]  Temp = Temp & NumberToWords1000(ThisGroup) 
_temp=_temp+_B.numbertowords1000(_thisgroup,_B);
// [2448]  If GroupOfThree <> 0 Then 
if (_groupofthree!=0) {
// [2449]  Temp = Temp & {613} & ThousandWords(GroupOfThree) 
_temp=_temp+" "+_B._thousandwords[_groupofthree];
// [2450]  End If 
}
// [2451]  End If 
}
// [2452]  Next 
}
// [2454]  Return Temp 
return _temp;
// End Sub
};

// [2458] private Sub NumberToWords1000(N As Int) As String 
this.numbertowords1000=function(_n) {
if (_B==null) _B=this;
var _hundreds,_tensunits;
// [2460]  If N < 100 Then 
if (_n<100) {
// [2461]  Return NumberToWords100(N) 
return _B.numbertowords100(_n,_B);
// [2462]  End If 
}
// [2464]  Dim Hundreds As String = UnitWords(N / 100) & {614} 'Hundreds always non-blank since N < 100 already done 
_hundreds=_B._unitwords[_n/100]+" Hundred";
// [2465]  Dim TensUnits As String = NumberToWords100(N Mod 100) 'TensUnits could be blank if digits are 00 
_tensunits=_B.numbertowords100(_n % 100,_B);
// [2467]  If TensUnits.Length = 0 Then 
if (_tensunits.length==0) {
// [2468]  Return Hundreds 
return _hundreds;
// [2469]  Else 
} else {
// [2470]  Return Hundreds & {615} & TensUnits 
return _hundreds+" and "+_tensunits;
// [2471]  End If 
}
// End Sub
};

// [2475] private Sub NumberToWords100(N As Int) As String 
this.numbertowords100=function(_n) {
if (_B==null) _B=this;
var _tens,_units;
// [2476]  If N < 20 Then 
if (_n<20) {
// [2477]  Return UnitWords(N) 
return _B._unitwords[_n];
// [2478]  End If 
}
// [2480]  Dim Tens As String = TenWords(N / 10) 'Tens always non-blank since N < 20 already done 
_tens=_B._tenwords[_n/10];
// [2481]  Dim Units As String = UnitWords(N Mod 10) 'Units could be blank if digit is 0 
_units=_B._unitwords[_n % 10];
// [2483]  If Units.Length = 0 Then 
if (_units.length==0) {
// [2484]  Return Tens 
return _tens;
// [2485]  Else 
} else {
// [2486]  Return Tens & {616} & Units 
return _tens+"-"+_units;
// [2487]  End If 
}
// End Sub
};

}
 
function hexToRgb(hexCode) { 
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/; 
    var matches = patt.exec(hexCode); 
    var rgb = "rgb(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + ")"; 
    return rgb; 
} 
 
function hexToRgba(hexCode, opacity) { 
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/; 
    var matches = patt.exec(hexCode); 
    var rgb = "rgba(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + "," + opacity + ")"; 
    return rgb; 
} 

/* =========================== MJAccordion  =========================== */
function banano_bananomjml_mjaccordion() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-accordion";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stborder="";

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._sticonalign="";

_B._sticonheight="";

_B._sticonposition="";

_B._sticonunwrappedalt="";

_B._sticonunwrappedurl="";

_B._sticonwidth="";

_B._sticonwrappedalt="";

_B._sticonwrappedurl="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

// [64] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [65] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [66] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [67] mCallBack = CallBack 
_B._mcallback=_callback;
// [68] classList.Initialize 
_B._classlist={};
// [69] styleList.Initialize 
_B._stylelist={};
// [70] attributeList.Initialize 
_B._attributelist={};
// [71] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [75] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [76] mTarget = Target 
_B._mtarget=_target;
// [77] If Props <> Null Then 
if (_props!=null) {
// [78] mClasses = Props.Get( {25} ) 
_B._mclasses=_props["Classes"];
// [79] mAttributes = Props.Get( {26} ) 
_B._mattributes=_props["Attributes"];
// [80] mStyle = Props.Get( {27} ) 
_B._mstyle=_props["Style"];
// [81] mCaption = Props.Get( {28} ) 
_B._mcaption=_props["Caption"];
// [82] stBorder = Props.Get( {29} ) 
_B._stborder=_props["Border"];
// [83] stContainerBackgroundColor = Props.Get( {30} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [84] stCssClass = Props.Get( {31} ) 
_B._stcssclass=_props["CssClass"];
// [85] stFontFamily = Props.Get( {32} ) 
_B._stfontfamily=_props["FontFamily"];
// [86] stIconAlign = Props.Get( {33} ) 
_B._sticonalign=_props["IconAlign"];
// [87] stIconHeight = Props.Get( {34} ) 
_B._sticonheight=_props["IconHeight"];
// [88] stIconPosition = Props.Get( {35} ) 
_B._sticonposition=_props["IconPosition"];
// [89] stIconUnwrappedAlt = Props.Get( {36} ) 
_B._sticonunwrappedalt=_props["IconUnwrappedAlt"];
// [90] stIconUnwrappedUrl = Props.Get( {37} ) 
_B._sticonunwrappedurl=_props["IconUnwrappedUrl"];
// [91] stIconWidth = Props.Get( {38} ) 
_B._sticonwidth=_props["IconWidth"];
// [92] stIconWrappedAlt = Props.Get( {39} ) 
_B._sticonwrappedalt=_props["IconWrappedAlt"];
// [93] stIconWrappedUrl = Props.Get( {40} ) 
_B._sticonwrappedurl=_props["IconWrappedUrl"];
// [94] stPadding = Props.Get( {41} ) 
_B._stpadding=_props["Padding"];
// [95] stPaddingBottom = Props.Get( {42} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [96] stPaddingLeft = Props.Get( {43} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [97] stPaddingRight = Props.Get( {44} ) 
_B._stpaddingright=_props["PaddingRight"];
// [98] stPaddingTop = Props.Get( {45} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [99] End If 
}
// [101] AddAttr( {46} , stBorder) 
_B.addattr("border",_B._stborder,_B);
// [102] AddAttr( {47} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [103] AddAttr( {48} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [104] AddAttr( {49} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [105] AddAttr( {50} , stIconAlign) 
_B.addattr("icon-align",_B._sticonalign,_B);
// [106] AddAttr( {51} , stIconHeight) 
_B.addattr("icon-height",_B._sticonheight,_B);
// [107] AddAttr( {52} , stIconPosition) 
_B.addattr("icon-position",_B._sticonposition,_B);
// [108] AddAttr( {53} , stIconUnwrappedAlt) 
_B.addattr("icon-unwrapped-alt",_B._sticonunwrappedalt,_B);
// [109] AddAttr( {54} , stIconUnwrappedUrl) 
_B.addattr("icon-unwrapped-url",_B._sticonunwrappedurl,_B);
// [110] AddAttr( {55} , stIconWidth) 
_B.addattr("icon-width",_B._sticonwidth,_B);
// [111] AddAttr( {56} , stIconWrappedAlt) 
_B.addattr("icon-wrapped-alt",_B._sticonwrappedalt,_B);
// [112] AddAttr( {57} , stIconWrappedUrl) 
_B.addattr("icon-wrapped-url",_B._sticonwrappedurl,_B);
// [113] AddAttr( {58} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [114] AddAttr( {59} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [115] AddAttr( {60} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [116] AddAttr( {61} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [117] AddAttr( {62} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [118] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [119] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [120] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [123] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [124] mElement = mTarget.Append(strHTML).Get( {63} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [130] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [132] Dim className As String = BANanoShared.JoinMapKeys(classList, {64} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [133] AddAttr( {65} , className) 
_B.addattr("class",_classname,_B);
// [135] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [136] AddAttr( {66} , styleName) 
_B.addattr("style",_stylename,_B);
// [138] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [139] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [140] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [141] Return rslt 
return _rslt;
// End Sub
};

// [145] Sub AddBR 
_B.addbr=function() {
// [146] sbText.Append( {67} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [150] Sub AddHR 
_B.addhr=function() {
// [151] sbText.Append( {68} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [155] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [156] Return mElement 
return _B._melement;
// End Sub
};

// [160] public Sub getID() As String 
_B.getid=function() {
// [161] Return mName 
return _B._mname;
// End Sub
};

// [165] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [166] mTarget = BANano.GetElement( {69} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [167] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [171] public Sub Remove() 
_B.remove=function() {
// [172] mElement.Remove 
_B._melement.remove();
// [173] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [177] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [178] If mElement <> Null Then 
if (_B._melement!=null) {
// [179] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [180] End If 
}
// End Sub
};

// [184] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [185] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [186] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [187] varClass = varClass.trim 
_varclass=_varclass.trim();
// [188] if varClass = {70} Then Return 
if (_varclass=="") { return ;}
// [189] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [190] Dim mxItems As List = BANanoShared.StrParse( {71} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [191] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [192] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [193] Next 
}
// End Sub
};

// [197] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [198] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [199] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [200] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [201] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [202] varClass = varClass.trim 
_varclass=_varclass.trim();
// [203] if varClass = {72} Then Return 
if (_varclass=="") { return ;}
// [204] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [205] Dim mxItems As List = BANanoShared.StrParse( {73} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [206] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [207] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [208] Next 
}
// End Sub
};

// [212] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [213] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [214] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [215] If mElement <> Null Then 
if (_B._melement!=null) {
// [216] Dim aStyle As Map = CreateMap() 
_astyle={};
// [217] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [218] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [219] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [220] End If 
}
// [221] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [225] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [226] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [227] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [229] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [230] If varValue = True Then 
if (_varvalue==true) {
// [231] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [232] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [233] End If 
}
// [234] Else 
} else {
// [236] If varValue.StartsWith( {74} ) Then 
if (_varvalue.startsWith(":")) {
// [237] If varValue.StartsWith( {75} ) Then 
if (_varvalue.startsWith("$")) {
// [238] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [239] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [240] Else 
} else {
// [241] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [242] If rname.Contains( {76} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [243] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [244] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [245] End If 
}
// [246] Else 
} else {
// [248] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [249] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [250] Select Case varProp 
switch ("" + _varprop) {
// [251] Case {77} , {78} , {79} , {80} , {81} , {82} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [252] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [253] End Select 
break;
}
// [254] End If 
}
// [255] End If 
}
// [256] Return 
return;
// End Sub
};

// [260] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [261] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [262] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [263] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [264] sbClass.Append(k).Append( {83} ) 
_sbclass.append(_k).append(" ");
// [265] Next 
}
// [266] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [267] Return mClasses 
return _B._mclasses;
// End Sub
};

// [271] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [272] If mElement <> Null Then 
if (_B._melement!=null) {
// [273] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [274] End If 
}
// [275] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [276] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [277] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [278] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [279] Next 
}
// End Sub
};

// [283] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [284] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [285] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [286] sbStyle.Append( {84} ) 
_sbstyle.append("{");
// [287] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [288] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [289] sbStyle.Append(k).Append( {85} ).Append(v).Append( {86} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [290] Next 
}
// [291] sbStyle.Append( {87} ) 
_sbstyle.append("}");
// [292] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [293] Return mStyle 
return _B._mstyle;
// End Sub
};

// [297] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [298] Dim mxItems As List = BANanoShared.StrParse( {88} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [299] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [300] Dim k As String = BANanoShared.MvField(mt,1, {89} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [301] Dim v As String = BANanoShared.MvField(mt,2, {90} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [302] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [303] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [304] Next 
}
// End Sub
};

// [308] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [309] Dim mxItems As List = BANanoShared.StrParse( {91} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [310] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [311] Dim k As String = BANanoShared.MvField(mt,1, {92} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [312] Dim v As String = BANanoShared.MvField(mt,2, {93} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [313] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [314] Next 
}
// End Sub
};

// [318] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [319] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [320] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [321] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [322] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [323] sbAttr.Append(k).Append( {94} ).Append(v).Append( {95} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [324] Next 
}
// [325] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [326] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [330] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [331] If mElement <> Null Then 
if (_B._melement!=null) {
// [332] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [333] End If 
}
// [334] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [338] public Sub getCaption() As String 
_B.getcaption=function() {
// [339] Return mCaption 
return _B._mcaption;
// End Sub
};

// [342] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [343] AddAttr( {96} , varBorder) 
_B.addattr("border",_varborder,_B);
// [344] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [347] public Sub getBorder() As String 
_B.getborder=function() {
// [348] Return stBorder 
return _B._stborder;
// End Sub
};

// [351] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [352] AddAttr( {97} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [353] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [356] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [357] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [360] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [361] AddAttr( {98} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [362] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [365] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [366] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [369] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [370] AddAttr( {99} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [371] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [374] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [375] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [378] public Sub setIconAlign(varIconAlign As String) 
_B.seticonalign=function(_variconalign) {
// [379] AddAttr( {100} , varIconAlign) 
_B.addattr("icon-align",_variconalign,_B);
// [380] stIconAlign = varIconAlign 
_B._sticonalign=_variconalign;
// End Sub
};

// [383] public Sub getIconAlign() As String 
_B.geticonalign=function() {
// [384] Return stIconAlign 
return _B._sticonalign;
// End Sub
};

// [387] public Sub setIconHeight(varIconHeight As String) 
_B.seticonheight=function(_variconheight) {
// [388] AddAttr( {101} , varIconHeight) 
_B.addattr("icon-height",_variconheight,_B);
// [389] stIconHeight = varIconHeight 
_B._sticonheight=_variconheight;
// End Sub
};

// [392] public Sub getIconHeight() As String 
_B.geticonheight=function() {
// [393] Return stIconHeight 
return _B._sticonheight;
// End Sub
};

// [396] public Sub setIconPosition(varIconPosition As String) 
_B.seticonposition=function(_variconposition) {
// [397] AddAttr( {102} , varIconPosition) 
_B.addattr("icon-position",_variconposition,_B);
// [398] stIconPosition = varIconPosition 
_B._sticonposition=_variconposition;
// End Sub
};

// [401] public Sub getIconPosition() As String 
_B.geticonposition=function() {
// [402] Return stIconPosition 
return _B._sticonposition;
// End Sub
};

// [405] public Sub setIconUnwrappedAlt(varIconUnwrappedAlt As String) 
_B.seticonunwrappedalt=function(_variconunwrappedalt) {
// [406] AddAttr( {103} , varIconUnwrappedAlt) 
_B.addattr("icon-unwrapped-alt",_variconunwrappedalt,_B);
// [407] stIconUnwrappedAlt = varIconUnwrappedAlt 
_B._sticonunwrappedalt=_variconunwrappedalt;
// End Sub
};

// [410] public Sub getIconUnwrappedAlt() As String 
_B.geticonunwrappedalt=function() {
// [411] Return stIconUnwrappedAlt 
return _B._sticonunwrappedalt;
// End Sub
};

// [414] public Sub setIconUnwrappedUrl(varIconUnwrappedUrl As String) 
_B.seticonunwrappedurl=function(_variconunwrappedurl) {
// [415] AddAttr( {104} , varIconUnwrappedUrl) 
_B.addattr("icon-unwrapped-url",_variconunwrappedurl,_B);
// [416] stIconUnwrappedUrl = varIconUnwrappedUrl 
_B._sticonunwrappedurl=_variconunwrappedurl;
// End Sub
};

// [419] public Sub getIconUnwrappedUrl() As String 
_B.geticonunwrappedurl=function() {
// [420] Return stIconUnwrappedUrl 
return _B._sticonunwrappedurl;
// End Sub
};

// [423] public Sub setIconWidth(varIconWidth As String) 
_B.seticonwidth=function(_variconwidth) {
// [424] AddAttr( {105} , varIconWidth) 
_B.addattr("icon-width",_variconwidth,_B);
// [425] stIconWidth = varIconWidth 
_B._sticonwidth=_variconwidth;
// End Sub
};

// [428] public Sub getIconWidth() As String 
_B.geticonwidth=function() {
// [429] Return stIconWidth 
return _B._sticonwidth;
// End Sub
};

// [432] public Sub setIconWrappedAlt(varIconWrappedAlt As String) 
_B.seticonwrappedalt=function(_variconwrappedalt) {
// [433] AddAttr( {106} , varIconWrappedAlt) 
_B.addattr("icon-wrapped-alt",_variconwrappedalt,_B);
// [434] stIconWrappedAlt = varIconWrappedAlt 
_B._sticonwrappedalt=_variconwrappedalt;
// End Sub
};

// [437] public Sub getIconWrappedAlt() As String 
_B.geticonwrappedalt=function() {
// [438] Return stIconWrappedAlt 
return _B._sticonwrappedalt;
// End Sub
};

// [441] public Sub setIconWrappedUrl(varIconWrappedUrl As String) 
_B.seticonwrappedurl=function(_variconwrappedurl) {
// [442] AddAttr( {107} , varIconWrappedUrl) 
_B.addattr("icon-wrapped-url",_variconwrappedurl,_B);
// [443] stIconWrappedUrl = varIconWrappedUrl 
_B._sticonwrappedurl=_variconwrappedurl;
// End Sub
};

// [446] public Sub getIconWrappedUrl() As String 
_B.geticonwrappedurl=function() {
// [447] Return stIconWrappedUrl 
return _B._sticonwrappedurl;
// End Sub
};

// [450] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [451] AddAttr( {108} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [452] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [455] public Sub getPadding() As String 
_B.getpadding=function() {
// [456] Return stPadding 
return _B._stpadding;
// End Sub
};

// [459] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [460] AddAttr( {109} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [461] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [464] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [465] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [468] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [469] AddAttr( {110} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [470] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [473] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [474] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [477] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [478] AddAttr( {111} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [479] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [482] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [483] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [486] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [487] AddAttr( {112} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [488] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [491] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [492] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [497] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [498] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJAccordionElement  =========================== */
function banano_bananomjml_mjaccordionelement() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-accordion-element";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._sticonalign="";

_B._sticonheight="";

_B._sticonposition="";

_B._sticonunwrappedalt="";

_B._sticonunwrappedurl="";

_B._sticonwidth="";

_B._sticonwrappedalt="";

_B._sticonwrappedurl="";

// [52] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [53] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [54] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [55] mCallBack = CallBack 
_B._mcallback=_callback;
// [56] classList.Initialize 
_B._classlist={};
// [57] styleList.Initialize 
_B._stylelist={};
// [58] attributeList.Initialize 
_B._attributelist={};
// [59] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [63] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [64] mTarget = Target 
_B._mtarget=_target;
// [65] If Props <> Null Then 
if (_props!=null) {
// [66] mClasses = Props.Get( {19} ) 
_B._mclasses=_props["Classes"];
// [67] mAttributes = Props.Get( {20} ) 
_B._mattributes=_props["Attributes"];
// [68] mStyle = Props.Get( {21} ) 
_B._mstyle=_props["Style"];
// [69] mCaption = Props.Get( {22} ) 
_B._mcaption=_props["Caption"];
// [70] stBackgroundColor = Props.Get( {23} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [71] stCssClass = Props.Get( {24} ) 
_B._stcssclass=_props["CssClass"];
// [72] stFontFamily = Props.Get( {25} ) 
_B._stfontfamily=_props["FontFamily"];
// [73] stIconAlign = Props.Get( {26} ) 
_B._sticonalign=_props["IconAlign"];
// [74] stIconHeight = Props.Get( {27} ) 
_B._sticonheight=_props["IconHeight"];
// [75] stIconPosition = Props.Get( {28} ) 
_B._sticonposition=_props["IconPosition"];
// [76] stIconUnwrappedAlt = Props.Get( {29} ) 
_B._sticonunwrappedalt=_props["IconUnwrappedAlt"];
// [77] stIconUnwrappedUrl = Props.Get( {30} ) 
_B._sticonunwrappedurl=_props["IconUnwrappedUrl"];
// [78] stIconWidth = Props.Get( {31} ) 
_B._sticonwidth=_props["IconWidth"];
// [79] stIconWrappedAlt = Props.Get( {32} ) 
_B._sticonwrappedalt=_props["IconWrappedAlt"];
// [80] stIconWrappedUrl = Props.Get( {33} ) 
_B._sticonwrappedurl=_props["IconWrappedUrl"];
// [81] End If 
}
// [83] AddAttr( {34} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [84] AddAttr( {35} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [85] AddAttr( {36} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [86] AddAttr( {37} , stIconAlign) 
_B.addattr("icon-align",_B._sticonalign,_B);
// [87] AddAttr( {38} , stIconHeight) 
_B.addattr("icon-height",_B._sticonheight,_B);
// [88] AddAttr( {39} , stIconPosition) 
_B.addattr("icon-position",_B._sticonposition,_B);
// [89] AddAttr( {40} , stIconUnwrappedAlt) 
_B.addattr("icon-unwrapped-alt",_B._sticonunwrappedalt,_B);
// [90] AddAttr( {41} , stIconUnwrappedUrl) 
_B.addattr("icon-unwrapped-url",_B._sticonunwrappedurl,_B);
// [91] AddAttr( {42} , stIconWidth) 
_B.addattr("icon-width",_B._sticonwidth,_B);
// [92] AddAttr( {43} , stIconWrappedAlt) 
_B.addattr("icon-wrapped-alt",_B._sticonwrappedalt,_B);
// [93] AddAttr( {44} , stIconWrappedUrl) 
_B.addattr("icon-wrapped-url",_B._sticonwrappedurl,_B);
// [94] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [95] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [96] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [99] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [100] mElement = mTarget.Append(strHTML).Get( {45} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [106] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [108] Dim className As String = BANanoShared.JoinMapKeys(classList, {46} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [109] AddAttr( {47} , className) 
_B.addattr("class",_classname,_B);
// [111] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [112] AddAttr( {48} , styleName) 
_B.addattr("style",_stylename,_B);
// [114] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [115] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [116] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [117] Return rslt 
return _rslt;
// End Sub
};

// [121] Sub AddBR 
_B.addbr=function() {
// [122] sbText.Append( {49} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [126] Sub AddHR 
_B.addhr=function() {
// [127] sbText.Append( {50} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [131] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [132] Return mElement 
return _B._melement;
// End Sub
};

// [136] public Sub getID() As String 
_B.getid=function() {
// [137] Return mName 
return _B._mname;
// End Sub
};

// [141] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [142] mTarget = BANano.GetElement( {51} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [143] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [147] public Sub Remove() 
_B.remove=function() {
// [148] mElement.Remove 
_B._melement.remove();
// [149] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [153] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [154] If mElement <> Null Then 
if (_B._melement!=null) {
// [155] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [156] End If 
}
// End Sub
};

// [160] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [161] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [162] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [163] varClass = varClass.trim 
_varclass=_varclass.trim();
// [164] if varClass = {52} Then Return 
if (_varclass=="") { return ;}
// [165] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [166] Dim mxItems As List = BANanoShared.StrParse( {53} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [167] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [168] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [169] Next 
}
// End Sub
};

// [173] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [174] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [175] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [176] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [177] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [178] varClass = varClass.trim 
_varclass=_varclass.trim();
// [179] if varClass = {54} Then Return 
if (_varclass=="") { return ;}
// [180] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [181] Dim mxItems As List = BANanoShared.StrParse( {55} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [182] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [183] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [184] Next 
}
// End Sub
};

// [188] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [189] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [190] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [191] If mElement <> Null Then 
if (_B._melement!=null) {
// [192] Dim aStyle As Map = CreateMap() 
_astyle={};
// [193] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [194] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [195] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [196] End If 
}
// [197] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [201] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [202] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [203] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [205] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [206] If varValue = True Then 
if (_varvalue==true) {
// [207] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [208] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [209] End If 
}
// [210] Else 
} else {
// [212] If varValue.StartsWith( {56} ) Then 
if (_varvalue.startsWith(":")) {
// [213] If varValue.StartsWith( {57} ) Then 
if (_varvalue.startsWith("$")) {
// [214] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [215] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [216] Else 
} else {
// [217] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [218] If rname.Contains( {58} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [219] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [220] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [221] End If 
}
// [222] Else 
} else {
// [224] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [225] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [226] Select Case varProp 
switch ("" + _varprop) {
// [227] Case {59} , {60} , {61} , {62} , {63} , {64} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [228] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [229] End Select 
break;
}
// [230] End If 
}
// [231] End If 
}
// [232] Return 
return;
// End Sub
};

// [236] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [237] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [238] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [239] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [240] sbClass.Append(k).Append( {65} ) 
_sbclass.append(_k).append(" ");
// [241] Next 
}
// [242] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [243] Return mClasses 
return _B._mclasses;
// End Sub
};

// [247] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [248] If mElement <> Null Then 
if (_B._melement!=null) {
// [249] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [250] End If 
}
// [251] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [252] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [253] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [254] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [255] Next 
}
// End Sub
};

// [259] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [260] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [261] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [262] sbStyle.Append( {66} ) 
_sbstyle.append("{");
// [263] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [264] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [265] sbStyle.Append(k).Append( {67} ).Append(v).Append( {68} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [266] Next 
}
// [267] sbStyle.Append( {69} ) 
_sbstyle.append("}");
// [268] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [269] Return mStyle 
return _B._mstyle;
// End Sub
};

// [273] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [274] Dim mxItems As List = BANanoShared.StrParse( {70} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [275] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [276] Dim k As String = BANanoShared.MvField(mt,1, {71} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [277] Dim v As String = BANanoShared.MvField(mt,2, {72} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [278] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [279] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [280] Next 
}
// End Sub
};

// [284] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [285] Dim mxItems As List = BANanoShared.StrParse( {73} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [286] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [287] Dim k As String = BANanoShared.MvField(mt,1, {74} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [288] Dim v As String = BANanoShared.MvField(mt,2, {75} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [289] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [290] Next 
}
// End Sub
};

// [294] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [295] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [296] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [297] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [298] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [299] sbAttr.Append(k).Append( {76} ).Append(v).Append( {77} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [300] Next 
}
// [301] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [302] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [306] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [307] If mElement <> Null Then 
if (_B._melement!=null) {
// [308] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [309] End If 
}
// [310] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [314] public Sub getCaption() As String 
_B.getcaption=function() {
// [315] Return mCaption 
return _B._mcaption;
// End Sub
};

// [318] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [319] AddAttr( {78} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [320] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [323] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [324] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [327] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [328] AddAttr( {79} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [329] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [332] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [333] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [336] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [337] AddAttr( {80} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [338] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [341] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [342] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [345] public Sub setIconAlign(varIconAlign As String) 
_B.seticonalign=function(_variconalign) {
// [346] AddAttr( {81} , varIconAlign) 
_B.addattr("icon-align",_variconalign,_B);
// [347] stIconAlign = varIconAlign 
_B._sticonalign=_variconalign;
// End Sub
};

// [350] public Sub getIconAlign() As String 
_B.geticonalign=function() {
// [351] Return stIconAlign 
return _B._sticonalign;
// End Sub
};

// [354] public Sub setIconHeight(varIconHeight As String) 
_B.seticonheight=function(_variconheight) {
// [355] AddAttr( {82} , varIconHeight) 
_B.addattr("icon-height",_variconheight,_B);
// [356] stIconHeight = varIconHeight 
_B._sticonheight=_variconheight;
// End Sub
};

// [359] public Sub getIconHeight() As String 
_B.geticonheight=function() {
// [360] Return stIconHeight 
return _B._sticonheight;
// End Sub
};

// [363] public Sub setIconPosition(varIconPosition As String) 
_B.seticonposition=function(_variconposition) {
// [364] AddAttr( {83} , varIconPosition) 
_B.addattr("icon-position",_variconposition,_B);
// [365] stIconPosition = varIconPosition 
_B._sticonposition=_variconposition;
// End Sub
};

// [368] public Sub getIconPosition() As String 
_B.geticonposition=function() {
// [369] Return stIconPosition 
return _B._sticonposition;
// End Sub
};

// [372] public Sub setIconUnwrappedAlt(varIconUnwrappedAlt As String) 
_B.seticonunwrappedalt=function(_variconunwrappedalt) {
// [373] AddAttr( {84} , varIconUnwrappedAlt) 
_B.addattr("icon-unwrapped-alt",_variconunwrappedalt,_B);
// [374] stIconUnwrappedAlt = varIconUnwrappedAlt 
_B._sticonunwrappedalt=_variconunwrappedalt;
// End Sub
};

// [377] public Sub getIconUnwrappedAlt() As String 
_B.geticonunwrappedalt=function() {
// [378] Return stIconUnwrappedAlt 
return _B._sticonunwrappedalt;
// End Sub
};

// [381] public Sub setIconUnwrappedUrl(varIconUnwrappedUrl As String) 
_B.seticonunwrappedurl=function(_variconunwrappedurl) {
// [382] AddAttr( {85} , varIconUnwrappedUrl) 
_B.addattr("icon-unwrapped-url",_variconunwrappedurl,_B);
// [383] stIconUnwrappedUrl = varIconUnwrappedUrl 
_B._sticonunwrappedurl=_variconunwrappedurl;
// End Sub
};

// [386] public Sub getIconUnwrappedUrl() As String 
_B.geticonunwrappedurl=function() {
// [387] Return stIconUnwrappedUrl 
return _B._sticonunwrappedurl;
// End Sub
};

// [390] public Sub setIconWidth(varIconWidth As String) 
_B.seticonwidth=function(_variconwidth) {
// [391] AddAttr( {86} , varIconWidth) 
_B.addattr("icon-width",_variconwidth,_B);
// [392] stIconWidth = varIconWidth 
_B._sticonwidth=_variconwidth;
// End Sub
};

// [395] public Sub getIconWidth() As String 
_B.geticonwidth=function() {
// [396] Return stIconWidth 
return _B._sticonwidth;
// End Sub
};

// [399] public Sub setIconWrappedAlt(varIconWrappedAlt As String) 
_B.seticonwrappedalt=function(_variconwrappedalt) {
// [400] AddAttr( {87} , varIconWrappedAlt) 
_B.addattr("icon-wrapped-alt",_variconwrappedalt,_B);
// [401] stIconWrappedAlt = varIconWrappedAlt 
_B._sticonwrappedalt=_variconwrappedalt;
// End Sub
};

// [404] public Sub getIconWrappedAlt() As String 
_B.geticonwrappedalt=function() {
// [405] Return stIconWrappedAlt 
return _B._sticonwrappedalt;
// End Sub
};

// [408] public Sub setIconWrappedUrl(varIconWrappedUrl As String) 
_B.seticonwrappedurl=function(_variconwrappedurl) {
// [409] AddAttr( {88} , varIconWrappedUrl) 
_B.addattr("icon-wrapped-url",_variconwrappedurl,_B);
// [410] stIconWrappedUrl = varIconWrappedUrl 
_B._sticonwrappedurl=_variconwrappedurl;
// End Sub
};

// [413] public Sub getIconWrappedUrl() As String 
_B.geticonwrappedurl=function() {
// [414] Return stIconWrappedUrl 
return _B._sticonwrappedurl;
// End Sub
};

// [419] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [420] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJAccordionText  =========================== */
function banano_bananomjml_mjaccordiontext() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-accordion-text";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

// [50] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [51] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [52] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [53] mCallBack = CallBack 
_B._mcallback=_callback;
// [54] classList.Initialize 
_B._classlist={};
// [55] styleList.Initialize 
_B._stylelist={};
// [56] attributeList.Initialize 
_B._attributelist={};
// [57] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [61] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [62] mTarget = Target 
_B._mtarget=_target;
// [63] If Props <> Null Then 
if (_props!=null) {
// [64] mClasses = Props.Get( {18} ) 
_B._mclasses=_props["Classes"];
// [65] mAttributes = Props.Get( {19} ) 
_B._mattributes=_props["Attributes"];
// [66] mStyle = Props.Get( {20} ) 
_B._mstyle=_props["Style"];
// [67] mCaption = Props.Get( {21} ) 
_B._mcaption=_props["Caption"];
// [68] stBackgroundColor = Props.Get( {22} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [69] stColor = Props.Get( {23} ) 
_B._stcolor=_props["Color"];
// [70] stCssClass = Props.Get( {24} ) 
_B._stcssclass=_props["CssClass"];
// [71] stFontFamily = Props.Get( {25} ) 
_B._stfontfamily=_props["FontFamily"];
// [72] stFontSize = Props.Get( {26} ) 
_B._stfontsize=_props["FontSize"];
// [73] stPadding = Props.Get( {27} ) 
_B._stpadding=_props["Padding"];
// [74] stPaddingBottom = Props.Get( {28} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [75] stPaddingLeft = Props.Get( {29} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [76] stPaddingRight = Props.Get( {30} ) 
_B._stpaddingright=_props["PaddingRight"];
// [77] stPaddingTop = Props.Get( {31} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [78] End If 
}
// [80] AddAttr( {32} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [81] AddAttr( {33} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [82] AddAttr( {34} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [83] AddAttr( {35} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [84] AddAttr( {36} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [85] AddAttr( {37} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [86] AddAttr( {38} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [87] AddAttr( {39} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [88] AddAttr( {40} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [89] AddAttr( {41} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [90] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [91] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [92] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [95] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [96] mElement = mTarget.Append(strHTML).Get( {42} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [102] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [104] Dim className As String = BANanoShared.JoinMapKeys(classList, {43} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [105] AddAttr( {44} , className) 
_B.addattr("class",_classname,_B);
// [107] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [108] AddAttr( {45} , styleName) 
_B.addattr("style",_stylename,_B);
// [110] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [111] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [112] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [113] Return rslt 
return _rslt;
// End Sub
};

// [117] Sub AddBR 
_B.addbr=function() {
// [118] sbText.Append( {46} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [122] Sub AddHR 
_B.addhr=function() {
// [123] sbText.Append( {47} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [127] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [128] Return mElement 
return _B._melement;
// End Sub
};

// [132] public Sub getID() As String 
_B.getid=function() {
// [133] Return mName 
return _B._mname;
// End Sub
};

// [137] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [138] mTarget = BANano.GetElement( {48} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [139] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [143] public Sub Remove() 
_B.remove=function() {
// [144] mElement.Remove 
_B._melement.remove();
// [145] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [149] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [150] If mElement <> Null Then 
if (_B._melement!=null) {
// [151] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [152] End If 
}
// End Sub
};

// [156] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [157] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [158] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [159] varClass = varClass.trim 
_varclass=_varclass.trim();
// [160] if varClass = {49} Then Return 
if (_varclass=="") { return ;}
// [161] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [162] Dim mxItems As List = BANanoShared.StrParse( {50} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [163] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [164] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [165] Next 
}
// End Sub
};

// [169] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [170] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [171] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [172] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [173] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [174] varClass = varClass.trim 
_varclass=_varclass.trim();
// [175] if varClass = {51} Then Return 
if (_varclass=="") { return ;}
// [176] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [177] Dim mxItems As List = BANanoShared.StrParse( {52} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [178] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [179] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [180] Next 
}
// End Sub
};

// [184] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [185] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [186] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [187] If mElement <> Null Then 
if (_B._melement!=null) {
// [188] Dim aStyle As Map = CreateMap() 
_astyle={};
// [189] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [190] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [191] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [192] End If 
}
// [193] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [197] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [198] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [199] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [201] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [202] If varValue = True Then 
if (_varvalue==true) {
// [203] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [204] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [205] End If 
}
// [206] Else 
} else {
// [208] If varValue.StartsWith( {53} ) Then 
if (_varvalue.startsWith(":")) {
// [209] If varValue.StartsWith( {54} ) Then 
if (_varvalue.startsWith("$")) {
// [210] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [211] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [212] Else 
} else {
// [213] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [214] If rname.Contains( {55} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [215] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [216] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [217] End If 
}
// [218] Else 
} else {
// [220] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [221] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [222] Select Case varProp 
switch ("" + _varprop) {
// [223] Case {56} , {57} , {58} , {59} , {60} , {61} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [224] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [225] End Select 
break;
}
// [226] End If 
}
// [227] End If 
}
// [228] Return 
return;
// End Sub
};

// [232] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [233] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [234] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [235] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [236] sbClass.Append(k).Append( {62} ) 
_sbclass.append(_k).append(" ");
// [237] Next 
}
// [238] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [239] Return mClasses 
return _B._mclasses;
// End Sub
};

// [243] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [244] If mElement <> Null Then 
if (_B._melement!=null) {
// [245] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [246] End If 
}
// [247] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [248] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [249] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [250] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [251] Next 
}
// End Sub
};

// [255] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [256] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [257] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [258] sbStyle.Append( {63} ) 
_sbstyle.append("{");
// [259] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [260] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [261] sbStyle.Append(k).Append( {64} ).Append(v).Append( {65} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [262] Next 
}
// [263] sbStyle.Append( {66} ) 
_sbstyle.append("}");
// [264] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [265] Return mStyle 
return _B._mstyle;
// End Sub
};

// [269] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [270] Dim mxItems As List = BANanoShared.StrParse( {67} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [271] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [272] Dim k As String = BANanoShared.MvField(mt,1, {68} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [273] Dim v As String = BANanoShared.MvField(mt,2, {69} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [274] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [275] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [276] Next 
}
// End Sub
};

// [280] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [281] Dim mxItems As List = BANanoShared.StrParse( {70} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [282] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [283] Dim k As String = BANanoShared.MvField(mt,1, {71} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [284] Dim v As String = BANanoShared.MvField(mt,2, {72} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [285] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [286] Next 
}
// End Sub
};

// [290] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [291] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [292] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [293] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [294] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [295] sbAttr.Append(k).Append( {73} ).Append(v).Append( {74} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [296] Next 
}
// [297] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [298] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [302] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [303] If mElement <> Null Then 
if (_B._melement!=null) {
// [304] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [305] End If 
}
// [306] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [310] public Sub getCaption() As String 
_B.getcaption=function() {
// [311] Return mCaption 
return _B._mcaption;
// End Sub
};

// [314] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [315] AddAttr( {75} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [316] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [319] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [320] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [323] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [324] AddAttr( {76} , varColor) 
_B.addattr("color",_varcolor,_B);
// [325] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [328] public Sub getColor() As String 
_B.getcolor=function() {
// [329] Return stColor 
return _B._stcolor;
// End Sub
};

// [332] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [333] AddAttr( {77} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [334] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [337] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [338] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [341] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [342] AddAttr( {78} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [343] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [346] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [347] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [350] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [351] AddAttr( {79} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [352] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [355] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [356] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [359] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [360] AddAttr( {80} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [361] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [364] public Sub getPadding() As String 
_B.getpadding=function() {
// [365] Return stPadding 
return _B._stpadding;
// End Sub
};

// [368] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [369] AddAttr( {81} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [370] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [373] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [374] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [377] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [378] AddAttr( {82} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [379] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [382] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [383] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [386] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [387] AddAttr( {83} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [388] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [391] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [392] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [395] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [396] AddAttr( {84} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [397] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [400] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [401] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [406] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [407] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJAccordionTitle  =========================== */
function banano_bananomjml_mjaccordiontitle() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-accordion-title";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

// [50] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [51] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [52] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [53] mCallBack = CallBack 
_B._mcallback=_callback;
// [54] classList.Initialize 
_B._classlist={};
// [55] styleList.Initialize 
_B._stylelist={};
// [56] attributeList.Initialize 
_B._attributelist={};
// [57] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [61] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [62] mTarget = Target 
_B._mtarget=_target;
// [63] If Props <> Null Then 
if (_props!=null) {
// [64] mClasses = Props.Get( {18} ) 
_B._mclasses=_props["Classes"];
// [65] mAttributes = Props.Get( {19} ) 
_B._mattributes=_props["Attributes"];
// [66] mStyle = Props.Get( {20} ) 
_B._mstyle=_props["Style"];
// [67] mCaption = Props.Get( {21} ) 
_B._mcaption=_props["Caption"];
// [68] stBackgroundColor = Props.Get( {22} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [69] stColor = Props.Get( {23} ) 
_B._stcolor=_props["Color"];
// [70] stCssClass = Props.Get( {24} ) 
_B._stcssclass=_props["CssClass"];
// [71] stFontFamily = Props.Get( {25} ) 
_B._stfontfamily=_props["FontFamily"];
// [72] stFontSize = Props.Get( {26} ) 
_B._stfontsize=_props["FontSize"];
// [73] stPadding = Props.Get( {27} ) 
_B._stpadding=_props["Padding"];
// [74] stPaddingBottom = Props.Get( {28} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [75] stPaddingLeft = Props.Get( {29} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [76] stPaddingRight = Props.Get( {30} ) 
_B._stpaddingright=_props["PaddingRight"];
// [77] stPaddingTop = Props.Get( {31} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [78] End If 
}
// [80] AddAttr( {32} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [81] AddAttr( {33} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [82] AddAttr( {34} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [83] AddAttr( {35} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [84] AddAttr( {36} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [85] AddAttr( {37} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [86] AddAttr( {38} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [87] AddAttr( {39} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [88] AddAttr( {40} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [89] AddAttr( {41} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [90] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [91] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [92] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [95] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [96] mElement = mTarget.Append(strHTML).Get( {42} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [102] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [104] Dim className As String = BANanoShared.JoinMapKeys(classList, {43} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [105] AddAttr( {44} , className) 
_B.addattr("class",_classname,_B);
// [107] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [108] AddAttr( {45} , styleName) 
_B.addattr("style",_stylename,_B);
// [110] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [111] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [112] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [113] Return rslt 
return _rslt;
// End Sub
};

// [117] Sub AddBR 
_B.addbr=function() {
// [118] sbText.Append( {46} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [122] Sub AddHR 
_B.addhr=function() {
// [123] sbText.Append( {47} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [127] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [128] Return mElement 
return _B._melement;
// End Sub
};

// [132] public Sub getID() As String 
_B.getid=function() {
// [133] Return mName 
return _B._mname;
// End Sub
};

// [137] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [138] mTarget = BANano.GetElement( {48} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [139] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [143] public Sub Remove() 
_B.remove=function() {
// [144] mElement.Remove 
_B._melement.remove();
// [145] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [149] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [150] If mElement <> Null Then 
if (_B._melement!=null) {
// [151] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [152] End If 
}
// End Sub
};

// [156] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [157] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [158] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [159] varClass = varClass.trim 
_varclass=_varclass.trim();
// [160] if varClass = {49} Then Return 
if (_varclass=="") { return ;}
// [161] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [162] Dim mxItems As List = BANanoShared.StrParse( {50} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [163] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [164] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [165] Next 
}
// End Sub
};

// [169] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [170] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [171] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [172] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [173] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [174] varClass = varClass.trim 
_varclass=_varclass.trim();
// [175] if varClass = {51} Then Return 
if (_varclass=="") { return ;}
// [176] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [177] Dim mxItems As List = BANanoShared.StrParse( {52} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [178] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [179] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [180] Next 
}
// End Sub
};

// [184] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [185] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [186] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [187] If mElement <> Null Then 
if (_B._melement!=null) {
// [188] Dim aStyle As Map = CreateMap() 
_astyle={};
// [189] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [190] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [191] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [192] End If 
}
// [193] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [197] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [198] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [199] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [201] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [202] If varValue = True Then 
if (_varvalue==true) {
// [203] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [204] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [205] End If 
}
// [206] Else 
} else {
// [208] If varValue.StartsWith( {53} ) Then 
if (_varvalue.startsWith(":")) {
// [209] If varValue.StartsWith( {54} ) Then 
if (_varvalue.startsWith("$")) {
// [210] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [211] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [212] Else 
} else {
// [213] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [214] If rname.Contains( {55} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [215] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [216] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [217] End If 
}
// [218] Else 
} else {
// [220] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [221] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [222] Select Case varProp 
switch ("" + _varprop) {
// [223] Case {56} , {57} , {58} , {59} , {60} , {61} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [224] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [225] End Select 
break;
}
// [226] End If 
}
// [227] End If 
}
// [228] Return 
return;
// End Sub
};

// [232] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [233] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [234] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [235] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [236] sbClass.Append(k).Append( {62} ) 
_sbclass.append(_k).append(" ");
// [237] Next 
}
// [238] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [239] Return mClasses 
return _B._mclasses;
// End Sub
};

// [243] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [244] If mElement <> Null Then 
if (_B._melement!=null) {
// [245] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [246] End If 
}
// [247] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [248] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [249] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [250] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [251] Next 
}
// End Sub
};

// [255] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [256] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [257] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [258] sbStyle.Append( {63} ) 
_sbstyle.append("{");
// [259] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [260] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [261] sbStyle.Append(k).Append( {64} ).Append(v).Append( {65} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [262] Next 
}
// [263] sbStyle.Append( {66} ) 
_sbstyle.append("}");
// [264] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [265] Return mStyle 
return _B._mstyle;
// End Sub
};

// [269] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [270] Dim mxItems As List = BANanoShared.StrParse( {67} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [271] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [272] Dim k As String = BANanoShared.MvField(mt,1, {68} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [273] Dim v As String = BANanoShared.MvField(mt,2, {69} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [274] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [275] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [276] Next 
}
// End Sub
};

// [280] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [281] Dim mxItems As List = BANanoShared.StrParse( {70} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [282] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [283] Dim k As String = BANanoShared.MvField(mt,1, {71} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [284] Dim v As String = BANanoShared.MvField(mt,2, {72} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [285] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [286] Next 
}
// End Sub
};

// [290] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [291] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [292] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [293] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [294] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [295] sbAttr.Append(k).Append( {73} ).Append(v).Append( {74} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [296] Next 
}
// [297] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [298] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [302] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [303] If mElement <> Null Then 
if (_B._melement!=null) {
// [304] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [305] End If 
}
// [306] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [310] public Sub getCaption() As String 
_B.getcaption=function() {
// [311] Return mCaption 
return _B._mcaption;
// End Sub
};

// [314] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [315] AddAttr( {75} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [316] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [319] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [320] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [323] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [324] AddAttr( {76} , varColor) 
_B.addattr("color",_varcolor,_B);
// [325] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [328] public Sub getColor() As String 
_B.getcolor=function() {
// [329] Return stColor 
return _B._stcolor;
// End Sub
};

// [332] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [333] AddAttr( {77} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [334] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [337] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [338] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [341] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [342] AddAttr( {78} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [343] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [346] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [347] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [350] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [351] AddAttr( {79} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [352] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [355] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [356] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [359] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [360] AddAttr( {80} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [361] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [364] public Sub getPadding() As String 
_B.getpadding=function() {
// [365] Return stPadding 
return _B._stpadding;
// End Sub
};

// [368] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [369] AddAttr( {81} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [370] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [373] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [374] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [377] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [378] AddAttr( {82} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [379] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [382] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [383] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [386] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [387] AddAttr( {83} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [388] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [391] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [392] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [395] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [396] AddAttr( {84} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [397] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [400] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [401] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [406] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [407] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJAll  =========================== */
function banano_bananomjml_mjall() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-all";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stfontfamily="";

// [32] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [33] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [34] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [35] mCallBack = CallBack 
_B._mcallback=_callback;
// [36] classList.Initialize 
_B._classlist={};
// [37] styleList.Initialize 
_B._stylelist={};
// [38] attributeList.Initialize 
_B._attributelist={};
// [39] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [43] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [44] mTarget = Target 
_B._mtarget=_target;
// [45] If Props <> Null Then 
if (_props!=null) {
// [46] mClasses = Props.Get( {9} ) 
_B._mclasses=_props["Classes"];
// [47] mAttributes = Props.Get( {10} ) 
_B._mattributes=_props["Attributes"];
// [48] mStyle = Props.Get( {11} ) 
_B._mstyle=_props["Style"];
// [49] mCaption = Props.Get( {12} ) 
_B._mcaption=_props["Caption"];
// [50] stFontFamily = Props.Get( {13} ) 
_B._stfontfamily=_props["FontFamily"];
// [51] End If 
}
// [53] AddAttr( {14} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [54] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [55] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [56] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [59] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [60] mElement = mTarget.Append(strHTML).Get( {15} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [66] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [68] Dim className As String = BANanoShared.JoinMapKeys(classList, {16} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [69] AddAttr( {17} , className) 
_B.addattr("class",_classname,_B);
// [71] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [72] AddAttr( {18} , styleName) 
_B.addattr("style",_stylename,_B);
// [74] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [75] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [76] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [77] Return rslt 
return _rslt;
// End Sub
};

// [81] Sub AddBR 
_B.addbr=function() {
// [82] sbText.Append( {19} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [86] Sub AddHR 
_B.addhr=function() {
// [87] sbText.Append( {20} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [91] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [92] Return mElement 
return _B._melement;
// End Sub
};

// [96] public Sub getID() As String 
_B.getid=function() {
// [97] Return mName 
return _B._mname;
// End Sub
};

// [101] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [102] mTarget = BANano.GetElement( {21} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [103] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [107] public Sub Remove() 
_B.remove=function() {
// [108] mElement.Remove 
_B._melement.remove();
// [109] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [113] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [114] If mElement <> Null Then 
if (_B._melement!=null) {
// [115] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [116] End If 
}
// End Sub
};

// [120] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [121] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [122] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [123] varClass = varClass.trim 
_varclass=_varclass.trim();
// [124] if varClass = {22} Then Return 
if (_varclass=="") { return ;}
// [125] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [126] Dim mxItems As List = BANanoShared.StrParse( {23} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [127] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [128] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [129] Next 
}
// End Sub
};

// [133] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [134] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [135] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [136] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [137] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [138] varClass = varClass.trim 
_varclass=_varclass.trim();
// [139] if varClass = {24} Then Return 
if (_varclass=="") { return ;}
// [140] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [141] Dim mxItems As List = BANanoShared.StrParse( {25} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [142] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [143] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [144] Next 
}
// End Sub
};

// [148] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [149] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [150] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [151] If mElement <> Null Then 
if (_B._melement!=null) {
// [152] Dim aStyle As Map = CreateMap() 
_astyle={};
// [153] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [154] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [155] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [156] End If 
}
// [157] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [161] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [162] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [163] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [165] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [166] If varValue = True Then 
if (_varvalue==true) {
// [167] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [168] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [169] End If 
}
// [170] Else 
} else {
// [172] If varValue.StartsWith( {26} ) Then 
if (_varvalue.startsWith(":")) {
// [173] If varValue.StartsWith( {27} ) Then 
if (_varvalue.startsWith("$")) {
// [174] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [175] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [176] Else 
} else {
// [177] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [178] If rname.Contains( {28} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [179] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [180] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [181] End If 
}
// [182] Else 
} else {
// [184] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [185] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [186] Select Case varProp 
switch ("" + _varprop) {
// [187] Case {29} , {30} , {31} , {32} , {33} , {34} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [188] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [189] End Select 
break;
}
// [190] End If 
}
// [191] End If 
}
// [192] Return 
return;
// End Sub
};

// [196] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [197] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [198] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [199] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [200] sbClass.Append(k).Append( {35} ) 
_sbclass.append(_k).append(" ");
// [201] Next 
}
// [202] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [203] Return mClasses 
return _B._mclasses;
// End Sub
};

// [207] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [208] If mElement <> Null Then 
if (_B._melement!=null) {
// [209] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [210] End If 
}
// [211] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [212] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [213] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [214] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [215] Next 
}
// End Sub
};

// [219] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [220] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [221] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [222] sbStyle.Append( {36} ) 
_sbstyle.append("{");
// [223] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [224] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [225] sbStyle.Append(k).Append( {37} ).Append(v).Append( {38} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [226] Next 
}
// [227] sbStyle.Append( {39} ) 
_sbstyle.append("}");
// [228] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [229] Return mStyle 
return _B._mstyle;
// End Sub
};

// [233] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [234] Dim mxItems As List = BANanoShared.StrParse( {40} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [235] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [236] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [237] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [238] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [239] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [240] Next 
}
// End Sub
};

// [244] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [245] Dim mxItems As List = BANanoShared.StrParse( {43} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [246] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [247] Dim k As String = BANanoShared.MvField(mt,1, {44} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [248] Dim v As String = BANanoShared.MvField(mt,2, {45} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [249] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [250] Next 
}
// End Sub
};

// [254] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [255] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [256] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [257] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [258] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [259] sbAttr.Append(k).Append( {46} ).Append(v).Append( {47} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [260] Next 
}
// [261] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [262] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [266] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [267] If mElement <> Null Then 
if (_B._melement!=null) {
// [268] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [269] End If 
}
// [270] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [274] public Sub getCaption() As String 
_B.getcaption=function() {
// [275] Return mCaption 
return _B._mcaption;
// End Sub
};

// [278] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [279] AddAttr( {48} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [280] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [283] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [284] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [289] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [290] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJAnchor  =========================== */
function banano_bananomjml_mjanchor() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="a";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._sthref="";

_B._sttarget="";

_B._stbackgroundcolor="";

_B._stborder="";

_B._stborderradius="";

_B._stdisplay="";

_B._stfontsize="";

_B._stfontweight="";

_B._stpadding="";

_B._bomjcontent=false;

// [50] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [51] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [52] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [53] mCallBack = CallBack 
_B._mcallback=_callback;
// [54] classList.Initialize 
_B._classlist={};
// [55] styleList.Initialize 
_B._stylelist={};
// [56] attributeList.Initialize 
_B._attributelist={};
// [57] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [61] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [62] mTarget = Target 
_B._mtarget=_target;
// [63] If Props <> Null Then 
if (_props!=null) {
// [64] mClasses = Props.Get( {17} ) 
_B._mclasses=_props["Classes"];
// [65] mAttributes = Props.Get( {18} ) 
_B._mattributes=_props["Attributes"];
// [66] mStyle = Props.Get( {19} ) 
_B._mstyle=_props["Style"];
// [67] mCaption = Props.Get( {20} ) 
_B._mcaption=_props["Caption"];
// [68] stHref = Props.Get( {21} ) 
_B._sthref=_props["Href"];
// [69] stTarget = Props.Get( {22} ) 
_B._sttarget=_props["Target"];
// [70] stBackgroundColor = Props.Get( {23} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [71] stBorder = Props.Get( {24} ) 
_B._stborder=_props["Border"];
// [72] stBorderRadius = Props.Get( {25} ) 
_B._stborderradius=_props["BorderRadius"];
// [73] stDisplay = Props.Get( {26} ) 
_B._stdisplay=_props["Display"];
// [74] stFontSize = Props.Get( {27} ) 
_B._stfontsize=_props["FontSize"];
// [75] stFontWeight = Props.Get( {28} ) 
_B._stfontweight=_props["FontWeight"];
// [76] stPadding = Props.Get( {29} ) 
_B._stpadding=_props["Padding"];
// [77] boMjContent = Props.Get( {30} ) 
_B._bomjcontent=_props["MjContent"];
// [78] End If 
}
// [80] AddAttr( {31} , stHref) 
_B.addattr("href",_B._sthref,_B);
// [81] AddAttr( {32} , stTarget) 
_B.addattr("target",_B._sttarget,_B);
// [82] AddStyle( {33} , stBackgroundColor) 
_B.addstyle("background-color",_B._stbackgroundcolor,_B);
// [83] AddStyle( {34} , stBorder) 
_B.addstyle("border",_B._stborder,_B);
// [84] AddStyle( {35} , stBorderRadius) 
_B.addstyle("border-radius",_B._stborderradius,_B);
// [85] AddStyle( {36} , stDisplay) 
_B.addstyle("display",_B._stdisplay,_B);
// [86] AddStyle( {37} , stFontSize) 
_B.addstyle("font-size",_B._stfontsize,_B);
// [87] AddStyle( {38} , stFontWeight) 
_B.addstyle("font-weight",_B._stfontweight,_B);
// [88] AddStyle( {39} , stPadding) 
_B.addstyle("padding",_B._stpadding,_B);
// [89] AddClassOnCondition( {40} , boMjContent, True) 
_B.addclassoncondition("mj-content",_B._bomjcontent,true,_B);
// [90] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [91] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [92] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [95] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [96] mElement = mTarget.Append(strHTML).Get( {41} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [102] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [104] Dim className As String = BANanoShared.JoinMapKeys(classList, {42} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [105] AddAttr( {43} , className) 
_B.addattr("class",_classname,_B);
// [107] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [108] AddAttr( {44} , styleName) 
_B.addattr("style",_stylename,_B);
// [110] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [111] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [112] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [113] Return rslt 
return _rslt;
// End Sub
};

// [117] Sub AddBR 
_B.addbr=function() {
// [118] sbText.Append( {45} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [122] Sub AddHR 
_B.addhr=function() {
// [123] sbText.Append( {46} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [127] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [128] Return mElement 
return _B._melement;
// End Sub
};

// [132] public Sub getID() As String 
_B.getid=function() {
// [133] Return mName 
return _B._mname;
// End Sub
};

// [137] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [138] mTarget = BANano.GetElement( {47} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [139] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [143] public Sub Remove() 
_B.remove=function() {
// [144] mElement.Remove 
_B._melement.remove();
// [145] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [149] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [150] If mElement <> Null Then 
if (_B._melement!=null) {
// [151] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [152] End If 
}
// End Sub
};

// [156] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [157] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [158] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [159] varClass = varClass.trim 
_varclass=_varclass.trim();
// [160] if varClass = {48} Then Return 
if (_varclass=="") { return ;}
// [161] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [162] Dim mxItems As List = BANanoShared.StrParse( {49} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [163] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [164] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [165] Next 
}
// End Sub
};

// [169] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [170] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [171] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [172] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [173] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [174] varClass = varClass.trim 
_varclass=_varclass.trim();
// [175] if varClass = {50} Then Return 
if (_varclass=="") { return ;}
// [176] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [177] Dim mxItems As List = BANanoShared.StrParse( {51} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [178] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [179] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [180] Next 
}
// End Sub
};

// [184] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [185] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [186] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [187] If mElement <> Null Then 
if (_B._melement!=null) {
// [188] Dim aStyle As Map = CreateMap() 
_astyle={};
// [189] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [190] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [191] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [192] End If 
}
// [193] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [197] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [198] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [199] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [201] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [202] If varValue = True Then 
if (_varvalue==true) {
// [203] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [204] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [205] End If 
}
// [206] Else 
} else {
// [208] If varValue.StartsWith( {52} ) Then 
if (_varvalue.startsWith(":")) {
// [209] If varValue.StartsWith( {53} ) Then 
if (_varvalue.startsWith("$")) {
// [210] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [211] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [212] Else 
} else {
// [213] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [214] If rname.Contains( {54} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [215] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [216] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [217] End If 
}
// [218] Else 
} else {
// [220] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [221] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [222] Select Case varProp 
switch ("" + _varprop) {
// [223] Case {55} , {56} , {57} , {58} , {59} , {60} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [224] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [225] End Select 
break;
}
// [226] End If 
}
// [227] End If 
}
// [228] Return 
return;
// End Sub
};

// [232] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [233] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [234] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [235] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [236] sbClass.Append(k).Append( {61} ) 
_sbclass.append(_k).append(" ");
// [237] Next 
}
// [238] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [239] Return mClasses 
return _B._mclasses;
// End Sub
};

// [243] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [244] If mElement <> Null Then 
if (_B._melement!=null) {
// [245] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [246] End If 
}
// [247] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [248] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [249] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [250] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [251] Next 
}
// End Sub
};

// [255] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [256] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [257] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [258] sbStyle.Append( {62} ) 
_sbstyle.append("{");
// [259] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [260] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [261] sbStyle.Append(k).Append( {63} ).Append(v).Append( {64} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [262] Next 
}
// [263] sbStyle.Append( {65} ) 
_sbstyle.append("}");
// [264] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [265] Return mStyle 
return _B._mstyle;
// End Sub
};

// [269] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [270] Dim mxItems As List = BANanoShared.StrParse( {66} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [271] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [272] Dim k As String = BANanoShared.MvField(mt,1, {67} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [273] Dim v As String = BANanoShared.MvField(mt,2, {68} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [274] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [275] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [276] Next 
}
// End Sub
};

// [280] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [281] Dim mxItems As List = BANanoShared.StrParse( {69} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [282] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [283] Dim k As String = BANanoShared.MvField(mt,1, {70} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [284] Dim v As String = BANanoShared.MvField(mt,2, {71} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [285] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [286] Next 
}
// End Sub
};

// [290] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [291] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [292] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [293] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [294] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [295] sbAttr.Append(k).Append( {72} ).Append(v).Append( {73} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [296] Next 
}
// [297] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [298] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [302] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [303] If mElement <> Null Then 
if (_B._melement!=null) {
// [304] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [305] End If 
}
// [306] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [310] public Sub getCaption() As String 
_B.getcaption=function() {
// [311] Return mCaption 
return _B._mcaption;
// End Sub
};

// [314] public Sub setHref(varHref As String) 
_B.sethref=function(_varhref) {
// [315] AddAttr( {74} , varHref) 
_B.addattr("href",_varhref,_B);
// [316] stHref = varHref 
_B._sthref=_varhref;
// End Sub
};

// [319] public Sub getHref() As String 
_B.gethref=function() {
// [320] Return stHref 
return _B._sthref;
// End Sub
};

// [323] public Sub setTarget(varTarget As String) 
_B.settarget=function(_vartarget) {
// [324] AddAttr( {75} , varTarget) 
_B.addattr("target",_vartarget,_B);
// [325] stTarget = varTarget 
_B._sttarget=_vartarget;
// End Sub
};

// [328] public Sub getTarget() As String 
_B.gettarget=function() {
// [329] Return stTarget 
return _B._sttarget;
// End Sub
};

// [332] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [333] AddStyle( {76} , varBackgroundColor) 
_B.addstyle("background-color",_varbackgroundcolor,_B);
// [334] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [337] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [338] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [341] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [342] AddStyle( {77} , varBorder) 
_B.addstyle("border",_varborder,_B);
// [343] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [346] public Sub getBorder() As String 
_B.getborder=function() {
// [347] Return stBorder 
return _B._stborder;
// End Sub
};

// [350] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [351] AddStyle( {78} , varBorderRadius) 
_B.addstyle("border-radius",_varborderradius,_B);
// [352] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [355] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [356] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [359] public Sub setDisplay(varDisplay As String) 
_B.setdisplay=function(_vardisplay) {
// [360] AddStyle( {79} , varDisplay) 
_B.addstyle("display",_vardisplay,_B);
// [361] stDisplay = varDisplay 
_B._stdisplay=_vardisplay;
// End Sub
};

// [364] public Sub getDisplay() As String 
_B.getdisplay=function() {
// [365] Return stDisplay 
return _B._stdisplay;
// End Sub
};

// [368] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [369] AddStyle( {80} , varFontSize) 
_B.addstyle("font-size",_varfontsize,_B);
// [370] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [373] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [374] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [377] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [378] AddStyle( {81} , varFontWeight) 
_B.addstyle("font-weight",_varfontweight,_B);
// [379] stFontWeight = varFontWeight 
_B._stfontweight=_varfontweight;
// End Sub
};

// [382] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [383] Return stFontWeight 
return _B._stfontweight;
// End Sub
};

// [386] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [387] AddStyle( {82} , varPadding) 
_B.addstyle("padding",_varpadding,_B);
// [388] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [391] public Sub getPadding() As String 
_B.getpadding=function() {
// [392] Return stPadding 
return _B._stpadding;
// End Sub
};

// [395] public Sub setMjContent(varMjContent As Boolean) 
_B.setmjcontent=function(_varmjcontent) {
// [396] AddClass(varMjContent) 
_B.addclass(_varmjcontent,_B);
// [397] boMjContent = varMjContent 
_B._bomjcontent=_varmjcontent;
// End Sub
};

// [400] public Sub getMjContent() As Boolean 
_B.getmjcontent=function() {
// [401] Return boMjContent 
return _B._bomjcontent;
// End Sub
};

// [406] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [407] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJApp  =========================== */
function banano_bananomjml_mjapp() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mjml";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJAttributes  =========================== */
function banano_bananomjml_mjattributes() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-attributes";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJBody  =========================== */
function banano_bananomjml_mjbody() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-body";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stcssclass="";

_B._stwidth="";

// [36] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [37] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [38] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [39] mCallBack = CallBack 
_B._mcallback=_callback;
// [40] classList.Initialize 
_B._classlist={};
// [41] styleList.Initialize 
_B._stylelist={};
// [42] attributeList.Initialize 
_B._attributelist={};
// [43] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [47] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [48] mTarget = Target 
_B._mtarget=_target;
// [49] If Props <> Null Then 
if (_props!=null) {
// [50] mClasses = Props.Get( {11} ) 
_B._mclasses=_props["Classes"];
// [51] mAttributes = Props.Get( {12} ) 
_B._mattributes=_props["Attributes"];
// [52] mStyle = Props.Get( {13} ) 
_B._mstyle=_props["Style"];
// [53] mCaption = Props.Get( {14} ) 
_B._mcaption=_props["Caption"];
// [54] stBackgroundColor = Props.Get( {15} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [55] stCssClass = Props.Get( {16} ) 
_B._stcssclass=_props["CssClass"];
// [56] stWidth = Props.Get( {17} ) 
_B._stwidth=_props["Width"];
// [57] End If 
}
// [59] AddAttr( {18} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [60] AddAttr( {19} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [61] AddAttr( {20} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [62] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [63] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [64] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [67] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [68] mElement = mTarget.Append(strHTML).Get( {21} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [74] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [76] Dim className As String = BANanoShared.JoinMapKeys(classList, {22} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [77] AddAttr( {23} , className) 
_B.addattr("class",_classname,_B);
// [79] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [80] AddAttr( {24} , styleName) 
_B.addattr("style",_stylename,_B);
// [82] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [83] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [84] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [85] Return rslt 
return _rslt;
// End Sub
};

// [89] Sub AddBR 
_B.addbr=function() {
// [90] sbText.Append( {25} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [94] Sub AddHR 
_B.addhr=function() {
// [95] sbText.Append( {26} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [99] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [100] Return mElement 
return _B._melement;
// End Sub
};

// [104] public Sub getID() As String 
_B.getid=function() {
// [105] Return mName 
return _B._mname;
// End Sub
};

// [109] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [110] mTarget = BANano.GetElement( {27} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [111] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [115] public Sub Remove() 
_B.remove=function() {
// [116] mElement.Remove 
_B._melement.remove();
// [117] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [121] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [122] If mElement <> Null Then 
if (_B._melement!=null) {
// [123] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [124] End If 
}
// End Sub
};

// [128] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [129] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [130] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [131] varClass = varClass.trim 
_varclass=_varclass.trim();
// [132] if varClass = {28} Then Return 
if (_varclass=="") { return ;}
// [133] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [134] Dim mxItems As List = BANanoShared.StrParse( {29} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [135] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [136] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [137] Next 
}
// End Sub
};

// [141] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [142] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [143] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [144] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [145] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [146] varClass = varClass.trim 
_varclass=_varclass.trim();
// [147] if varClass = {30} Then Return 
if (_varclass=="") { return ;}
// [148] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [149] Dim mxItems As List = BANanoShared.StrParse( {31} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [150] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [151] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [152] Next 
}
// End Sub
};

// [156] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [157] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [158] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [159] If mElement <> Null Then 
if (_B._melement!=null) {
// [160] Dim aStyle As Map = CreateMap() 
_astyle={};
// [161] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [162] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [163] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [164] End If 
}
// [165] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [169] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [170] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [171] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [173] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [174] If varValue = True Then 
if (_varvalue==true) {
// [175] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [176] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If varValue.StartsWith( {32} ) Then 
if (_varvalue.startsWith(":")) {
// [181] If varValue.StartsWith( {33} ) Then 
if (_varvalue.startsWith("$")) {
// [182] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [183] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [184] Else 
} else {
// [185] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [186] If rname.Contains( {34} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [187] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [188] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [189] End If 
}
// [190] Else 
} else {
// [192] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [193] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [194] Select Case varProp 
switch ("" + _varprop) {
// [195] Case {35} , {36} , {37} , {38} , {39} , {40} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [196] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [197] End Select 
break;
}
// [198] End If 
}
// [199] End If 
}
// [200] Return 
return;
// End Sub
};

// [204] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [205] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [206] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [207] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [208] sbClass.Append(k).Append( {41} ) 
_sbclass.append(_k).append(" ");
// [209] Next 
}
// [210] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [211] Return mClasses 
return _B._mclasses;
// End Sub
};

// [215] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [216] If mElement <> Null Then 
if (_B._melement!=null) {
// [217] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [218] End If 
}
// [219] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [220] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [221] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [222] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [223] Next 
}
// End Sub
};

// [227] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [228] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [229] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [230] sbStyle.Append( {42} ) 
_sbstyle.append("{");
// [231] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [232] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [233] sbStyle.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [234] Next 
}
// [235] sbStyle.Append( {45} ) 
_sbstyle.append("}");
// [236] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [237] Return mStyle 
return _B._mstyle;
// End Sub
};

// [241] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [242] Dim mxItems As List = BANanoShared.StrParse( {46} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [243] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [244] Dim k As String = BANanoShared.MvField(mt,1, {47} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [245] Dim v As String = BANanoShared.MvField(mt,2, {48} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [246] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [247] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [248] Next 
}
// End Sub
};

// [252] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [253] Dim mxItems As List = BANanoShared.StrParse( {49} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [254] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [255] Dim k As String = BANanoShared.MvField(mt,1, {50} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [256] Dim v As String = BANanoShared.MvField(mt,2, {51} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [257] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [258] Next 
}
// End Sub
};

// [262] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [263] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [264] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [265] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [266] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [267] sbAttr.Append(k).Append( {52} ).Append(v).Append( {53} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [268] Next 
}
// [269] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [270] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [274] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [275] If mElement <> Null Then 
if (_B._melement!=null) {
// [276] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [277] End If 
}
// [278] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [282] public Sub getCaption() As String 
_B.getcaption=function() {
// [283] Return mCaption 
return _B._mcaption;
// End Sub
};

// [286] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [287] AddAttr( {54} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [288] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [291] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [292] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [295] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [296] AddAttr( {55} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [297] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [300] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [301] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [304] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [305] AddAttr( {56} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [306] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [309] public Sub getWidth() As String 
_B.getwidth=function() {
// [310] Return stWidth 
return _B._stwidth;
// End Sub
};

// [315] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [316] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJBreakpoint  =========================== */
function banano_bananomjml_mjbreakpoint() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-breakpoint";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stwidth="";

// [32] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [33] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [34] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [35] mCallBack = CallBack 
_B._mcallback=_callback;
// [36] classList.Initialize 
_B._classlist={};
// [37] styleList.Initialize 
_B._stylelist={};
// [38] attributeList.Initialize 
_B._attributelist={};
// [39] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [43] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [44] mTarget = Target 
_B._mtarget=_target;
// [45] If Props <> Null Then 
if (_props!=null) {
// [46] mClasses = Props.Get( {9} ) 
_B._mclasses=_props["Classes"];
// [47] mAttributes = Props.Get( {10} ) 
_B._mattributes=_props["Attributes"];
// [48] mStyle = Props.Get( {11} ) 
_B._mstyle=_props["Style"];
// [49] mCaption = Props.Get( {12} ) 
_B._mcaption=_props["Caption"];
// [50] stWidth = Props.Get( {13} ) 
_B._stwidth=_props["Width"];
// [51] End If 
}
// [53] AddAttr( {14} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [54] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [55] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [56] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [59] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [60] mElement = mTarget.Append(strHTML).Get( {15} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [66] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [68] Dim className As String = BANanoShared.JoinMapKeys(classList, {16} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [69] AddAttr( {17} , className) 
_B.addattr("class",_classname,_B);
// [71] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [72] AddAttr( {18} , styleName) 
_B.addattr("style",_stylename,_B);
// [74] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [75] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [76] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [77] Return rslt 
return _rslt;
// End Sub
};

// [81] Sub AddBR 
_B.addbr=function() {
// [82] sbText.Append( {19} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [86] Sub AddHR 
_B.addhr=function() {
// [87] sbText.Append( {20} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [91] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [92] Return mElement 
return _B._melement;
// End Sub
};

// [96] public Sub getID() As String 
_B.getid=function() {
// [97] Return mName 
return _B._mname;
// End Sub
};

// [101] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [102] mTarget = BANano.GetElement( {21} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [103] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [107] public Sub Remove() 
_B.remove=function() {
// [108] mElement.Remove 
_B._melement.remove();
// [109] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [113] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [114] If mElement <> Null Then 
if (_B._melement!=null) {
// [115] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [116] End If 
}
// End Sub
};

// [120] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [121] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [122] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [123] varClass = varClass.trim 
_varclass=_varclass.trim();
// [124] if varClass = {22} Then Return 
if (_varclass=="") { return ;}
// [125] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [126] Dim mxItems As List = BANanoShared.StrParse( {23} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [127] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [128] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [129] Next 
}
// End Sub
};

// [133] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [134] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [135] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [136] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [137] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [138] varClass = varClass.trim 
_varclass=_varclass.trim();
// [139] if varClass = {24} Then Return 
if (_varclass=="") { return ;}
// [140] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [141] Dim mxItems As List = BANanoShared.StrParse( {25} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [142] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [143] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [144] Next 
}
// End Sub
};

// [148] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [149] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [150] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [151] If mElement <> Null Then 
if (_B._melement!=null) {
// [152] Dim aStyle As Map = CreateMap() 
_astyle={};
// [153] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [154] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [155] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [156] End If 
}
// [157] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [161] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [162] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [163] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [165] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [166] If varValue = True Then 
if (_varvalue==true) {
// [167] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [168] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [169] End If 
}
// [170] Else 
} else {
// [172] If varValue.StartsWith( {26} ) Then 
if (_varvalue.startsWith(":")) {
// [173] If varValue.StartsWith( {27} ) Then 
if (_varvalue.startsWith("$")) {
// [174] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [175] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [176] Else 
} else {
// [177] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [178] If rname.Contains( {28} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [179] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [180] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [181] End If 
}
// [182] Else 
} else {
// [184] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [185] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [186] Select Case varProp 
switch ("" + _varprop) {
// [187] Case {29} , {30} , {31} , {32} , {33} , {34} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [188] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [189] End Select 
break;
}
// [190] End If 
}
// [191] End If 
}
// [192] Return 
return;
// End Sub
};

// [196] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [197] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [198] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [199] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [200] sbClass.Append(k).Append( {35} ) 
_sbclass.append(_k).append(" ");
// [201] Next 
}
// [202] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [203] Return mClasses 
return _B._mclasses;
// End Sub
};

// [207] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [208] If mElement <> Null Then 
if (_B._melement!=null) {
// [209] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [210] End If 
}
// [211] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [212] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [213] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [214] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [215] Next 
}
// End Sub
};

// [219] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [220] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [221] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [222] sbStyle.Append( {36} ) 
_sbstyle.append("{");
// [223] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [224] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [225] sbStyle.Append(k).Append( {37} ).Append(v).Append( {38} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [226] Next 
}
// [227] sbStyle.Append( {39} ) 
_sbstyle.append("}");
// [228] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [229] Return mStyle 
return _B._mstyle;
// End Sub
};

// [233] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [234] Dim mxItems As List = BANanoShared.StrParse( {40} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [235] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [236] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [237] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [238] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [239] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [240] Next 
}
// End Sub
};

// [244] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [245] Dim mxItems As List = BANanoShared.StrParse( {43} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [246] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [247] Dim k As String = BANanoShared.MvField(mt,1, {44} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [248] Dim v As String = BANanoShared.MvField(mt,2, {45} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [249] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [250] Next 
}
// End Sub
};

// [254] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [255] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [256] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [257] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [258] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [259] sbAttr.Append(k).Append( {46} ).Append(v).Append( {47} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [260] Next 
}
// [261] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [262] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [266] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [267] If mElement <> Null Then 
if (_B._melement!=null) {
// [268] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [269] End If 
}
// [270] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [274] public Sub getCaption() As String 
_B.getcaption=function() {
// [275] Return mCaption 
return _B._mcaption;
// End Sub
};

// [278] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [279] AddAttr( {48} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [280] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [283] public Sub getWidth() As String 
_B.getwidth=function() {
// [284] Return stWidth 
return _B._stwidth;
// End Sub
};

// [289] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [290] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJButton  =========================== */
function banano_bananomjml_mjbutton() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-button";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stbackgroundcolor="";

_B._stborder="";

_B._stborderbottom="";

_B._stborderleft="";

_B._stborderradius="";

_B._stborderright="";

_B._stbordertop="";

_B._stcolor="";

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stfontstyle="";

_B._stfontweight="";

_B._stheight="";

_B._sthref="";

_B._stinnerpadding="";

_B._stlineheight="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._strel="";

_B._sttarget="";

_B._sttextalign="";

_B._sttextdecoration="";

_B._sttexttransform="";

_B._stverticalalign="";

_B._stwidth="";

// [92] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [93] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [94] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [95] mCallBack = CallBack 
_B._mcallback=_callback;
// [96] classList.Initialize 
_B._classlist={};
// [97] styleList.Initialize 
_B._stylelist={};
// [98] attributeList.Initialize 
_B._attributelist={};
// [99] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [103] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [104] mTarget = Target 
_B._mtarget=_target;
// [105] If Props <> Null Then 
if (_props!=null) {
// [106] mClasses = Props.Get( {39} ) 
_B._mclasses=_props["Classes"];
// [107] mAttributes = Props.Get( {40} ) 
_B._mattributes=_props["Attributes"];
// [108] mStyle = Props.Get( {41} ) 
_B._mstyle=_props["Style"];
// [109] mCaption = Props.Get( {42} ) 
_B._mcaption=_props["Caption"];
// [110] stAlign = Props.Get( {43} ) 
_B._stalign=_props["Align"];
// [111] stBackgroundColor = Props.Get( {44} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [112] stBorder = Props.Get( {45} ) 
_B._stborder=_props["Border"];
// [113] stBorderBottom = Props.Get( {46} ) 
_B._stborderbottom=_props["BorderBottom"];
// [114] stBorderLeft = Props.Get( {47} ) 
_B._stborderleft=_props["BorderLeft"];
// [115] stBorderRadius = Props.Get( {48} ) 
_B._stborderradius=_props["BorderRadius"];
// [116] stBorderRight = Props.Get( {49} ) 
_B._stborderright=_props["BorderRight"];
// [117] stBorderTop = Props.Get( {50} ) 
_B._stbordertop=_props["BorderTop"];
// [118] stColor = Props.Get( {51} ) 
_B._stcolor=_props["Color"];
// [119] stContainerBackgroundColor = Props.Get( {52} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [120] stCssClass = Props.Get( {53} ) 
_B._stcssclass=_props["CssClass"];
// [121] stFontFamily = Props.Get( {54} ) 
_B._stfontfamily=_props["FontFamily"];
// [122] stFontSize = Props.Get( {55} ) 
_B._stfontsize=_props["FontSize"];
// [123] stFontStyle = Props.Get( {56} ) 
_B._stfontstyle=_props["FontStyle"];
// [124] stFontWeight = Props.Get( {57} ) 
_B._stfontweight=_props["FontWeight"];
// [125] stHeight = Props.Get( {58} ) 
_B._stheight=_props["Height"];
// [126] stHref = Props.Get( {59} ) 
_B._sthref=_props["Href"];
// [127] stInnerPadding = Props.Get( {60} ) 
_B._stinnerpadding=_props["InnerPadding"];
// [128] stLineHeight = Props.Get( {61} ) 
_B._stlineheight=_props["LineHeight"];
// [129] stPadding = Props.Get( {62} ) 
_B._stpadding=_props["Padding"];
// [130] stPaddingBottom = Props.Get( {63} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [131] stPaddingLeft = Props.Get( {64} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [132] stPaddingRight = Props.Get( {65} ) 
_B._stpaddingright=_props["PaddingRight"];
// [133] stPaddingTop = Props.Get( {66} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [134] stRel = Props.Get( {67} ) 
_B._strel=_props["Rel"];
// [135] stTarget = Props.Get( {68} ) 
_B._sttarget=_props["Target"];
// [136] stTextAlign = Props.Get( {69} ) 
_B._sttextalign=_props["TextAlign"];
// [137] stTextDecoration = Props.Get( {70} ) 
_B._sttextdecoration=_props["TextDecoration"];
// [138] stTextTransform = Props.Get( {71} ) 
_B._sttexttransform=_props["TextTransform"];
// [139] stVerticalAlign = Props.Get( {72} ) 
_B._stverticalalign=_props["VerticalAlign"];
// [140] stWidth = Props.Get( {73} ) 
_B._stwidth=_props["Width"];
// [141] End If 
}
// [143] AddAttr( {74} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [144] AddAttr( {75} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [145] AddAttr( {76} , stBorder) 
_B.addattr("border",_B._stborder,_B);
// [146] AddAttr( {77} , stBorderBottom) 
_B.addattr("border-bottom",_B._stborderbottom,_B);
// [147] AddAttr( {78} , stBorderLeft) 
_B.addattr("border-left",_B._stborderleft,_B);
// [148] AddAttr( {79} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [149] AddAttr( {80} , stBorderRight) 
_B.addattr("border-right",_B._stborderright,_B);
// [150] AddAttr( {81} , stBorderTop) 
_B.addattr("border-top",_B._stbordertop,_B);
// [151] AddAttr( {82} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [152] AddAttr( {83} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [153] AddAttr( {84} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [154] AddAttr( {85} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [155] AddAttr( {86} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [156] AddAttr( {87} , stFontStyle) 
_B.addattr("font-style",_B._stfontstyle,_B);
// [157] AddAttr( {88} , stFontWeight) 
_B.addattr("font-weight",_B._stfontweight,_B);
// [158] AddAttr( {89} , stHeight) 
_B.addattr("height",_B._stheight,_B);
// [159] AddAttr( {90} , stHref) 
_B.addattr("href",_B._sthref,_B);
// [160] AddAttr( {91} , stInnerPadding) 
_B.addattr("inner-padding",_B._stinnerpadding,_B);
// [161] AddAttr( {92} , stLineHeight) 
_B.addattr("line-height",_B._stlineheight,_B);
// [162] AddAttr( {93} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [163] AddAttr( {94} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [164] AddAttr( {95} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [165] AddAttr( {96} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [166] AddAttr( {97} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [167] AddAttr( {98} , stRel) 
_B.addattr("rel",_B._strel,_B);
// [168] AddAttr( {99} , stTarget) 
_B.addattr("target",_B._sttarget,_B);
// [169] AddAttr( {100} , stTextAlign) 
_B.addattr("text-align",_B._sttextalign,_B);
// [170] AddAttr( {101} , stTextDecoration) 
_B.addattr("text-decoration",_B._sttextdecoration,_B);
// [171] AddAttr( {102} , stTextTransform) 
_B.addattr("text-transform",_B._sttexttransform,_B);
// [172] AddAttr( {103} , stVerticalAlign) 
_B.addattr("vertical-align",_B._stverticalalign,_B);
// [173] AddAttr( {104} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [174] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [175] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [176] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [179] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [180] mElement = mTarget.Append(strHTML).Get( {105} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [186] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [188] Dim className As String = BANanoShared.JoinMapKeys(classList, {106} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [189] AddAttr( {107} , className) 
_B.addattr("class",_classname,_B);
// [191] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [192] AddAttr( {108} , styleName) 
_B.addattr("style",_stylename,_B);
// [194] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [195] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [196] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [197] Return rslt 
return _rslt;
// End Sub
};

// [201] Sub AddBR 
_B.addbr=function() {
// [202] sbText.Append( {109} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [206] Sub AddHR 
_B.addhr=function() {
// [207] sbText.Append( {110} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [211] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [212] Return mElement 
return _B._melement;
// End Sub
};

// [216] public Sub getID() As String 
_B.getid=function() {
// [217] Return mName 
return _B._mname;
// End Sub
};

// [221] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [222] mTarget = BANano.GetElement( {111} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [223] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [227] public Sub Remove() 
_B.remove=function() {
// [228] mElement.Remove 
_B._melement.remove();
// [229] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [233] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [234] If mElement <> Null Then 
if (_B._melement!=null) {
// [235] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [236] End If 
}
// End Sub
};

// [240] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [241] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [242] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [243] varClass = varClass.trim 
_varclass=_varclass.trim();
// [244] if varClass = {112} Then Return 
if (_varclass=="") { return ;}
// [245] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [246] Dim mxItems As List = BANanoShared.StrParse( {113} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [247] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [248] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [249] Next 
}
// End Sub
};

// [253] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [254] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [255] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [256] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [257] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [258] varClass = varClass.trim 
_varclass=_varclass.trim();
// [259] if varClass = {114} Then Return 
if (_varclass=="") { return ;}
// [260] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [261] Dim mxItems As List = BANanoShared.StrParse( {115} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [262] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [263] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [264] Next 
}
// End Sub
};

// [268] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [269] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [270] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [271] If mElement <> Null Then 
if (_B._melement!=null) {
// [272] Dim aStyle As Map = CreateMap() 
_astyle={};
// [273] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [274] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [275] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [276] End If 
}
// [277] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [281] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [282] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [283] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [285] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [286] If varValue = True Then 
if (_varvalue==true) {
// [287] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [288] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [289] End If 
}
// [290] Else 
} else {
// [292] If varValue.StartsWith( {116} ) Then 
if (_varvalue.startsWith(":")) {
// [293] If varValue.StartsWith( {117} ) Then 
if (_varvalue.startsWith("$")) {
// [294] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [295] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [296] Else 
} else {
// [297] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [298] If rname.Contains( {118} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [299] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [300] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [301] End If 
}
// [302] Else 
} else {
// [304] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [305] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [306] Select Case varProp 
switch ("" + _varprop) {
// [307] Case {119} , {120} , {121} , {122} , {123} , {124} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [308] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [309] End Select 
break;
}
// [310] End If 
}
// [311] End If 
}
// [312] Return 
return;
// End Sub
};

// [316] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [317] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [318] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [319] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [320] sbClass.Append(k).Append( {125} ) 
_sbclass.append(_k).append(" ");
// [321] Next 
}
// [322] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [323] Return mClasses 
return _B._mclasses;
// End Sub
};

// [327] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [328] If mElement <> Null Then 
if (_B._melement!=null) {
// [329] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [330] End If 
}
// [331] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [332] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [333] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [334] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [335] Next 
}
// End Sub
};

// [339] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [340] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [341] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [342] sbStyle.Append( {126} ) 
_sbstyle.append("{");
// [343] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [344] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [345] sbStyle.Append(k).Append( {127} ).Append(v).Append( {128} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [346] Next 
}
// [347] sbStyle.Append( {129} ) 
_sbstyle.append("}");
// [348] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [349] Return mStyle 
return _B._mstyle;
// End Sub
};

// [353] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [354] Dim mxItems As List = BANanoShared.StrParse( {130} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [355] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [356] Dim k As String = BANanoShared.MvField(mt,1, {131} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [357] Dim v As String = BANanoShared.MvField(mt,2, {132} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [358] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [359] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [360] Next 
}
// End Sub
};

// [364] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [365] Dim mxItems As List = BANanoShared.StrParse( {133} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [366] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [367] Dim k As String = BANanoShared.MvField(mt,1, {134} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [368] Dim v As String = BANanoShared.MvField(mt,2, {135} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [369] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [370] Next 
}
// End Sub
};

// [374] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [375] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [376] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [377] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [378] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [379] sbAttr.Append(k).Append( {136} ).Append(v).Append( {137} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [380] Next 
}
// [381] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [382] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [386] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [387] If mElement <> Null Then 
if (_B._melement!=null) {
// [388] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [389] End If 
}
// [390] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [394] public Sub getCaption() As String 
_B.getcaption=function() {
// [395] Return mCaption 
return _B._mcaption;
// End Sub
};

// [398] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [399] AddAttr( {138} , varAlign) 
_B.addattr("align",_varalign,_B);
// [400] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [403] public Sub getAlign() As String 
_B.getalign=function() {
// [404] Return stAlign 
return _B._stalign;
// End Sub
};

// [407] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [408] AddAttr( {139} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [409] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [412] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [413] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [416] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [417] AddAttr( {140} , varBorder) 
_B.addattr("border",_varborder,_B);
// [418] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [421] public Sub getBorder() As String 
_B.getborder=function() {
// [422] Return stBorder 
return _B._stborder;
// End Sub
};

// [425] public Sub setBorderBottom(varBorderBottom As String) 
_B.setborderbottom=function(_varborderbottom) {
// [426] AddAttr( {141} , varBorderBottom) 
_B.addattr("border-bottom",_varborderbottom,_B);
// [427] stBorderBottom = varBorderBottom 
_B._stborderbottom=_varborderbottom;
// End Sub
};

// [430] public Sub getBorderBottom() As String 
_B.getborderbottom=function() {
// [431] Return stBorderBottom 
return _B._stborderbottom;
// End Sub
};

// [434] public Sub setBorderLeft(varBorderLeft As String) 
_B.setborderleft=function(_varborderleft) {
// [435] AddAttr( {142} , varBorderLeft) 
_B.addattr("border-left",_varborderleft,_B);
// [436] stBorderLeft = varBorderLeft 
_B._stborderleft=_varborderleft;
// End Sub
};

// [439] public Sub getBorderLeft() As String 
_B.getborderleft=function() {
// [440] Return stBorderLeft 
return _B._stborderleft;
// End Sub
};

// [443] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [444] AddAttr( {143} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [445] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [448] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [449] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [452] public Sub setBorderRight(varBorderRight As String) 
_B.setborderright=function(_varborderright) {
// [453] AddAttr( {144} , varBorderRight) 
_B.addattr("border-right",_varborderright,_B);
// [454] stBorderRight = varBorderRight 
_B._stborderright=_varborderright;
// End Sub
};

// [457] public Sub getBorderRight() As String 
_B.getborderright=function() {
// [458] Return stBorderRight 
return _B._stborderright;
// End Sub
};

// [461] public Sub setBorderTop(varBorderTop As String) 
_B.setbordertop=function(_varbordertop) {
// [462] AddAttr( {145} , varBorderTop) 
_B.addattr("border-top",_varbordertop,_B);
// [463] stBorderTop = varBorderTop 
_B._stbordertop=_varbordertop;
// End Sub
};

// [466] public Sub getBorderTop() As String 
_B.getbordertop=function() {
// [467] Return stBorderTop 
return _B._stbordertop;
// End Sub
};

// [470] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [471] AddAttr( {146} , varColor) 
_B.addattr("color",_varcolor,_B);
// [472] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [475] public Sub getColor() As String 
_B.getcolor=function() {
// [476] Return stColor 
return _B._stcolor;
// End Sub
};

// [479] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [480] AddAttr( {147} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [481] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [484] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [485] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [488] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [489] AddAttr( {148} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [490] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [493] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [494] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [497] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [498] AddAttr( {149} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [499] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [502] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [503] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [506] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [507] AddAttr( {150} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [508] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [511] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [512] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [515] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [516] AddAttr( {151} , varFontStyle) 
_B.addattr("font-style",_varfontstyle,_B);
// [517] stFontStyle = varFontStyle 
_B._stfontstyle=_varfontstyle;
// End Sub
};

// [520] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [521] Return stFontStyle 
return _B._stfontstyle;
// End Sub
};

// [524] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [525] AddAttr( {152} , varFontWeight) 
_B.addattr("font-weight",_varfontweight,_B);
// [526] stFontWeight = varFontWeight 
_B._stfontweight=_varfontweight;
// End Sub
};

// [529] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [530] Return stFontWeight 
return _B._stfontweight;
// End Sub
};

// [533] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [534] AddAttr( {153} , varHeight) 
_B.addattr("height",_varheight,_B);
// [535] stHeight = varHeight 
_B._stheight=_varheight;
// End Sub
};

// [538] public Sub getHeight() As String 
_B.getheight=function() {
// [539] Return stHeight 
return _B._stheight;
// End Sub
};

// [542] public Sub setHref(varHref As String) 
_B.sethref=function(_varhref) {
// [543] AddAttr( {154} , varHref) 
_B.addattr("href",_varhref,_B);
// [544] stHref = varHref 
_B._sthref=_varhref;
// End Sub
};

// [547] public Sub getHref() As String 
_B.gethref=function() {
// [548] Return stHref 
return _B._sthref;
// End Sub
};

// [551] public Sub setInnerPadding(varInnerPadding As String) 
_B.setinnerpadding=function(_varinnerpadding) {
// [552] AddAttr( {155} , varInnerPadding) 
_B.addattr("inner-padding",_varinnerpadding,_B);
// [553] stInnerPadding = varInnerPadding 
_B._stinnerpadding=_varinnerpadding;
// End Sub
};

// [556] public Sub getInnerPadding() As String 
_B.getinnerpadding=function() {
// [557] Return stInnerPadding 
return _B._stinnerpadding;
// End Sub
};

// [560] public Sub setLineHeight(varLineHeight As String) 
_B.setlineheight=function(_varlineheight) {
// [561] AddAttr( {156} , varLineHeight) 
_B.addattr("line-height",_varlineheight,_B);
// [562] stLineHeight = varLineHeight 
_B._stlineheight=_varlineheight;
// End Sub
};

// [565] public Sub getLineHeight() As String 
_B.getlineheight=function() {
// [566] Return stLineHeight 
return _B._stlineheight;
// End Sub
};

// [569] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [570] AddAttr( {157} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [571] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [574] public Sub getPadding() As String 
_B.getpadding=function() {
// [575] Return stPadding 
return _B._stpadding;
// End Sub
};

// [578] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [579] AddAttr( {158} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [580] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [583] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [584] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [587] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [588] AddAttr( {159} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [589] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [592] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [593] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [596] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [597] AddAttr( {160} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [598] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [601] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [602] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [605] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [606] AddAttr( {161} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [607] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [610] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [611] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [614] public Sub setRel(varRel As String) 
_B.setrel=function(_varrel) {
// [615] AddAttr( {162} , varRel) 
_B.addattr("rel",_varrel,_B);
// [616] stRel = varRel 
_B._strel=_varrel;
// End Sub
};

// [619] public Sub getRel() As String 
_B.getrel=function() {
// [620] Return stRel 
return _B._strel;
// End Sub
};

// [623] public Sub setTarget(varTarget As String) 
_B.settarget=function(_vartarget) {
// [624] AddAttr( {163} , varTarget) 
_B.addattr("target",_vartarget,_B);
// [625] stTarget = varTarget 
_B._sttarget=_vartarget;
// End Sub
};

// [628] public Sub getTarget() As String 
_B.gettarget=function() {
// [629] Return stTarget 
return _B._sttarget;
// End Sub
};

// [632] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [633] AddAttr( {164} , varTextAlign) 
_B.addattr("text-align",_vartextalign,_B);
// [634] stTextAlign = varTextAlign 
_B._sttextalign=_vartextalign;
// End Sub
};

// [637] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [638] Return stTextAlign 
return _B._sttextalign;
// End Sub
};

// [641] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [642] AddAttr( {165} , varTextDecoration) 
_B.addattr("text-decoration",_vartextdecoration,_B);
// [643] stTextDecoration = varTextDecoration 
_B._sttextdecoration=_vartextdecoration;
// End Sub
};

// [646] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [647] Return stTextDecoration 
return _B._sttextdecoration;
// End Sub
};

// [650] public Sub setTextTransform(varTextTransform As String) 
_B.settexttransform=function(_vartexttransform) {
// [651] AddAttr( {166} , varTextTransform) 
_B.addattr("text-transform",_vartexttransform,_B);
// [652] stTextTransform = varTextTransform 
_B._sttexttransform=_vartexttransform;
// End Sub
};

// [655] public Sub getTextTransform() As String 
_B.gettexttransform=function() {
// [656] Return stTextTransform 
return _B._sttexttransform;
// End Sub
};

// [659] public Sub setVerticalAlign(varVerticalAlign As String) 
_B.setverticalalign=function(_varverticalalign) {
// [660] AddAttr( {167} , varVerticalAlign) 
_B.addattr("vertical-align",_varverticalalign,_B);
// [661] stVerticalAlign = varVerticalAlign 
_B._stverticalalign=_varverticalalign;
// End Sub
};

// [664] public Sub getVerticalAlign() As String 
_B.getverticalalign=function() {
// [665] Return stVerticalAlign 
return _B._stverticalalign;
// End Sub
};

// [668] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [669] AddAttr( {168} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [670] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [673] public Sub getWidth() As String 
_B.getwidth=function() {
// [674] Return stWidth 
return _B._stwidth;
// End Sub
};

// [679] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [680] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJCarousel  =========================== */
function banano_bananomjml_mjcarousel() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-carousel";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stbackgroundcolor="";

_B._stborderradius="";

_B._stcssclass="";

_B._sticonwidth="";

_B._stlefticon="";

_B._strighticon="";

_B._sttbborder="";

_B._sttbborderradius="";

_B._sttbhoverbordercolor="";

_B._sttbselectedbordercolor="";

_B._sttbwidth="";

_B._stthumbnails="";

// [56] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [57] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [58] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [59] mCallBack = CallBack 
_B._mcallback=_callback;
// [60] classList.Initialize 
_B._classlist={};
// [61] styleList.Initialize 
_B._stylelist={};
// [62] attributeList.Initialize 
_B._attributelist={};
// [63] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [67] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [68] mTarget = Target 
_B._mtarget=_target;
// [69] If Props <> Null Then 
if (_props!=null) {
// [70] mClasses = Props.Get( {21} ) 
_B._mclasses=_props["Classes"];
// [71] mAttributes = Props.Get( {22} ) 
_B._mattributes=_props["Attributes"];
// [72] mStyle = Props.Get( {23} ) 
_B._mstyle=_props["Style"];
// [73] mCaption = Props.Get( {24} ) 
_B._mcaption=_props["Caption"];
// [74] stAlign = Props.Get( {25} ) 
_B._stalign=_props["Align"];
// [75] stBackgroundColor = Props.Get( {26} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [76] stBorderRadius = Props.Get( {27} ) 
_B._stborderradius=_props["BorderRadius"];
// [77] stCssClass = Props.Get( {28} ) 
_B._stcssclass=_props["CssClass"];
// [78] stIconWidth = Props.Get( {29} ) 
_B._sticonwidth=_props["IconWidth"];
// [79] stLeftIcon = Props.Get( {30} ) 
_B._stlefticon=_props["LeftIcon"];
// [80] stRightIcon = Props.Get( {31} ) 
_B._strighticon=_props["RightIcon"];
// [81] stTbBorder = Props.Get( {32} ) 
_B._sttbborder=_props["TbBorder"];
// [82] stTbBorderRadius = Props.Get( {33} ) 
_B._sttbborderradius=_props["TbBorderRadius"];
// [83] stTbHoverBorderColor = Props.Get( {34} ) 
_B._sttbhoverbordercolor=_props["TbHoverBorderColor"];
// [84] stTbSelectedBorderColor = Props.Get( {35} ) 
_B._sttbselectedbordercolor=_props["TbSelectedBorderColor"];
// [85] stTbWidth = Props.Get( {36} ) 
_B._sttbwidth=_props["TbWidth"];
// [86] stThumbnails = Props.Get( {37} ) 
_B._stthumbnails=_props["Thumbnails"];
// [87] End If 
}
// [89] AddAttr( {38} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [90] AddAttr( {39} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [91] AddAttr( {40} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [92] AddAttr( {41} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [93] AddAttr( {42} , stIconWidth) 
_B.addattr("icon-width",_B._sticonwidth,_B);
// [94] AddAttr( {43} , stLeftIcon) 
_B.addattr("left-icon",_B._stlefticon,_B);
// [95] AddAttr( {44} , stRightIcon) 
_B.addattr("right-icon",_B._strighticon,_B);
// [96] AddAttr( {45} , stTbBorder) 
_B.addattr("tb-border",_B._sttbborder,_B);
// [97] AddAttr( {46} , stTbBorderRadius) 
_B.addattr("tb-border-radius",_B._sttbborderradius,_B);
// [98] AddAttr( {47} , stTbHoverBorderColor) 
_B.addattr("tb-hover-border-color",_B._sttbhoverbordercolor,_B);
// [99] AddAttr( {48} , stTbSelectedBorderColor) 
_B.addattr("tb-selected-border-color",_B._sttbselectedbordercolor,_B);
// [100] AddAttr( {49} , stTbWidth) 
_B.addattr("tb-width",_B._sttbwidth,_B);
// [101] AddAttr( {50} , stThumbnails) 
_B.addattr("thumbnails",_B._stthumbnails,_B);
// [102] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [103] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [104] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [107] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [108] mElement = mTarget.Append(strHTML).Get( {51} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [114] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [116] Dim className As String = BANanoShared.JoinMapKeys(classList, {52} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [117] AddAttr( {53} , className) 
_B.addattr("class",_classname,_B);
// [119] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [120] AddAttr( {54} , styleName) 
_B.addattr("style",_stylename,_B);
// [122] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [123] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [124] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [125] Return rslt 
return _rslt;
// End Sub
};

// [129] Sub AddBR 
_B.addbr=function() {
// [130] sbText.Append( {55} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [134] Sub AddHR 
_B.addhr=function() {
// [135] sbText.Append( {56} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [139] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [140] Return mElement 
return _B._melement;
// End Sub
};

// [144] public Sub getID() As String 
_B.getid=function() {
// [145] Return mName 
return _B._mname;
// End Sub
};

// [149] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [150] mTarget = BANano.GetElement( {57} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [151] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [155] public Sub Remove() 
_B.remove=function() {
// [156] mElement.Remove 
_B._melement.remove();
// [157] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [161] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [162] If mElement <> Null Then 
if (_B._melement!=null) {
// [163] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [164] End If 
}
// End Sub
};

// [168] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [169] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [170] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [171] varClass = varClass.trim 
_varclass=_varclass.trim();
// [172] if varClass = {58} Then Return 
if (_varclass=="") { return ;}
// [173] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [174] Dim mxItems As List = BANanoShared.StrParse( {59} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [175] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [176] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [177] Next 
}
// End Sub
};

// [181] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [182] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [183] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [184] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [185] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [186] varClass = varClass.trim 
_varclass=_varclass.trim();
// [187] if varClass = {60} Then Return 
if (_varclass=="") { return ;}
// [188] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [189] Dim mxItems As List = BANanoShared.StrParse( {61} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [190] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [191] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [192] Next 
}
// End Sub
};

// [196] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [197] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [198] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [199] If mElement <> Null Then 
if (_B._melement!=null) {
// [200] Dim aStyle As Map = CreateMap() 
_astyle={};
// [201] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [202] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [203] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [204] End If 
}
// [205] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [209] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [210] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [211] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [213] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [214] If varValue = True Then 
if (_varvalue==true) {
// [215] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [216] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [217] End If 
}
// [218] Else 
} else {
// [220] If varValue.StartsWith( {62} ) Then 
if (_varvalue.startsWith(":")) {
// [221] If varValue.StartsWith( {63} ) Then 
if (_varvalue.startsWith("$")) {
// [222] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [223] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [224] Else 
} else {
// [225] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [226] If rname.Contains( {64} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [227] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [228] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [229] End If 
}
// [230] Else 
} else {
// [232] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [233] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [234] Select Case varProp 
switch ("" + _varprop) {
// [235] Case {65} , {66} , {67} , {68} , {69} , {70} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [236] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [237] End Select 
break;
}
// [238] End If 
}
// [239] End If 
}
// [240] Return 
return;
// End Sub
};

// [244] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [245] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [246] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [247] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [248] sbClass.Append(k).Append( {71} ) 
_sbclass.append(_k).append(" ");
// [249] Next 
}
// [250] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [251] Return mClasses 
return _B._mclasses;
// End Sub
};

// [255] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [256] If mElement <> Null Then 
if (_B._melement!=null) {
// [257] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [258] End If 
}
// [259] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [260] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [261] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [262] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [263] Next 
}
// End Sub
};

// [267] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [268] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [269] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [270] sbStyle.Append( {72} ) 
_sbstyle.append("{");
// [271] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [272] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [273] sbStyle.Append(k).Append( {73} ).Append(v).Append( {74} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [274] Next 
}
// [275] sbStyle.Append( {75} ) 
_sbstyle.append("}");
// [276] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [277] Return mStyle 
return _B._mstyle;
// End Sub
};

// [281] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [282] Dim mxItems As List = BANanoShared.StrParse( {76} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [283] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [284] Dim k As String = BANanoShared.MvField(mt,1, {77} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [285] Dim v As String = BANanoShared.MvField(mt,2, {78} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [286] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [287] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [288] Next 
}
// End Sub
};

// [292] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [293] Dim mxItems As List = BANanoShared.StrParse( {79} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [294] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [295] Dim k As String = BANanoShared.MvField(mt,1, {80} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [296] Dim v As String = BANanoShared.MvField(mt,2, {81} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [297] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [298] Next 
}
// End Sub
};

// [302] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [303] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [304] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [305] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [306] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [307] sbAttr.Append(k).Append( {82} ).Append(v).Append( {83} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [308] Next 
}
// [309] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [310] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [314] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [315] If mElement <> Null Then 
if (_B._melement!=null) {
// [316] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [317] End If 
}
// [318] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [322] public Sub getCaption() As String 
_B.getcaption=function() {
// [323] Return mCaption 
return _B._mcaption;
// End Sub
};

// [326] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [327] AddAttr( {84} , varAlign) 
_B.addattr("align",_varalign,_B);
// [328] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [331] public Sub getAlign() As String 
_B.getalign=function() {
// [332] Return stAlign 
return _B._stalign;
// End Sub
};

// [335] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [336] AddAttr( {85} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [337] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [340] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [341] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [344] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [345] AddAttr( {86} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [346] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [349] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [350] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [353] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [354] AddAttr( {87} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [355] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [358] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [359] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [362] public Sub setIconWidth(varIconWidth As String) 
_B.seticonwidth=function(_variconwidth) {
// [363] AddAttr( {88} , varIconWidth) 
_B.addattr("icon-width",_variconwidth,_B);
// [364] stIconWidth = varIconWidth 
_B._sticonwidth=_variconwidth;
// End Sub
};

// [367] public Sub getIconWidth() As String 
_B.geticonwidth=function() {
// [368] Return stIconWidth 
return _B._sticonwidth;
// End Sub
};

// [371] public Sub setLeftIcon(varLeftIcon As String) 
_B.setlefticon=function(_varlefticon) {
// [372] AddAttr( {89} , varLeftIcon) 
_B.addattr("left-icon",_varlefticon,_B);
// [373] stLeftIcon = varLeftIcon 
_B._stlefticon=_varlefticon;
// End Sub
};

// [376] public Sub getLeftIcon() As String 
_B.getlefticon=function() {
// [377] Return stLeftIcon 
return _B._stlefticon;
// End Sub
};

// [380] public Sub setRightIcon(varRightIcon As String) 
_B.setrighticon=function(_varrighticon) {
// [381] AddAttr( {90} , varRightIcon) 
_B.addattr("right-icon",_varrighticon,_B);
// [382] stRightIcon = varRightIcon 
_B._strighticon=_varrighticon;
// End Sub
};

// [385] public Sub getRightIcon() As String 
_B.getrighticon=function() {
// [386] Return stRightIcon 
return _B._strighticon;
// End Sub
};

// [389] public Sub setTbBorder(varTbBorder As String) 
_B.settbborder=function(_vartbborder) {
// [390] AddAttr( {91} , varTbBorder) 
_B.addattr("tb-border",_vartbborder,_B);
// [391] stTbBorder = varTbBorder 
_B._sttbborder=_vartbborder;
// End Sub
};

// [394] public Sub getTbBorder() As String 
_B.gettbborder=function() {
// [395] Return stTbBorder 
return _B._sttbborder;
// End Sub
};

// [398] public Sub setTbBorderRadius(varTbBorderRadius As String) 
_B.settbborderradius=function(_vartbborderradius) {
// [399] AddAttr( {92} , varTbBorderRadius) 
_B.addattr("tb-border-radius",_vartbborderradius,_B);
// [400] stTbBorderRadius = varTbBorderRadius 
_B._sttbborderradius=_vartbborderradius;
// End Sub
};

// [403] public Sub getTbBorderRadius() As String 
_B.gettbborderradius=function() {
// [404] Return stTbBorderRadius 
return _B._sttbborderradius;
// End Sub
};

// [407] public Sub setTbHoverBorderColor(varTbHoverBorderColor As String) 
_B.settbhoverbordercolor=function(_vartbhoverbordercolor) {
// [408] AddAttr( {93} , varTbHoverBorderColor) 
_B.addattr("tb-hover-border-color",_vartbhoverbordercolor,_B);
// [409] stTbHoverBorderColor = varTbHoverBorderColor 
_B._sttbhoverbordercolor=_vartbhoverbordercolor;
// End Sub
};

// [412] public Sub getTbHoverBorderColor() As String 
_B.gettbhoverbordercolor=function() {
// [413] Return stTbHoverBorderColor 
return _B._sttbhoverbordercolor;
// End Sub
};

// [416] public Sub setTbSelectedBorderColor(varTbSelectedBorderColor As String) 
_B.settbselectedbordercolor=function(_vartbselectedbordercolor) {
// [417] AddAttr( {94} , varTbSelectedBorderColor) 
_B.addattr("tb-selected-border-color",_vartbselectedbordercolor,_B);
// [418] stTbSelectedBorderColor = varTbSelectedBorderColor 
_B._sttbselectedbordercolor=_vartbselectedbordercolor;
// End Sub
};

// [421] public Sub getTbSelectedBorderColor() As String 
_B.gettbselectedbordercolor=function() {
// [422] Return stTbSelectedBorderColor 
return _B._sttbselectedbordercolor;
// End Sub
};

// [425] public Sub setTbWidth(varTbWidth As String) 
_B.settbwidth=function(_vartbwidth) {
// [426] AddAttr( {95} , varTbWidth) 
_B.addattr("tb-width",_vartbwidth,_B);
// [427] stTbWidth = varTbWidth 
_B._sttbwidth=_vartbwidth;
// End Sub
};

// [430] public Sub getTbWidth() As String 
_B.gettbwidth=function() {
// [431] Return stTbWidth 
return _B._sttbwidth;
// End Sub
};

// [434] public Sub setThumbnails(varThumbnails As String) 
_B.setthumbnails=function(_varthumbnails) {
// [435] AddAttr( {96} , varThumbnails) 
_B.addattr("thumbnails",_varthumbnails,_B);
// [436] stThumbnails = varThumbnails 
_B._stthumbnails=_varthumbnails;
// End Sub
};

// [439] public Sub getThumbnails() As String 
_B.getthumbnails=function() {
// [440] Return stThumbnails 
return _B._stthumbnails;
// End Sub
};

// [445] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [446] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJCarouselImage  =========================== */
function banano_bananomjml_mjcarouselimage() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-carousel-image";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalt="";

_B._stcssclass="";

_B._sthref="";

_B._strel="";

_B._stsrc="";

_B._sttarget="";

_B._stthumbnailssrc="";

_B._sttitle="";

// [46] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [47] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [48] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [49] mCallBack = CallBack 
_B._mcallback=_callback;
// [50] classList.Initialize 
_B._classlist={};
// [51] styleList.Initialize 
_B._stylelist={};
// [52] attributeList.Initialize 
_B._attributelist={};
// [53] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [57] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [58] mTarget = Target 
_B._mtarget=_target;
// [59] If Props <> Null Then 
if (_props!=null) {
// [60] mClasses = Props.Get( {16} ) 
_B._mclasses=_props["Classes"];
// [61] mAttributes = Props.Get( {17} ) 
_B._mattributes=_props["Attributes"];
// [62] mStyle = Props.Get( {18} ) 
_B._mstyle=_props["Style"];
// [63] mCaption = Props.Get( {19} ) 
_B._mcaption=_props["Caption"];
// [64] stAlt = Props.Get( {20} ) 
_B._stalt=_props["Alt"];
// [65] stCssClass = Props.Get( {21} ) 
_B._stcssclass=_props["CssClass"];
// [66] stHref = Props.Get( {22} ) 
_B._sthref=_props["Href"];
// [67] stRel = Props.Get( {23} ) 
_B._strel=_props["Rel"];
// [68] stSrc = Props.Get( {24} ) 
_B._stsrc=_props["Src"];
// [69] stTarget = Props.Get( {25} ) 
_B._sttarget=_props["Target"];
// [70] stThumbnailsSrc = Props.Get( {26} ) 
_B._stthumbnailssrc=_props["ThumbnailsSrc"];
// [71] stTitle = Props.Get( {27} ) 
_B._sttitle=_props["Title"];
// [72] End If 
}
// [74] AddAttr( {28} , stAlt) 
_B.addattr("alt",_B._stalt,_B);
// [75] AddAttr( {29} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [76] AddAttr( {30} , stHref) 
_B.addattr("href",_B._sthref,_B);
// [77] AddAttr( {31} , stRel) 
_B.addattr("rel",_B._strel,_B);
// [78] AddAttr( {32} , stSrc) 
_B.addattr("src",_B._stsrc,_B);
// [79] AddAttr( {33} , stTarget) 
_B.addattr("target",_B._sttarget,_B);
// [80] AddAttr( {34} , stThumbnailsSrc) 
_B.addattr("thumbnails-src",_B._stthumbnailssrc,_B);
// [81] AddAttr( {35} , stTitle) 
_B.addattr("title",_B._sttitle,_B);
// [82] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [83] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [84] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [87] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [88] mElement = mTarget.Append(strHTML).Get( {36} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [94] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [96] Dim className As String = BANanoShared.JoinMapKeys(classList, {37} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [97] AddAttr( {38} , className) 
_B.addattr("class",_classname,_B);
// [99] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [100] AddAttr( {39} , styleName) 
_B.addattr("style",_stylename,_B);
// [102] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [103] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [104] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [105] Return rslt 
return _rslt;
// End Sub
};

// [109] Sub AddBR 
_B.addbr=function() {
// [110] sbText.Append( {40} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [114] Sub AddHR 
_B.addhr=function() {
// [115] sbText.Append( {41} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [119] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [120] Return mElement 
return _B._melement;
// End Sub
};

// [124] public Sub getID() As String 
_B.getid=function() {
// [125] Return mName 
return _B._mname;
// End Sub
};

// [129] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [130] mTarget = BANano.GetElement( {42} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [131] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [135] public Sub Remove() 
_B.remove=function() {
// [136] mElement.Remove 
_B._melement.remove();
// [137] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [141] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [142] If mElement <> Null Then 
if (_B._melement!=null) {
// [143] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [144] End If 
}
// End Sub
};

// [148] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [149] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [150] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [151] varClass = varClass.trim 
_varclass=_varclass.trim();
// [152] if varClass = {43} Then Return 
if (_varclass=="") { return ;}
// [153] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [154] Dim mxItems As List = BANanoShared.StrParse( {44} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [155] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [156] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [157] Next 
}
// End Sub
};

// [161] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [162] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [163] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [164] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [165] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [166] varClass = varClass.trim 
_varclass=_varclass.trim();
// [167] if varClass = {45} Then Return 
if (_varclass=="") { return ;}
// [168] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [169] Dim mxItems As List = BANanoShared.StrParse( {46} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [170] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [171] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [172] Next 
}
// End Sub
};

// [176] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [177] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [178] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [179] If mElement <> Null Then 
if (_B._melement!=null) {
// [180] Dim aStyle As Map = CreateMap() 
_astyle={};
// [181] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [182] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [183] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [184] End If 
}
// [185] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [189] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [190] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [191] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [193] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [194] If varValue = True Then 
if (_varvalue==true) {
// [195] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [196] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [197] End If 
}
// [198] Else 
} else {
// [200] If varValue.StartsWith( {47} ) Then 
if (_varvalue.startsWith(":")) {
// [201] If varValue.StartsWith( {48} ) Then 
if (_varvalue.startsWith("$")) {
// [202] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [203] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [204] Else 
} else {
// [205] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [206] If rname.Contains( {49} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [207] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [208] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [209] End If 
}
// [210] Else 
} else {
// [212] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [213] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [214] Select Case varProp 
switch ("" + _varprop) {
// [215] Case {50} , {51} , {52} , {53} , {54} , {55} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [216] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [217] End Select 
break;
}
// [218] End If 
}
// [219] End If 
}
// [220] Return 
return;
// End Sub
};

// [224] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [225] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [226] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [227] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [228] sbClass.Append(k).Append( {56} ) 
_sbclass.append(_k).append(" ");
// [229] Next 
}
// [230] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [231] Return mClasses 
return _B._mclasses;
// End Sub
};

// [235] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [236] If mElement <> Null Then 
if (_B._melement!=null) {
// [237] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [238] End If 
}
// [239] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [240] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [241] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [242] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [243] Next 
}
// End Sub
};

// [247] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [248] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [249] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [250] sbStyle.Append( {57} ) 
_sbstyle.append("{");
// [251] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [252] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [253] sbStyle.Append(k).Append( {58} ).Append(v).Append( {59} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [254] Next 
}
// [255] sbStyle.Append( {60} ) 
_sbstyle.append("}");
// [256] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [257] Return mStyle 
return _B._mstyle;
// End Sub
};

// [261] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [262] Dim mxItems As List = BANanoShared.StrParse( {61} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [263] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [264] Dim k As String = BANanoShared.MvField(mt,1, {62} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [265] Dim v As String = BANanoShared.MvField(mt,2, {63} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [266] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [267] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [268] Next 
}
// End Sub
};

// [272] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [273] Dim mxItems As List = BANanoShared.StrParse( {64} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [274] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [275] Dim k As String = BANanoShared.MvField(mt,1, {65} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [276] Dim v As String = BANanoShared.MvField(mt,2, {66} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [277] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [278] Next 
}
// End Sub
};

// [282] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [283] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [284] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [285] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [286] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [287] sbAttr.Append(k).Append( {67} ).Append(v).Append( {68} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [288] Next 
}
// [289] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [290] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [294] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [295] If mElement <> Null Then 
if (_B._melement!=null) {
// [296] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [297] End If 
}
// [298] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [302] public Sub getCaption() As String 
_B.getcaption=function() {
// [303] Return mCaption 
return _B._mcaption;
// End Sub
};

// [306] public Sub setAlt(varAlt As String) 
_B.setalt=function(_varalt) {
// [307] AddAttr( {69} , varAlt) 
_B.addattr("alt",_varalt,_B);
// [308] stAlt = varAlt 
_B._stalt=_varalt;
// End Sub
};

// [311] public Sub getAlt() As String 
_B.getalt=function() {
// [312] Return stAlt 
return _B._stalt;
// End Sub
};

// [315] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [316] AddAttr( {70} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [317] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [320] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [321] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [324] public Sub setHref(varHref As String) 
_B.sethref=function(_varhref) {
// [325] AddAttr( {71} , varHref) 
_B.addattr("href",_varhref,_B);
// [326] stHref = varHref 
_B._sthref=_varhref;
// End Sub
};

// [329] public Sub getHref() As String 
_B.gethref=function() {
// [330] Return stHref 
return _B._sthref;
// End Sub
};

// [333] public Sub setRel(varRel As String) 
_B.setrel=function(_varrel) {
// [334] AddAttr( {72} , varRel) 
_B.addattr("rel",_varrel,_B);
// [335] stRel = varRel 
_B._strel=_varrel;
// End Sub
};

// [338] public Sub getRel() As String 
_B.getrel=function() {
// [339] Return stRel 
return _B._strel;
// End Sub
};

// [342] public Sub setSrc(varSrc As String) 
_B.setsrc=function(_varsrc) {
// [343] AddAttr( {73} , varSrc) 
_B.addattr("src",_varsrc,_B);
// [344] stSrc = varSrc 
_B._stsrc=_varsrc;
// End Sub
};

// [347] public Sub getSrc() As String 
_B.getsrc=function() {
// [348] Return stSrc 
return _B._stsrc;
// End Sub
};

// [351] public Sub setTarget(varTarget As String) 
_B.settarget=function(_vartarget) {
// [352] AddAttr( {74} , varTarget) 
_B.addattr("target",_vartarget,_B);
// [353] stTarget = varTarget 
_B._sttarget=_vartarget;
// End Sub
};

// [356] public Sub getTarget() As String 
_B.gettarget=function() {
// [357] Return stTarget 
return _B._sttarget;
// End Sub
};

// [360] public Sub setThumbnailsSrc(varThumbnailsSrc As String) 
_B.setthumbnailssrc=function(_varthumbnailssrc) {
// [361] AddAttr( {75} , varThumbnailsSrc) 
_B.addattr("thumbnails-src",_varthumbnailssrc,_B);
// [362] stThumbnailsSrc = varThumbnailsSrc 
_B._stthumbnailssrc=_varthumbnailssrc;
// End Sub
};

// [365] public Sub getThumbnailsSrc() As String 
_B.getthumbnailssrc=function() {
// [366] Return stThumbnailsSrc 
return _B._stthumbnailssrc;
// End Sub
};

// [369] public Sub setTitle(varTitle As String) 
_B.settitle=function(_vartitle) {
// [370] AddAttr( {76} , varTitle) 
_B.addattr("title",_vartitle,_B);
// [371] stTitle = varTitle 
_B._sttitle=_vartitle;
// End Sub
};

// [374] public Sub getTitle() As String 
_B.gettitle=function() {
// [375] Return stTitle 
return _B._sttitle;
// End Sub
};

// [380] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [381] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJClass  =========================== */
function banano_bananomjml_mjclass() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-class";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stcolor="";

_B._stfontcolor="";

_B._stfontsize="";

_B._stname="";

// [38] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [39] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [40] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [41] mCallBack = CallBack 
_B._mcallback=_callback;
// [42] classList.Initialize 
_B._classlist={};
// [43] styleList.Initialize 
_B._stylelist={};
// [44] attributeList.Initialize 
_B._attributelist={};
// [45] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [49] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [50] mTarget = Target 
_B._mtarget=_target;
// [51] If Props <> Null Then 
if (_props!=null) {
// [52] mClasses = Props.Get( {12} ) 
_B._mclasses=_props["Classes"];
// [53] mAttributes = Props.Get( {13} ) 
_B._mattributes=_props["Attributes"];
// [54] mStyle = Props.Get( {14} ) 
_B._mstyle=_props["Style"];
// [55] mCaption = Props.Get( {15} ) 
_B._mcaption=_props["Caption"];
// [56] stColor = Props.Get( {16} ) 
_B._stcolor=_props["Color"];
// [57] stFontColor = Props.Get( {17} ) 
_B._stfontcolor=_props["FontColor"];
// [58] stFontSize = Props.Get( {18} ) 
_B._stfontsize=_props["FontSize"];
// [59] stName = Props.Get( {19} ) 
_B._stname=_props["Name"];
// [60] End If 
}
// [62] AddAttr( {20} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [63] AddAttr( {21} , stFontColor) 
_B.addattr("font-color",_B._stfontcolor,_B);
// [64] AddAttr( {22} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [65] AddAttr( {23} , stName) 
_B.addattr("name",_B._stname,_B);
// [66] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [67] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [68] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [71] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [72] mElement = mTarget.Append(strHTML).Get( {24} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [78] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [80] Dim className As String = BANanoShared.JoinMapKeys(classList, {25} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [81] AddAttr( {26} , className) 
_B.addattr("class",_classname,_B);
// [83] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [84] AddAttr( {27} , styleName) 
_B.addattr("style",_stylename,_B);
// [86] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [87] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [88] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [89] Return rslt 
return _rslt;
// End Sub
};

// [93] Sub AddBR 
_B.addbr=function() {
// [94] sbText.Append( {28} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [98] Sub AddHR 
_B.addhr=function() {
// [99] sbText.Append( {29} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [103] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [104] Return mElement 
return _B._melement;
// End Sub
};

// [108] public Sub getID() As String 
_B.getid=function() {
// [109] Return mName 
return _B._mname;
// End Sub
};

// [113] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [114] mTarget = BANano.GetElement( {30} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [115] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [119] public Sub Remove() 
_B.remove=function() {
// [120] mElement.Remove 
_B._melement.remove();
// [121] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [125] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [126] If mElement <> Null Then 
if (_B._melement!=null) {
// [127] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [128] End If 
}
// End Sub
};

// [132] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [133] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [134] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [135] varClass = varClass.trim 
_varclass=_varclass.trim();
// [136] if varClass = {31} Then Return 
if (_varclass=="") { return ;}
// [137] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [138] Dim mxItems As List = BANanoShared.StrParse( {32} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [139] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [140] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [141] Next 
}
// End Sub
};

// [145] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [146] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [147] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [148] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [149] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [150] varClass = varClass.trim 
_varclass=_varclass.trim();
// [151] if varClass = {33} Then Return 
if (_varclass=="") { return ;}
// [152] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [153] Dim mxItems As List = BANanoShared.StrParse( {34} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [154] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [155] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [156] Next 
}
// End Sub
};

// [160] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [161] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [162] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [163] If mElement <> Null Then 
if (_B._melement!=null) {
// [164] Dim aStyle As Map = CreateMap() 
_astyle={};
// [165] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [166] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [167] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [168] End If 
}
// [169] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [173] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [174] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [175] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [177] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [178] If varValue = True Then 
if (_varvalue==true) {
// [179] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] End If 
}
// [182] Else 
} else {
// [184] If varValue.StartsWith( {35} ) Then 
if (_varvalue.startsWith(":")) {
// [185] If varValue.StartsWith( {36} ) Then 
if (_varvalue.startsWith("$")) {
// [186] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [187] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [188] Else 
} else {
// [189] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [190] If rname.Contains( {37} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [191] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [192] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [193] End If 
}
// [194] Else 
} else {
// [196] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [197] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [198] Select Case varProp 
switch ("" + _varprop) {
// [199] Case {38} , {39} , {40} , {41} , {42} , {43} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [200] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [201] End Select 
break;
}
// [202] End If 
}
// [203] End If 
}
// [204] Return 
return;
// End Sub
};

// [208] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [209] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [210] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [211] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [212] sbClass.Append(k).Append( {44} ) 
_sbclass.append(_k).append(" ");
// [213] Next 
}
// [214] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [215] Return mClasses 
return _B._mclasses;
// End Sub
};

// [219] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [220] If mElement <> Null Then 
if (_B._melement!=null) {
// [221] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [222] End If 
}
// [223] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [224] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [225] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [226] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [227] Next 
}
// End Sub
};

// [231] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [232] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [233] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [234] sbStyle.Append( {45} ) 
_sbstyle.append("{");
// [235] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [236] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [237] sbStyle.Append(k).Append( {46} ).Append(v).Append( {47} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [238] Next 
}
// [239] sbStyle.Append( {48} ) 
_sbstyle.append("}");
// [240] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [241] Return mStyle 
return _B._mstyle;
// End Sub
};

// [245] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [246] Dim mxItems As List = BANanoShared.StrParse( {49} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [247] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [248] Dim k As String = BANanoShared.MvField(mt,1, {50} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [249] Dim v As String = BANanoShared.MvField(mt,2, {51} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [250] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [251] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [252] Next 
}
// End Sub
};

// [256] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [257] Dim mxItems As List = BANanoShared.StrParse( {52} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [258] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [259] Dim k As String = BANanoShared.MvField(mt,1, {53} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [260] Dim v As String = BANanoShared.MvField(mt,2, {54} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [261] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [262] Next 
}
// End Sub
};

// [266] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [267] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [268] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [269] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [270] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [271] sbAttr.Append(k).Append( {55} ).Append(v).Append( {56} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [272] Next 
}
// [273] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [274] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [278] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [279] If mElement <> Null Then 
if (_B._melement!=null) {
// [280] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [281] End If 
}
// [282] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [286] public Sub getCaption() As String 
_B.getcaption=function() {
// [287] Return mCaption 
return _B._mcaption;
// End Sub
};

// [290] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [291] AddAttr( {57} , varColor) 
_B.addattr("color",_varcolor,_B);
// [292] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [295] public Sub getColor() As String 
_B.getcolor=function() {
// [296] Return stColor 
return _B._stcolor;
// End Sub
};

// [299] public Sub setFontColor(varFontColor As String) 
_B.setfontcolor=function(_varfontcolor) {
// [300] AddAttr( {58} , varFontColor) 
_B.addattr("font-color",_varfontcolor,_B);
// [301] stFontColor = varFontColor 
_B._stfontcolor=_varfontcolor;
// End Sub
};

// [304] public Sub getFontColor() As String 
_B.getfontcolor=function() {
// [305] Return stFontColor 
return _B._stfontcolor;
// End Sub
};

// [308] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [309] AddAttr( {59} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [310] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [313] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [314] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [317] public Sub setName(varName As String) 
_B.setname=function(_varname) {
// [318] AddAttr( {60} , varName) 
_B.addattr("name",_varname,_B);
// [319] stName = varName 
_B._stname=_varname;
// End Sub
};

// [322] public Sub getName() As String 
_B.getname=function() {
// [323] Return stName 
return _B._stname;
// End Sub
};

// [328] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [329] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJColumn  =========================== */
function banano_bananomjml_mjcolumn() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-column";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stborder="";

_B._stborderbottom="";

_B._stborderleft="";

_B._stborderradius="";

_B._stborderright="";

_B._stbordertop="";

_B._stcssclass="";

_B._stinnerbackgroundcolor="";

_B._stinnerborder="";

_B._stinnerborderbottom="";

_B._stinnerborderleft="";

_B._stinnerborderradius="";

_B._stinnerborderright="";

_B._stinnerbordertop="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._stverticalalign="";

_B._stwidth="";

// [74] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [75] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [76] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [77] mCallBack = CallBack 
_B._mcallback=_callback;
// [78] classList.Initialize 
_B._classlist={};
// [79] styleList.Initialize 
_B._stylelist={};
// [80] attributeList.Initialize 
_B._attributelist={};
// [81] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [85] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [86] mTarget = Target 
_B._mtarget=_target;
// [87] If Props <> Null Then 
if (_props!=null) {
// [88] mClasses = Props.Get( {30} ) 
_B._mclasses=_props["Classes"];
// [89] mAttributes = Props.Get( {31} ) 
_B._mattributes=_props["Attributes"];
// [90] mStyle = Props.Get( {32} ) 
_B._mstyle=_props["Style"];
// [91] mCaption = Props.Get( {33} ) 
_B._mcaption=_props["Caption"];
// [92] stBackgroundColor = Props.Get( {34} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [93] stBorder = Props.Get( {35} ) 
_B._stborder=_props["Border"];
// [94] stBorderBottom = Props.Get( {36} ) 
_B._stborderbottom=_props["BorderBottom"];
// [95] stBorderLeft = Props.Get( {37} ) 
_B._stborderleft=_props["BorderLeft"];
// [96] stBorderRadius = Props.Get( {38} ) 
_B._stborderradius=_props["BorderRadius"];
// [97] stBorderRight = Props.Get( {39} ) 
_B._stborderright=_props["BorderRight"];
// [98] stBorderTop = Props.Get( {40} ) 
_B._stbordertop=_props["BorderTop"];
// [99] stCssClass = Props.Get( {41} ) 
_B._stcssclass=_props["CssClass"];
// [100] stInnerBackgroundColor = Props.Get( {42} ) 
_B._stinnerbackgroundcolor=_props["InnerBackgroundColor"];
// [101] stInnerBorder = Props.Get( {43} ) 
_B._stinnerborder=_props["InnerBorder"];
// [102] stInnerBorderBottom = Props.Get( {44} ) 
_B._stinnerborderbottom=_props["InnerBorderBottom"];
// [103] stInnerBorderLeft = Props.Get( {45} ) 
_B._stinnerborderleft=_props["InnerBorderLeft"];
// [104] stInnerBorderRadius = Props.Get( {46} ) 
_B._stinnerborderradius=_props["InnerBorderRadius"];
// [105] stInnerBorderRight = Props.Get( {47} ) 
_B._stinnerborderright=_props["InnerBorderRight"];
// [106] stInnerBorderTop = Props.Get( {48} ) 
_B._stinnerbordertop=_props["InnerBorderTop"];
// [107] stPadding = Props.Get( {49} ) 
_B._stpadding=_props["Padding"];
// [108] stPaddingBottom = Props.Get( {50} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [109] stPaddingLeft = Props.Get( {51} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [110] stPaddingRight = Props.Get( {52} ) 
_B._stpaddingright=_props["PaddingRight"];
// [111] stPaddingTop = Props.Get( {53} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [112] stVerticalAlign = Props.Get( {54} ) 
_B._stverticalalign=_props["VerticalAlign"];
// [113] stWidth = Props.Get( {55} ) 
_B._stwidth=_props["Width"];
// [114] End If 
}
// [116] AddAttr( {56} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [117] AddAttr( {57} , stBorder) 
_B.addattr("border",_B._stborder,_B);
// [118] AddAttr( {58} , stBorderBottom) 
_B.addattr("border-bottom",_B._stborderbottom,_B);
// [119] AddAttr( {59} , stBorderLeft) 
_B.addattr("border-left",_B._stborderleft,_B);
// [120] AddAttr( {60} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [121] AddAttr( {61} , stBorderRight) 
_B.addattr("border-right",_B._stborderright,_B);
// [122] AddAttr( {62} , stBorderTop) 
_B.addattr("border-top",_B._stbordertop,_B);
// [123] AddAttr( {63} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [124] AddAttr( {64} , stInnerBackgroundColor) 
_B.addattr("inner-background-color",_B._stinnerbackgroundcolor,_B);
// [125] AddAttr( {65} , stInnerBorder) 
_B.addattr("inner-border",_B._stinnerborder,_B);
// [126] AddAttr( {66} , stInnerBorderBottom) 
_B.addattr("inner-border-bottom",_B._stinnerborderbottom,_B);
// [127] AddAttr( {67} , stInnerBorderLeft) 
_B.addattr("inner-border-left",_B._stinnerborderleft,_B);
// [128] AddAttr( {68} , stInnerBorderRadius) 
_B.addattr("inner-border-radius",_B._stinnerborderradius,_B);
// [129] AddAttr( {69} , stInnerBorderRight) 
_B.addattr("inner-border-right",_B._stinnerborderright,_B);
// [130] AddAttr( {70} , stInnerBorderTop) 
_B.addattr("inner-border-top",_B._stinnerbordertop,_B);
// [131] AddAttr( {71} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [132] AddAttr( {72} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [133] AddAttr( {73} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [134] AddAttr( {74} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [135] AddAttr( {75} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [136] AddAttr( {76} , stVerticalAlign) 
_B.addattr("vertical-align",_B._stverticalalign,_B);
// [137] AddAttr( {77} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [138] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [139] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [140] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [143] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [144] mElement = mTarget.Append(strHTML).Get( {78} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [150] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [152] Dim className As String = BANanoShared.JoinMapKeys(classList, {79} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [153] AddAttr( {80} , className) 
_B.addattr("class",_classname,_B);
// [155] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [156] AddAttr( {81} , styleName) 
_B.addattr("style",_stylename,_B);
// [158] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [159] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [160] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [161] Return rslt 
return _rslt;
// End Sub
};

// [165] Sub AddBR 
_B.addbr=function() {
// [166] sbText.Append( {82} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [170] Sub AddHR 
_B.addhr=function() {
// [171] sbText.Append( {83} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [175] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [176] Return mElement 
return _B._melement;
// End Sub
};

// [180] public Sub getID() As String 
_B.getid=function() {
// [181] Return mName 
return _B._mname;
// End Sub
};

// [185] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [186] mTarget = BANano.GetElement( {84} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [187] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [191] public Sub Remove() 
_B.remove=function() {
// [192] mElement.Remove 
_B._melement.remove();
// [193] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [197] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [198] If mElement <> Null Then 
if (_B._melement!=null) {
// [199] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [200] End If 
}
// End Sub
};

// [204] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [205] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [206] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [207] varClass = varClass.trim 
_varclass=_varclass.trim();
// [208] if varClass = {85} Then Return 
if (_varclass=="") { return ;}
// [209] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [210] Dim mxItems As List = BANanoShared.StrParse( {86} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [211] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [212] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [213] Next 
}
// End Sub
};

// [217] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [218] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [219] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [220] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [221] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [222] varClass = varClass.trim 
_varclass=_varclass.trim();
// [223] if varClass = {87} Then Return 
if (_varclass=="") { return ;}
// [224] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [225] Dim mxItems As List = BANanoShared.StrParse( {88} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [226] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [227] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [228] Next 
}
// End Sub
};

// [232] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [233] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [234] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [235] If mElement <> Null Then 
if (_B._melement!=null) {
// [236] Dim aStyle As Map = CreateMap() 
_astyle={};
// [237] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [238] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [239] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [240] End If 
}
// [241] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [245] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [246] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [247] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [249] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [250] If varValue = True Then 
if (_varvalue==true) {
// [251] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [252] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [253] End If 
}
// [254] Else 
} else {
// [256] If varValue.StartsWith( {89} ) Then 
if (_varvalue.startsWith(":")) {
// [257] If varValue.StartsWith( {90} ) Then 
if (_varvalue.startsWith("$")) {
// [258] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [259] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [260] Else 
} else {
// [261] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [262] If rname.Contains( {91} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [263] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [264] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [265] End If 
}
// [266] Else 
} else {
// [268] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [269] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [270] Select Case varProp 
switch ("" + _varprop) {
// [271] Case {92} , {93} , {94} , {95} , {96} , {97} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [272] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [273] End Select 
break;
}
// [274] End If 
}
// [275] End If 
}
// [276] Return 
return;
// End Sub
};

// [280] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [281] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [282] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [283] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [284] sbClass.Append(k).Append( {98} ) 
_sbclass.append(_k).append(" ");
// [285] Next 
}
// [286] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [287] Return mClasses 
return _B._mclasses;
// End Sub
};

// [291] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [292] If mElement <> Null Then 
if (_B._melement!=null) {
// [293] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [294] End If 
}
// [295] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [296] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [297] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [298] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [299] Next 
}
// End Sub
};

// [303] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [304] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [305] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [306] sbStyle.Append( {99} ) 
_sbstyle.append("{");
// [307] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [308] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [309] sbStyle.Append(k).Append( {100} ).Append(v).Append( {101} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [310] Next 
}
// [311] sbStyle.Append( {102} ) 
_sbstyle.append("}");
// [312] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [313] Return mStyle 
return _B._mstyle;
// End Sub
};

// [317] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [318] Dim mxItems As List = BANanoShared.StrParse( {103} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [319] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [320] Dim k As String = BANanoShared.MvField(mt,1, {104} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [321] Dim v As String = BANanoShared.MvField(mt,2, {105} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [322] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [323] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [324] Next 
}
// End Sub
};

// [328] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [329] Dim mxItems As List = BANanoShared.StrParse( {106} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [330] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [331] Dim k As String = BANanoShared.MvField(mt,1, {107} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [332] Dim v As String = BANanoShared.MvField(mt,2, {108} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [333] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [334] Next 
}
// End Sub
};

// [338] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [339] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [340] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [341] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [342] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [343] sbAttr.Append(k).Append( {109} ).Append(v).Append( {110} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [344] Next 
}
// [345] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [346] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [350] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [351] If mElement <> Null Then 
if (_B._melement!=null) {
// [352] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [353] End If 
}
// [354] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [358] public Sub getCaption() As String 
_B.getcaption=function() {
// [359] Return mCaption 
return _B._mcaption;
// End Sub
};

// [362] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [363] AddAttr( {111} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [364] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [367] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [368] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [371] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [372] AddAttr( {112} , varBorder) 
_B.addattr("border",_varborder,_B);
// [373] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [376] public Sub getBorder() As String 
_B.getborder=function() {
// [377] Return stBorder 
return _B._stborder;
// End Sub
};

// [380] public Sub setBorderBottom(varBorderBottom As String) 
_B.setborderbottom=function(_varborderbottom) {
// [381] AddAttr( {113} , varBorderBottom) 
_B.addattr("border-bottom",_varborderbottom,_B);
// [382] stBorderBottom = varBorderBottom 
_B._stborderbottom=_varborderbottom;
// End Sub
};

// [385] public Sub getBorderBottom() As String 
_B.getborderbottom=function() {
// [386] Return stBorderBottom 
return _B._stborderbottom;
// End Sub
};

// [389] public Sub setBorderLeft(varBorderLeft As String) 
_B.setborderleft=function(_varborderleft) {
// [390] AddAttr( {114} , varBorderLeft) 
_B.addattr("border-left",_varborderleft,_B);
// [391] stBorderLeft = varBorderLeft 
_B._stborderleft=_varborderleft;
// End Sub
};

// [394] public Sub getBorderLeft() As String 
_B.getborderleft=function() {
// [395] Return stBorderLeft 
return _B._stborderleft;
// End Sub
};

// [398] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [399] AddAttr( {115} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [400] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [403] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [404] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [407] public Sub setBorderRight(varBorderRight As String) 
_B.setborderright=function(_varborderright) {
// [408] AddAttr( {116} , varBorderRight) 
_B.addattr("border-right",_varborderright,_B);
// [409] stBorderRight = varBorderRight 
_B._stborderright=_varborderright;
// End Sub
};

// [412] public Sub getBorderRight() As String 
_B.getborderright=function() {
// [413] Return stBorderRight 
return _B._stborderright;
// End Sub
};

// [416] public Sub setBorderTop(varBorderTop As String) 
_B.setbordertop=function(_varbordertop) {
// [417] AddAttr( {117} , varBorderTop) 
_B.addattr("border-top",_varbordertop,_B);
// [418] stBorderTop = varBorderTop 
_B._stbordertop=_varbordertop;
// End Sub
};

// [421] public Sub getBorderTop() As String 
_B.getbordertop=function() {
// [422] Return stBorderTop 
return _B._stbordertop;
// End Sub
};

// [425] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [426] AddAttr( {118} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [427] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [430] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [431] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [434] public Sub setInnerBackgroundColor(varInnerBackgroundColor As String) 
_B.setinnerbackgroundcolor=function(_varinnerbackgroundcolor) {
// [435] AddAttr( {119} , varInnerBackgroundColor) 
_B.addattr("inner-background-color",_varinnerbackgroundcolor,_B);
// [436] stInnerBackgroundColor = varInnerBackgroundColor 
_B._stinnerbackgroundcolor=_varinnerbackgroundcolor;
// End Sub
};

// [439] public Sub getInnerBackgroundColor() As String 
_B.getinnerbackgroundcolor=function() {
// [440] Return stInnerBackgroundColor 
return _B._stinnerbackgroundcolor;
// End Sub
};

// [443] public Sub setInnerBorder(varInnerBorder As String) 
_B.setinnerborder=function(_varinnerborder) {
// [444] AddAttr( {120} , varInnerBorder) 
_B.addattr("inner-border",_varinnerborder,_B);
// [445] stInnerBorder = varInnerBorder 
_B._stinnerborder=_varinnerborder;
// End Sub
};

// [448] public Sub getInnerBorder() As String 
_B.getinnerborder=function() {
// [449] Return stInnerBorder 
return _B._stinnerborder;
// End Sub
};

// [452] public Sub setInnerBorderBottom(varInnerBorderBottom As String) 
_B.setinnerborderbottom=function(_varinnerborderbottom) {
// [453] AddAttr( {121} , varInnerBorderBottom) 
_B.addattr("inner-border-bottom",_varinnerborderbottom,_B);
// [454] stInnerBorderBottom = varInnerBorderBottom 
_B._stinnerborderbottom=_varinnerborderbottom;
// End Sub
};

// [457] public Sub getInnerBorderBottom() As String 
_B.getinnerborderbottom=function() {
// [458] Return stInnerBorderBottom 
return _B._stinnerborderbottom;
// End Sub
};

// [461] public Sub setInnerBorderLeft(varInnerBorderLeft As String) 
_B.setinnerborderleft=function(_varinnerborderleft) {
// [462] AddAttr( {122} , varInnerBorderLeft) 
_B.addattr("inner-border-left",_varinnerborderleft,_B);
// [463] stInnerBorderLeft = varInnerBorderLeft 
_B._stinnerborderleft=_varinnerborderleft;
// End Sub
};

// [466] public Sub getInnerBorderLeft() As String 
_B.getinnerborderleft=function() {
// [467] Return stInnerBorderLeft 
return _B._stinnerborderleft;
// End Sub
};

// [470] public Sub setInnerBorderRadius(varInnerBorderRadius As String) 
_B.setinnerborderradius=function(_varinnerborderradius) {
// [471] AddAttr( {123} , varInnerBorderRadius) 
_B.addattr("inner-border-radius",_varinnerborderradius,_B);
// [472] stInnerBorderRadius = varInnerBorderRadius 
_B._stinnerborderradius=_varinnerborderradius;
// End Sub
};

// [475] public Sub getInnerBorderRadius() As String 
_B.getinnerborderradius=function() {
// [476] Return stInnerBorderRadius 
return _B._stinnerborderradius;
// End Sub
};

// [479] public Sub setInnerBorderRight(varInnerBorderRight As String) 
_B.setinnerborderright=function(_varinnerborderright) {
// [480] AddAttr( {124} , varInnerBorderRight) 
_B.addattr("inner-border-right",_varinnerborderright,_B);
// [481] stInnerBorderRight = varInnerBorderRight 
_B._stinnerborderright=_varinnerborderright;
// End Sub
};

// [484] public Sub getInnerBorderRight() As String 
_B.getinnerborderright=function() {
// [485] Return stInnerBorderRight 
return _B._stinnerborderright;
// End Sub
};

// [488] public Sub setInnerBorderTop(varInnerBorderTop As String) 
_B.setinnerbordertop=function(_varinnerbordertop) {
// [489] AddAttr( {125} , varInnerBorderTop) 
_B.addattr("inner-border-top",_varinnerbordertop,_B);
// [490] stInnerBorderTop = varInnerBorderTop 
_B._stinnerbordertop=_varinnerbordertop;
// End Sub
};

// [493] public Sub getInnerBorderTop() As String 
_B.getinnerbordertop=function() {
// [494] Return stInnerBorderTop 
return _B._stinnerbordertop;
// End Sub
};

// [497] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [498] AddAttr( {126} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [499] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [502] public Sub getPadding() As String 
_B.getpadding=function() {
// [503] Return stPadding 
return _B._stpadding;
// End Sub
};

// [506] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [507] AddAttr( {127} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [508] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [511] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [512] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [515] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [516] AddAttr( {128} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [517] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [520] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [521] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [524] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [525] AddAttr( {129} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [526] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [529] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [530] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [533] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [534] AddAttr( {130} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [535] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [538] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [539] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [542] public Sub setVerticalAlign(varVerticalAlign As String) 
_B.setverticalalign=function(_varverticalalign) {
// [543] AddAttr( {131} , varVerticalAlign) 
_B.addattr("vertical-align",_varverticalalign,_B);
// [544] stVerticalAlign = varVerticalAlign 
_B._stverticalalign=_varverticalalign;
// End Sub
};

// [547] public Sub getVerticalAlign() As String 
_B.getverticalalign=function() {
// [548] Return stVerticalAlign 
return _B._stverticalalign;
// End Sub
};

// [551] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [552] AddAttr( {132} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [553] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [556] public Sub getWidth() As String 
_B.getwidth=function() {
// [557] Return stWidth 
return _B._stwidth;
// End Sub
};

// [562] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [563] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJDivider  =========================== */
function banano_bananomjml_mjdivider() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-divider";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbordercolor="";

_B._stborderstyle="";

_B._stborderwidth="";

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._stwidth="";

// [52] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [53] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [54] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [55] mCallBack = CallBack 
_B._mcallback=_callback;
// [56] classList.Initialize 
_B._classlist={};
// [57] styleList.Initialize 
_B._stylelist={};
// [58] attributeList.Initialize 
_B._attributelist={};
// [59] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [63] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [64] mTarget = Target 
_B._mtarget=_target;
// [65] If Props <> Null Then 
if (_props!=null) {
// [66] mClasses = Props.Get( {19} ) 
_B._mclasses=_props["Classes"];
// [67] mAttributes = Props.Get( {20} ) 
_B._mattributes=_props["Attributes"];
// [68] mStyle = Props.Get( {21} ) 
_B._mstyle=_props["Style"];
// [69] mCaption = Props.Get( {22} ) 
_B._mcaption=_props["Caption"];
// [70] stBorderColor = Props.Get( {23} ) 
_B._stbordercolor=_props["BorderColor"];
// [71] stBorderStyle = Props.Get( {24} ) 
_B._stborderstyle=_props["BorderStyle"];
// [72] stBorderWidth = Props.Get( {25} ) 
_B._stborderwidth=_props["BorderWidth"];
// [73] stContainerBackgroundColor = Props.Get( {26} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [74] stCssClass = Props.Get( {27} ) 
_B._stcssclass=_props["CssClass"];
// [75] stPadding = Props.Get( {28} ) 
_B._stpadding=_props["Padding"];
// [76] stPaddingBottom = Props.Get( {29} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [77] stPaddingLeft = Props.Get( {30} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [78] stPaddingRight = Props.Get( {31} ) 
_B._stpaddingright=_props["PaddingRight"];
// [79] stPaddingTop = Props.Get( {32} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [80] stWidth = Props.Get( {33} ) 
_B._stwidth=_props["Width"];
// [81] End If 
}
// [83] AddAttr( {34} , stBorderColor) 
_B.addattr("border-color",_B._stbordercolor,_B);
// [84] AddAttr( {35} , stBorderStyle) 
_B.addattr("border-style",_B._stborderstyle,_B);
// [85] AddAttr( {36} , stBorderWidth) 
_B.addattr("border-width",_B._stborderwidth,_B);
// [86] AddAttr( {37} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [87] AddAttr( {38} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [88] AddAttr( {39} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [89] AddAttr( {40} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [90] AddAttr( {41} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [91] AddAttr( {42} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [92] AddAttr( {43} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [93] AddAttr( {44} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [94] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [95] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [96] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [99] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [100] mElement = mTarget.Append(strHTML).Get( {45} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [106] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [108] Dim className As String = BANanoShared.JoinMapKeys(classList, {46} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [109] AddAttr( {47} , className) 
_B.addattr("class",_classname,_B);
// [111] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [112] AddAttr( {48} , styleName) 
_B.addattr("style",_stylename,_B);
// [114] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [115] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [116] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [117] Return rslt 
return _rslt;
// End Sub
};

// [121] Sub AddBR 
_B.addbr=function() {
// [122] sbText.Append( {49} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [126] Sub AddHR 
_B.addhr=function() {
// [127] sbText.Append( {50} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [131] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [132] Return mElement 
return _B._melement;
// End Sub
};

// [136] public Sub getID() As String 
_B.getid=function() {
// [137] Return mName 
return _B._mname;
// End Sub
};

// [141] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [142] mTarget = BANano.GetElement( {51} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [143] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [147] public Sub Remove() 
_B.remove=function() {
// [148] mElement.Remove 
_B._melement.remove();
// [149] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [153] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [154] If mElement <> Null Then 
if (_B._melement!=null) {
// [155] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [156] End If 
}
// End Sub
};

// [160] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [161] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [162] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [163] varClass = varClass.trim 
_varclass=_varclass.trim();
// [164] if varClass = {52} Then Return 
if (_varclass=="") { return ;}
// [165] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [166] Dim mxItems As List = BANanoShared.StrParse( {53} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [167] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [168] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [169] Next 
}
// End Sub
};

// [173] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [174] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [175] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [176] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [177] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [178] varClass = varClass.trim 
_varclass=_varclass.trim();
// [179] if varClass = {54} Then Return 
if (_varclass=="") { return ;}
// [180] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [181] Dim mxItems As List = BANanoShared.StrParse( {55} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [182] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [183] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [184] Next 
}
// End Sub
};

// [188] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [189] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [190] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [191] If mElement <> Null Then 
if (_B._melement!=null) {
// [192] Dim aStyle As Map = CreateMap() 
_astyle={};
// [193] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [194] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [195] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [196] End If 
}
// [197] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [201] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [202] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [203] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [205] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [206] If varValue = True Then 
if (_varvalue==true) {
// [207] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [208] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [209] End If 
}
// [210] Else 
} else {
// [212] If varValue.StartsWith( {56} ) Then 
if (_varvalue.startsWith(":")) {
// [213] If varValue.StartsWith( {57} ) Then 
if (_varvalue.startsWith("$")) {
// [214] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [215] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [216] Else 
} else {
// [217] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [218] If rname.Contains( {58} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [219] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [220] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [221] End If 
}
// [222] Else 
} else {
// [224] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [225] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [226] Select Case varProp 
switch ("" + _varprop) {
// [227] Case {59} , {60} , {61} , {62} , {63} , {64} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [228] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [229] End Select 
break;
}
// [230] End If 
}
// [231] End If 
}
// [232] Return 
return;
// End Sub
};

// [236] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [237] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [238] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [239] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [240] sbClass.Append(k).Append( {65} ) 
_sbclass.append(_k).append(" ");
// [241] Next 
}
// [242] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [243] Return mClasses 
return _B._mclasses;
// End Sub
};

// [247] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [248] If mElement <> Null Then 
if (_B._melement!=null) {
// [249] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [250] End If 
}
// [251] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [252] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [253] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [254] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [255] Next 
}
// End Sub
};

// [259] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [260] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [261] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [262] sbStyle.Append( {66} ) 
_sbstyle.append("{");
// [263] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [264] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [265] sbStyle.Append(k).Append( {67} ).Append(v).Append( {68} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [266] Next 
}
// [267] sbStyle.Append( {69} ) 
_sbstyle.append("}");
// [268] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [269] Return mStyle 
return _B._mstyle;
// End Sub
};

// [273] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [274] Dim mxItems As List = BANanoShared.StrParse( {70} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [275] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [276] Dim k As String = BANanoShared.MvField(mt,1, {71} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [277] Dim v As String = BANanoShared.MvField(mt,2, {72} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [278] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [279] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [280] Next 
}
// End Sub
};

// [284] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [285] Dim mxItems As List = BANanoShared.StrParse( {73} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [286] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [287] Dim k As String = BANanoShared.MvField(mt,1, {74} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [288] Dim v As String = BANanoShared.MvField(mt,2, {75} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [289] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [290] Next 
}
// End Sub
};

// [294] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [295] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [296] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [297] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [298] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [299] sbAttr.Append(k).Append( {76} ).Append(v).Append( {77} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [300] Next 
}
// [301] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [302] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [306] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [307] If mElement <> Null Then 
if (_B._melement!=null) {
// [308] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [309] End If 
}
// [310] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [314] public Sub getCaption() As String 
_B.getcaption=function() {
// [315] Return mCaption 
return _B._mcaption;
// End Sub
};

// [318] public Sub setBorderColor(varBorderColor As String) 
_B.setbordercolor=function(_varbordercolor) {
// [319] AddAttr( {78} , varBorderColor) 
_B.addattr("border-color",_varbordercolor,_B);
// [320] stBorderColor = varBorderColor 
_B._stbordercolor=_varbordercolor;
// End Sub
};

// [323] public Sub getBorderColor() As String 
_B.getbordercolor=function() {
// [324] Return stBorderColor 
return _B._stbordercolor;
// End Sub
};

// [327] public Sub setBorderStyle(varBorderStyle As String) 
_B.setborderstyle=function(_varborderstyle) {
// [328] AddAttr( {79} , varBorderStyle) 
_B.addattr("border-style",_varborderstyle,_B);
// [329] stBorderStyle = varBorderStyle 
_B._stborderstyle=_varborderstyle;
// End Sub
};

// [332] public Sub getBorderStyle() As String 
_B.getborderstyle=function() {
// [333] Return stBorderStyle 
return _B._stborderstyle;
// End Sub
};

// [336] public Sub setBorderWidth(varBorderWidth As String) 
_B.setborderwidth=function(_varborderwidth) {
// [337] AddAttr( {80} , varBorderWidth) 
_B.addattr("border-width",_varborderwidth,_B);
// [338] stBorderWidth = varBorderWidth 
_B._stborderwidth=_varborderwidth;
// End Sub
};

// [341] public Sub getBorderWidth() As String 
_B.getborderwidth=function() {
// [342] Return stBorderWidth 
return _B._stborderwidth;
// End Sub
};

// [345] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [346] AddAttr( {81} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [347] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [350] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [351] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [354] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [355] AddAttr( {82} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [356] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [359] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [360] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [363] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [364] AddAttr( {83} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [365] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [368] public Sub getPadding() As String 
_B.getpadding=function() {
// [369] Return stPadding 
return _B._stpadding;
// End Sub
};

// [372] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [373] AddAttr( {84} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [374] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [377] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [378] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [381] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [382] AddAttr( {85} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [383] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [386] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [387] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [390] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [391] AddAttr( {86} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [392] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [395] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [396] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [399] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [400] AddAttr( {87} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [401] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [404] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [405] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [408] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [409] AddAttr( {88} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [410] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [413] public Sub getWidth() As String 
_B.getwidth=function() {
// [414] Return stWidth 
return _B._stwidth;
// End Sub
};

// [419] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [420] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJFont  =========================== */
function banano_bananomjml_mjfont() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-font";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._sthref="";

_B._stname="";

// [34] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [35] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [36] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [37] mCallBack = CallBack 
_B._mcallback=_callback;
// [38] classList.Initialize 
_B._classlist={};
// [39] styleList.Initialize 
_B._stylelist={};
// [40] attributeList.Initialize 
_B._attributelist={};
// [41] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [45] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [46] mTarget = Target 
_B._mtarget=_target;
// [47] If Props <> Null Then 
if (_props!=null) {
// [48] mClasses = Props.Get( {10} ) 
_B._mclasses=_props["Classes"];
// [49] mAttributes = Props.Get( {11} ) 
_B._mattributes=_props["Attributes"];
// [50] mStyle = Props.Get( {12} ) 
_B._mstyle=_props["Style"];
// [51] mCaption = Props.Get( {13} ) 
_B._mcaption=_props["Caption"];
// [52] stHref = Props.Get( {14} ) 
_B._sthref=_props["Href"];
// [53] stName = Props.Get( {15} ) 
_B._stname=_props["Name"];
// [54] End If 
}
// [56] AddAttr( {16} , stHref) 
_B.addattr("href",_B._sthref,_B);
// [57] AddAttr( {17} , stName) 
_B.addattr("name",_B._stname,_B);
// [58] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [59] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [60] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [63] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [64] mElement = mTarget.Append(strHTML).Get( {18} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [70] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [72] Dim className As String = BANanoShared.JoinMapKeys(classList, {19} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [73] AddAttr( {20} , className) 
_B.addattr("class",_classname,_B);
// [75] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [76] AddAttr( {21} , styleName) 
_B.addattr("style",_stylename,_B);
// [78] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [79] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [80] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [81] Return rslt 
return _rslt;
// End Sub
};

// [85] Sub AddBR 
_B.addbr=function() {
// [86] sbText.Append( {22} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [90] Sub AddHR 
_B.addhr=function() {
// [91] sbText.Append( {23} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [95] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [96] Return mElement 
return _B._melement;
// End Sub
};

// [100] public Sub getID() As String 
_B.getid=function() {
// [101] Return mName 
return _B._mname;
// End Sub
};

// [105] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [106] mTarget = BANano.GetElement( {24} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [107] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [111] public Sub Remove() 
_B.remove=function() {
// [112] mElement.Remove 
_B._melement.remove();
// [113] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [117] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [118] If mElement <> Null Then 
if (_B._melement!=null) {
// [119] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [120] End If 
}
// End Sub
};

// [124] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [125] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [126] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [127] varClass = varClass.trim 
_varclass=_varclass.trim();
// [128] if varClass = {25} Then Return 
if (_varclass=="") { return ;}
// [129] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [130] Dim mxItems As List = BANanoShared.StrParse( {26} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [131] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [132] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [133] Next 
}
// End Sub
};

// [137] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [138] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [139] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [140] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [141] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [142] varClass = varClass.trim 
_varclass=_varclass.trim();
// [143] if varClass = {27} Then Return 
if (_varclass=="") { return ;}
// [144] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [145] Dim mxItems As List = BANanoShared.StrParse( {28} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [146] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [147] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [148] Next 
}
// End Sub
};

// [152] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [153] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [154] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [155] If mElement <> Null Then 
if (_B._melement!=null) {
// [156] Dim aStyle As Map = CreateMap() 
_astyle={};
// [157] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [158] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [159] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [160] End If 
}
// [161] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [165] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [166] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [167] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [169] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [170] If varValue = True Then 
if (_varvalue==true) {
// [171] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [172] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [173] End If 
}
// [174] Else 
} else {
// [176] If varValue.StartsWith( {29} ) Then 
if (_varvalue.startsWith(":")) {
// [177] If varValue.StartsWith( {30} ) Then 
if (_varvalue.startsWith("$")) {
// [178] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [179] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [180] Else 
} else {
// [181] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [182] If rname.Contains( {31} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [183] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [184] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [185] End If 
}
// [186] Else 
} else {
// [188] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [189] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [190] Select Case varProp 
switch ("" + _varprop) {
// [191] Case {32} , {33} , {34} , {35} , {36} , {37} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [192] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [193] End Select 
break;
}
// [194] End If 
}
// [195] End If 
}
// [196] Return 
return;
// End Sub
};

// [200] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [201] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [202] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [203] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [204] sbClass.Append(k).Append( {38} ) 
_sbclass.append(_k).append(" ");
// [205] Next 
}
// [206] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [207] Return mClasses 
return _B._mclasses;
// End Sub
};

// [211] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [212] If mElement <> Null Then 
if (_B._melement!=null) {
// [213] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [214] End If 
}
// [215] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [216] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [217] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [218] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [219] Next 
}
// End Sub
};

// [223] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [224] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [225] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [226] sbStyle.Append( {39} ) 
_sbstyle.append("{");
// [227] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [228] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [229] sbStyle.Append(k).Append( {40} ).Append(v).Append( {41} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [230] Next 
}
// [231] sbStyle.Append( {42} ) 
_sbstyle.append("}");
// [232] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [233] Return mStyle 
return _B._mstyle;
// End Sub
};

// [237] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [238] Dim mxItems As List = BANanoShared.StrParse( {43} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [239] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [240] Dim k As String = BANanoShared.MvField(mt,1, {44} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [241] Dim v As String = BANanoShared.MvField(mt,2, {45} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [242] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [243] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [244] Next 
}
// End Sub
};

// [248] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [249] Dim mxItems As List = BANanoShared.StrParse( {46} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [250] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [251] Dim k As String = BANanoShared.MvField(mt,1, {47} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [252] Dim v As String = BANanoShared.MvField(mt,2, {48} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [253] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [254] Next 
}
// End Sub
};

// [258] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [259] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [260] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [261] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [262] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [263] sbAttr.Append(k).Append( {49} ).Append(v).Append( {50} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [264] Next 
}
// [265] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [266] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [270] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [271] If mElement <> Null Then 
if (_B._melement!=null) {
// [272] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [273] End If 
}
// [274] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [278] public Sub getCaption() As String 
_B.getcaption=function() {
// [279] Return mCaption 
return _B._mcaption;
// End Sub
};

// [282] public Sub setHref(varHref As String) 
_B.sethref=function(_varhref) {
// [283] AddAttr( {51} , varHref) 
_B.addattr("href",_varhref,_B);
// [284] stHref = varHref 
_B._sthref=_varhref;
// End Sub
};

// [287] public Sub getHref() As String 
_B.gethref=function() {
// [288] Return stHref 
return _B._sthref;
// End Sub
};

// [291] public Sub setName(varName As String) 
_B.setname=function(_varname) {
// [292] AddAttr( {52} , varName) 
_B.addattr("name",_varname,_B);
// [293] stName = varName 
_B._stname=_varname;
// End Sub
};

// [296] public Sub getName() As String 
_B.getname=function() {
// [297] Return stName 
return _B._stname;
// End Sub
};

// [302] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [303] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJGroup  =========================== */
function banano_bananomjml_mjgroup() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-group";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stcssclass="";

_B._stdirection="";

_B._stverticalalign="";

_B._stwidth="";

// [40] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [41] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [42] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [43] mCallBack = CallBack 
_B._mcallback=_callback;
// [44] classList.Initialize 
_B._classlist={};
// [45] styleList.Initialize 
_B._stylelist={};
// [46] attributeList.Initialize 
_B._attributelist={};
// [47] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [51] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [52] mTarget = Target 
_B._mtarget=_target;
// [53] If Props <> Null Then 
if (_props!=null) {
// [54] mClasses = Props.Get( {13} ) 
_B._mclasses=_props["Classes"];
// [55] mAttributes = Props.Get( {14} ) 
_B._mattributes=_props["Attributes"];
// [56] mStyle = Props.Get( {15} ) 
_B._mstyle=_props["Style"];
// [57] mCaption = Props.Get( {16} ) 
_B._mcaption=_props["Caption"];
// [58] stBackgroundColor = Props.Get( {17} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [59] stCssClass = Props.Get( {18} ) 
_B._stcssclass=_props["CssClass"];
// [60] stDirection = Props.Get( {19} ) 
_B._stdirection=_props["Direction"];
// [61] stVerticalAlign = Props.Get( {20} ) 
_B._stverticalalign=_props["VerticalAlign"];
// [62] stWidth = Props.Get( {21} ) 
_B._stwidth=_props["Width"];
// [63] End If 
}
// [65] AddAttr( {22} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [66] AddAttr( {23} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [67] AddAttr( {24} , stDirection) 
_B.addattr("direction",_B._stdirection,_B);
// [68] AddAttr( {25} , stVerticalAlign) 
_B.addattr("vertical-align",_B._stverticalalign,_B);
// [69] AddAttr( {26} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [70] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [71] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [72] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [75] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [76] mElement = mTarget.Append(strHTML).Get( {27} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [82] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [84] Dim className As String = BANanoShared.JoinMapKeys(classList, {28} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [85] AddAttr( {29} , className) 
_B.addattr("class",_classname,_B);
// [87] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [88] AddAttr( {30} , styleName) 
_B.addattr("style",_stylename,_B);
// [90] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [91] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [92] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [93] Return rslt 
return _rslt;
// End Sub
};

// [97] Sub AddBR 
_B.addbr=function() {
// [98] sbText.Append( {31} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [102] Sub AddHR 
_B.addhr=function() {
// [103] sbText.Append( {32} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [107] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [108] Return mElement 
return _B._melement;
// End Sub
};

// [112] public Sub getID() As String 
_B.getid=function() {
// [113] Return mName 
return _B._mname;
// End Sub
};

// [117] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [118] mTarget = BANano.GetElement( {33} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [119] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [123] public Sub Remove() 
_B.remove=function() {
// [124] mElement.Remove 
_B._melement.remove();
// [125] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [129] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [130] If mElement <> Null Then 
if (_B._melement!=null) {
// [131] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [132] End If 
}
// End Sub
};

// [136] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [137] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [138] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [139] varClass = varClass.trim 
_varclass=_varclass.trim();
// [140] if varClass = {34} Then Return 
if (_varclass=="") { return ;}
// [141] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [142] Dim mxItems As List = BANanoShared.StrParse( {35} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [143] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [144] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [145] Next 
}
// End Sub
};

// [149] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [150] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [151] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [152] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [153] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [154] varClass = varClass.trim 
_varclass=_varclass.trim();
// [155] if varClass = {36} Then Return 
if (_varclass=="") { return ;}
// [156] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [157] Dim mxItems As List = BANanoShared.StrParse( {37} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [158] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [159] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [160] Next 
}
// End Sub
};

// [164] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [165] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [166] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [167] If mElement <> Null Then 
if (_B._melement!=null) {
// [168] Dim aStyle As Map = CreateMap() 
_astyle={};
// [169] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [170] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [171] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [172] End If 
}
// [173] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [177] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [178] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [179] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [181] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [182] If varValue = True Then 
if (_varvalue==true) {
// [183] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [184] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [185] End If 
}
// [186] Else 
} else {
// [188] If varValue.StartsWith( {38} ) Then 
if (_varvalue.startsWith(":")) {
// [189] If varValue.StartsWith( {39} ) Then 
if (_varvalue.startsWith("$")) {
// [190] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [191] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [192] Else 
} else {
// [193] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [194] If rname.Contains( {40} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [195] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [196] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [197] End If 
}
// [198] Else 
} else {
// [200] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [201] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [202] Select Case varProp 
switch ("" + _varprop) {
// [203] Case {41} , {42} , {43} , {44} , {45} , {46} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [204] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [205] End Select 
break;
}
// [206] End If 
}
// [207] End If 
}
// [208] Return 
return;
// End Sub
};

// [212] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [213] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [214] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [215] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [216] sbClass.Append(k).Append( {47} ) 
_sbclass.append(_k).append(" ");
// [217] Next 
}
// [218] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [219] Return mClasses 
return _B._mclasses;
// End Sub
};

// [223] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [224] If mElement <> Null Then 
if (_B._melement!=null) {
// [225] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [226] End If 
}
// [227] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [228] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [229] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [230] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [231] Next 
}
// End Sub
};

// [235] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [236] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [237] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [238] sbStyle.Append( {48} ) 
_sbstyle.append("{");
// [239] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [240] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [241] sbStyle.Append(k).Append( {49} ).Append(v).Append( {50} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [242] Next 
}
// [243] sbStyle.Append( {51} ) 
_sbstyle.append("}");
// [244] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [245] Return mStyle 
return _B._mstyle;
// End Sub
};

// [249] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [250] Dim mxItems As List = BANanoShared.StrParse( {52} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [251] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [252] Dim k As String = BANanoShared.MvField(mt,1, {53} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [253] Dim v As String = BANanoShared.MvField(mt,2, {54} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [254] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [255] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [256] Next 
}
// End Sub
};

// [260] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [261] Dim mxItems As List = BANanoShared.StrParse( {55} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [262] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [263] Dim k As String = BANanoShared.MvField(mt,1, {56} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [264] Dim v As String = BANanoShared.MvField(mt,2, {57} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [265] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [266] Next 
}
// End Sub
};

// [270] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [271] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [272] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [273] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [274] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [275] sbAttr.Append(k).Append( {58} ).Append(v).Append( {59} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [276] Next 
}
// [277] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [278] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [282] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [283] If mElement <> Null Then 
if (_B._melement!=null) {
// [284] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [285] End If 
}
// [286] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [290] public Sub getCaption() As String 
_B.getcaption=function() {
// [291] Return mCaption 
return _B._mcaption;
// End Sub
};

// [294] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [295] AddAttr( {60} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [296] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [299] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [300] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [303] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [304] AddAttr( {61} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [305] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [308] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [309] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [312] public Sub setDirection(varDirection As String) 
_B.setdirection=function(_vardirection) {
// [313] AddAttr( {62} , varDirection) 
_B.addattr("direction",_vardirection,_B);
// [314] stDirection = varDirection 
_B._stdirection=_vardirection;
// End Sub
};

// [317] public Sub getDirection() As String 
_B.getdirection=function() {
// [318] Return stDirection 
return _B._stdirection;
// End Sub
};

// [321] public Sub setVerticalAlign(varVerticalAlign As String) 
_B.setverticalalign=function(_varverticalalign) {
// [322] AddAttr( {63} , varVerticalAlign) 
_B.addattr("vertical-align",_varverticalalign,_B);
// [323] stVerticalAlign = varVerticalAlign 
_B._stverticalalign=_varverticalalign;
// End Sub
};

// [326] public Sub getVerticalAlign() As String 
_B.getverticalalign=function() {
// [327] Return stVerticalAlign 
return _B._stverticalalign;
// End Sub
};

// [330] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [331] AddAttr( {64} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [332] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [335] public Sub getWidth() As String 
_B.getwidth=function() {
// [336] Return stWidth 
return _B._stwidth;
// End Sub
};

// [341] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [342] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJHead  =========================== */
function banano_bananomjml_mjhead() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-head";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJHero  =========================== */
function banano_bananomjml_mjhero() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-hero";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stbackgroundheight="";

_B._stbackgroundposition="";

_B._stbackgroundurl="";

_B._stbackgroundwidth="";

_B._stcssclass="";

_B._stheight="";

_B._stmode="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._stverticalalign="";

_B._stwidth="";

// [60] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [61] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [62] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [63] mCallBack = CallBack 
_B._mcallback=_callback;
// [64] classList.Initialize 
_B._classlist={};
// [65] styleList.Initialize 
_B._stylelist={};
// [66] attributeList.Initialize 
_B._attributelist={};
// [67] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [71] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [72] mTarget = Target 
_B._mtarget=_target;
// [73] If Props <> Null Then 
if (_props!=null) {
// [74] mClasses = Props.Get( {23} ) 
_B._mclasses=_props["Classes"];
// [75] mAttributes = Props.Get( {24} ) 
_B._mattributes=_props["Attributes"];
// [76] mStyle = Props.Get( {25} ) 
_B._mstyle=_props["Style"];
// [77] mCaption = Props.Get( {26} ) 
_B._mcaption=_props["Caption"];
// [78] stBackgroundColor = Props.Get( {27} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [79] stBackgroundHeight = Props.Get( {28} ) 
_B._stbackgroundheight=_props["BackgroundHeight"];
// [80] stBackgroundPosition = Props.Get( {29} ) 
_B._stbackgroundposition=_props["BackgroundPosition"];
// [81] stBackgroundUrl = Props.Get( {30} ) 
_B._stbackgroundurl=_props["BackgroundUrl"];
// [82] stBackgroundWidth = Props.Get( {31} ) 
_B._stbackgroundwidth=_props["BackgroundWidth"];
// [83] stCssClass = Props.Get( {32} ) 
_B._stcssclass=_props["CssClass"];
// [84] stHeight = Props.Get( {33} ) 
_B._stheight=_props["Height"];
// [85] stMode = Props.Get( {34} ) 
_B._stmode=_props["Mode"];
// [86] stPadding = Props.Get( {35} ) 
_B._stpadding=_props["Padding"];
// [87] stPaddingBottom = Props.Get( {36} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [88] stPaddingLeft = Props.Get( {37} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [89] stPaddingRight = Props.Get( {38} ) 
_B._stpaddingright=_props["PaddingRight"];
// [90] stPaddingTop = Props.Get( {39} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [91] stVerticalAlign = Props.Get( {40} ) 
_B._stverticalalign=_props["VerticalAlign"];
// [92] stWidth = Props.Get( {41} ) 
_B._stwidth=_props["Width"];
// [93] End If 
}
// [95] AddAttr( {42} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [96] AddAttr( {43} , stBackgroundHeight) 
_B.addattr("background-height",_B._stbackgroundheight,_B);
// [97] AddAttr( {44} , stBackgroundPosition) 
_B.addattr("background-position",_B._stbackgroundposition,_B);
// [98] AddAttr( {45} , stBackgroundUrl) 
_B.addattr("background-url",_B._stbackgroundurl,_B);
// [99] AddAttr( {46} , stBackgroundWidth) 
_B.addattr("background-width",_B._stbackgroundwidth,_B);
// [100] AddAttr( {47} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [101] AddAttr( {48} , stHeight) 
_B.addattr("height",_B._stheight,_B);
// [102] AddAttr( {49} , stMode) 
_B.addattr("mode",_B._stmode,_B);
// [103] AddAttr( {50} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [104] AddAttr( {51} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [105] AddAttr( {52} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [106] AddAttr( {53} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [107] AddAttr( {54} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [108] AddAttr( {55} , stVerticalAlign) 
_B.addattr("vertical-align",_B._stverticalalign,_B);
// [109] AddAttr( {56} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [110] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [111] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [112] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [115] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [116] mElement = mTarget.Append(strHTML).Get( {57} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [122] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [124] Dim className As String = BANanoShared.JoinMapKeys(classList, {58} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [125] AddAttr( {59} , className) 
_B.addattr("class",_classname,_B);
// [127] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [128] AddAttr( {60} , styleName) 
_B.addattr("style",_stylename,_B);
// [130] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [131] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [132] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [133] Return rslt 
return _rslt;
// End Sub
};

// [137] Sub AddBR 
_B.addbr=function() {
// [138] sbText.Append( {61} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [142] Sub AddHR 
_B.addhr=function() {
// [143] sbText.Append( {62} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [147] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [148] Return mElement 
return _B._melement;
// End Sub
};

// [152] public Sub getID() As String 
_B.getid=function() {
// [153] Return mName 
return _B._mname;
// End Sub
};

// [157] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [158] mTarget = BANano.GetElement( {63} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [159] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [163] public Sub Remove() 
_B.remove=function() {
// [164] mElement.Remove 
_B._melement.remove();
// [165] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [169] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [170] If mElement <> Null Then 
if (_B._melement!=null) {
// [171] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [172] End If 
}
// End Sub
};

// [176] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [177] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [178] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [179] varClass = varClass.trim 
_varclass=_varclass.trim();
// [180] if varClass = {64} Then Return 
if (_varclass=="") { return ;}
// [181] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [182] Dim mxItems As List = BANanoShared.StrParse( {65} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [183] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [184] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [185] Next 
}
// End Sub
};

// [189] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [190] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [191] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [192] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [193] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [194] varClass = varClass.trim 
_varclass=_varclass.trim();
// [195] if varClass = {66} Then Return 
if (_varclass=="") { return ;}
// [196] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [197] Dim mxItems As List = BANanoShared.StrParse( {67} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [198] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [199] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [200] Next 
}
// End Sub
};

// [204] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [205] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [206] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [207] If mElement <> Null Then 
if (_B._melement!=null) {
// [208] Dim aStyle As Map = CreateMap() 
_astyle={};
// [209] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [210] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [211] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [212] End If 
}
// [213] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [217] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [218] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [219] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [221] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [222] If varValue = True Then 
if (_varvalue==true) {
// [223] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [224] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [225] End If 
}
// [226] Else 
} else {
// [228] If varValue.StartsWith( {68} ) Then 
if (_varvalue.startsWith(":")) {
// [229] If varValue.StartsWith( {69} ) Then 
if (_varvalue.startsWith("$")) {
// [230] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [231] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [232] Else 
} else {
// [233] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [234] If rname.Contains( {70} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [235] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [236] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [237] End If 
}
// [238] Else 
} else {
// [240] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [241] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [242] Select Case varProp 
switch ("" + _varprop) {
// [243] Case {71} , {72} , {73} , {74} , {75} , {76} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [244] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [245] End Select 
break;
}
// [246] End If 
}
// [247] End If 
}
// [248] Return 
return;
// End Sub
};

// [252] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [253] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [254] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [255] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [256] sbClass.Append(k).Append( {77} ) 
_sbclass.append(_k).append(" ");
// [257] Next 
}
// [258] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [259] Return mClasses 
return _B._mclasses;
// End Sub
};

// [263] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [264] If mElement <> Null Then 
if (_B._melement!=null) {
// [265] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [266] End If 
}
// [267] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [268] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [269] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [270] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [271] Next 
}
// End Sub
};

// [275] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [276] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [277] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [278] sbStyle.Append( {78} ) 
_sbstyle.append("{");
// [279] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [280] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [281] sbStyle.Append(k).Append( {79} ).Append(v).Append( {80} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [282] Next 
}
// [283] sbStyle.Append( {81} ) 
_sbstyle.append("}");
// [284] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [285] Return mStyle 
return _B._mstyle;
// End Sub
};

// [289] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [290] Dim mxItems As List = BANanoShared.StrParse( {82} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [291] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [292] Dim k As String = BANanoShared.MvField(mt,1, {83} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [293] Dim v As String = BANanoShared.MvField(mt,2, {84} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [294] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [295] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [296] Next 
}
// End Sub
};

// [300] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [301] Dim mxItems As List = BANanoShared.StrParse( {85} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [302] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [303] Dim k As String = BANanoShared.MvField(mt,1, {86} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [304] Dim v As String = BANanoShared.MvField(mt,2, {87} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [305] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [306] Next 
}
// End Sub
};

// [310] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [311] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [312] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [313] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [314] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [315] sbAttr.Append(k).Append( {88} ).Append(v).Append( {89} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [316] Next 
}
// [317] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [318] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [322] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [323] If mElement <> Null Then 
if (_B._melement!=null) {
// [324] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [325] End If 
}
// [326] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [330] public Sub getCaption() As String 
_B.getcaption=function() {
// [331] Return mCaption 
return _B._mcaption;
// End Sub
};

// [334] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [335] AddAttr( {90} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [336] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [339] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [340] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [343] public Sub setBackgroundHeight(varBackgroundHeight As String) 
_B.setbackgroundheight=function(_varbackgroundheight) {
// [344] AddAttr( {91} , varBackgroundHeight) 
_B.addattr("background-height",_varbackgroundheight,_B);
// [345] stBackgroundHeight = varBackgroundHeight 
_B._stbackgroundheight=_varbackgroundheight;
// End Sub
};

// [348] public Sub getBackgroundHeight() As String 
_B.getbackgroundheight=function() {
// [349] Return stBackgroundHeight 
return _B._stbackgroundheight;
// End Sub
};

// [352] public Sub setBackgroundPosition(varBackgroundPosition As String) 
_B.setbackgroundposition=function(_varbackgroundposition) {
// [353] AddAttr( {92} , varBackgroundPosition) 
_B.addattr("background-position",_varbackgroundposition,_B);
// [354] stBackgroundPosition = varBackgroundPosition 
_B._stbackgroundposition=_varbackgroundposition;
// End Sub
};

// [357] public Sub getBackgroundPosition() As String 
_B.getbackgroundposition=function() {
// [358] Return stBackgroundPosition 
return _B._stbackgroundposition;
// End Sub
};

// [361] public Sub setBackgroundUrl(varBackgroundUrl As String) 
_B.setbackgroundurl=function(_varbackgroundurl) {
// [362] AddAttr( {93} , varBackgroundUrl) 
_B.addattr("background-url",_varbackgroundurl,_B);
// [363] stBackgroundUrl = varBackgroundUrl 
_B._stbackgroundurl=_varbackgroundurl;
// End Sub
};

// [366] public Sub getBackgroundUrl() As String 
_B.getbackgroundurl=function() {
// [367] Return stBackgroundUrl 
return _B._stbackgroundurl;
// End Sub
};

// [370] public Sub setBackgroundWidth(varBackgroundWidth As String) 
_B.setbackgroundwidth=function(_varbackgroundwidth) {
// [371] AddAttr( {94} , varBackgroundWidth) 
_B.addattr("background-width",_varbackgroundwidth,_B);
// [372] stBackgroundWidth = varBackgroundWidth 
_B._stbackgroundwidth=_varbackgroundwidth;
// End Sub
};

// [375] public Sub getBackgroundWidth() As String 
_B.getbackgroundwidth=function() {
// [376] Return stBackgroundWidth 
return _B._stbackgroundwidth;
// End Sub
};

// [379] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [380] AddAttr( {95} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [381] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [384] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [385] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [388] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [389] AddAttr( {96} , varHeight) 
_B.addattr("height",_varheight,_B);
// [390] stHeight = varHeight 
_B._stheight=_varheight;
// End Sub
};

// [393] public Sub getHeight() As String 
_B.getheight=function() {
// [394] Return stHeight 
return _B._stheight;
// End Sub
};

// [397] public Sub setMode(varMode As String) 
_B.setmode=function(_varmode) {
// [398] AddAttr( {97} , varMode) 
_B.addattr("mode",_varmode,_B);
// [399] stMode = varMode 
_B._stmode=_varmode;
// End Sub
};

// [402] public Sub getMode() As String 
_B.getmode=function() {
// [403] Return stMode 
return _B._stmode;
// End Sub
};

// [406] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [407] AddAttr( {98} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [408] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [411] public Sub getPadding() As String 
_B.getpadding=function() {
// [412] Return stPadding 
return _B._stpadding;
// End Sub
};

// [415] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [416] AddAttr( {99} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [417] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [420] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [421] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [424] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [425] AddAttr( {100} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [426] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [429] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [430] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [433] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [434] AddAttr( {101} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [435] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [438] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [439] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [442] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [443] AddAttr( {102} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [444] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [447] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [448] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [451] public Sub setVerticalAlign(varVerticalAlign As String) 
_B.setverticalalign=function(_varverticalalign) {
// [452] AddAttr( {103} , varVerticalAlign) 
_B.addattr("vertical-align",_varverticalalign,_B);
// [453] stVerticalAlign = varVerticalAlign 
_B._stverticalalign=_varverticalalign;
// End Sub
};

// [456] public Sub getVerticalAlign() As String 
_B.getverticalalign=function() {
// [457] Return stVerticalAlign 
return _B._stverticalalign;
// End Sub
};

// [460] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [461] AddAttr( {104} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [462] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [465] public Sub getWidth() As String 
_B.getwidth=function() {
// [466] Return stWidth 
return _B._stwidth;
// End Sub
};

// [471] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [472] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJImage  =========================== */
function banano_bananomjml_mjimage() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-image";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stalt="";

_B._stborder="";

_B._stborderradius="";

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stfluidonmobile="";

_B._stheight="";

_B._sthref="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._strel="";

_B._stsrc="";

_B._stsrcset="";

_B._sttarget="";

_B._sttitle="";

_B._stusemap="";

_B._stwidth="";

// [72] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [73] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [74] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [75] mCallBack = CallBack 
_B._mcallback=_callback;
// [76] classList.Initialize 
_B._classlist={};
// [77] styleList.Initialize 
_B._stylelist={};
// [78] attributeList.Initialize 
_B._attributelist={};
// [79] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [83] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [84] mTarget = Target 
_B._mtarget=_target;
// [85] If Props <> Null Then 
if (_props!=null) {
// [86] mClasses = Props.Get( {29} ) 
_B._mclasses=_props["Classes"];
// [87] mAttributes = Props.Get( {30} ) 
_B._mattributes=_props["Attributes"];
// [88] mStyle = Props.Get( {31} ) 
_B._mstyle=_props["Style"];
// [89] mCaption = Props.Get( {32} ) 
_B._mcaption=_props["Caption"];
// [90] stAlign = Props.Get( {33} ) 
_B._stalign=_props["Align"];
// [91] stAlt = Props.Get( {34} ) 
_B._stalt=_props["Alt"];
// [92] stBorder = Props.Get( {35} ) 
_B._stborder=_props["Border"];
// [93] stBorderRadius = Props.Get( {36} ) 
_B._stborderradius=_props["BorderRadius"];
// [94] stContainerBackgroundColor = Props.Get( {37} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [95] stCssClass = Props.Get( {38} ) 
_B._stcssclass=_props["CssClass"];
// [96] stFluidOnMobile = Props.Get( {39} ) 
_B._stfluidonmobile=_props["FluidOnMobile"];
// [97] stHeight = Props.Get( {40} ) 
_B._stheight=_props["Height"];
// [98] stHref = Props.Get( {41} ) 
_B._sthref=_props["Href"];
// [99] stPadding = Props.Get( {42} ) 
_B._stpadding=_props["Padding"];
// [100] stPaddingBottom = Props.Get( {43} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [101] stPaddingLeft = Props.Get( {44} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [102] stPaddingRight = Props.Get( {45} ) 
_B._stpaddingright=_props["PaddingRight"];
// [103] stPaddingTop = Props.Get( {46} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [104] stRel = Props.Get( {47} ) 
_B._strel=_props["Rel"];
// [105] stSrc = Props.Get( {48} ) 
_B._stsrc=_props["Src"];
// [106] stSrcset = Props.Get( {49} ) 
_B._stsrcset=_props["Srcset"];
// [107] stTarget = Props.Get( {50} ) 
_B._sttarget=_props["Target"];
// [108] stTitle = Props.Get( {51} ) 
_B._sttitle=_props["Title"];
// [109] stUsemap = Props.Get( {52} ) 
_B._stusemap=_props["Usemap"];
// [110] stWidth = Props.Get( {53} ) 
_B._stwidth=_props["Width"];
// [111] End If 
}
// [113] AddAttr( {54} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [114] AddAttr( {55} , stAlt) 
_B.addattr("alt",_B._stalt,_B);
// [115] AddAttr( {56} , stBorder) 
_B.addattr("border",_B._stborder,_B);
// [116] AddAttr( {57} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [117] AddAttr( {58} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [118] AddAttr( {59} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [119] AddAttr( {60} , stFluidOnMobile) 
_B.addattr("fluid-on-mobile",_B._stfluidonmobile,_B);
// [120] AddAttr( {61} , stHeight) 
_B.addattr("height",_B._stheight,_B);
// [121] AddAttr( {62} , stHref) 
_B.addattr("href",_B._sthref,_B);
// [122] AddAttr( {63} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [123] AddAttr( {64} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [124] AddAttr( {65} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [125] AddAttr( {66} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [126] AddAttr( {67} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [127] AddAttr( {68} , stRel) 
_B.addattr("rel",_B._strel,_B);
// [128] AddAttr( {69} , stSrc) 
_B.addattr("src",_B._stsrc,_B);
// [129] AddAttr( {70} , stSrcset) 
_B.addattr("srcset",_B._stsrcset,_B);
// [130] AddAttr( {71} , stTarget) 
_B.addattr("target",_B._sttarget,_B);
// [131] AddAttr( {72} , stTitle) 
_B.addattr("title",_B._sttitle,_B);
// [132] AddAttr( {73} , stUsemap) 
_B.addattr("usemap",_B._stusemap,_B);
// [133] AddAttr( {74} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [134] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [135] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [136] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [139] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [140] mElement = mTarget.Append(strHTML).Get( {75} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [146] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [148] Dim className As String = BANanoShared.JoinMapKeys(classList, {76} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [149] AddAttr( {77} , className) 
_B.addattr("class",_classname,_B);
// [151] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [152] AddAttr( {78} , styleName) 
_B.addattr("style",_stylename,_B);
// [154] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [155] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [156] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [157] Return rslt 
return _rslt;
// End Sub
};

// [161] Sub AddBR 
_B.addbr=function() {
// [162] sbText.Append( {79} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [166] Sub AddHR 
_B.addhr=function() {
// [167] sbText.Append( {80} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [171] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [172] Return mElement 
return _B._melement;
// End Sub
};

// [176] public Sub getID() As String 
_B.getid=function() {
// [177] Return mName 
return _B._mname;
// End Sub
};

// [181] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [182] mTarget = BANano.GetElement( {81} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [183] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [187] public Sub Remove() 
_B.remove=function() {
// [188] mElement.Remove 
_B._melement.remove();
// [189] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [193] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [194] If mElement <> Null Then 
if (_B._melement!=null) {
// [195] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [196] End If 
}
// End Sub
};

// [200] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [201] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [202] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [203] varClass = varClass.trim 
_varclass=_varclass.trim();
// [204] if varClass = {82} Then Return 
if (_varclass=="") { return ;}
// [205] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [206] Dim mxItems As List = BANanoShared.StrParse( {83} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [207] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [208] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [209] Next 
}
// End Sub
};

// [213] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [214] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [215] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [216] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [217] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [218] varClass = varClass.trim 
_varclass=_varclass.trim();
// [219] if varClass = {84} Then Return 
if (_varclass=="") { return ;}
// [220] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [221] Dim mxItems As List = BANanoShared.StrParse( {85} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [222] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [223] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [224] Next 
}
// End Sub
};

// [228] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [229] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [230] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [231] If mElement <> Null Then 
if (_B._melement!=null) {
// [232] Dim aStyle As Map = CreateMap() 
_astyle={};
// [233] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [234] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [235] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [236] End If 
}
// [237] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [241] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [242] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [243] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [245] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [246] If varValue = True Then 
if (_varvalue==true) {
// [247] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [248] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [249] End If 
}
// [250] Else 
} else {
// [252] If varValue.StartsWith( {86} ) Then 
if (_varvalue.startsWith(":")) {
// [253] If varValue.StartsWith( {87} ) Then 
if (_varvalue.startsWith("$")) {
// [254] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [255] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [256] Else 
} else {
// [257] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [258] If rname.Contains( {88} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [259] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [260] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [261] End If 
}
// [262] Else 
} else {
// [264] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [265] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [266] Select Case varProp 
switch ("" + _varprop) {
// [267] Case {89} , {90} , {91} , {92} , {93} , {94} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [268] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [269] End Select 
break;
}
// [270] End If 
}
// [271] End If 
}
// [272] Return 
return;
// End Sub
};

// [276] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [277] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [278] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [279] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [280] sbClass.Append(k).Append( {95} ) 
_sbclass.append(_k).append(" ");
// [281] Next 
}
// [282] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [283] Return mClasses 
return _B._mclasses;
// End Sub
};

// [287] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [288] If mElement <> Null Then 
if (_B._melement!=null) {
// [289] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [290] End If 
}
// [291] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [292] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [293] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [294] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [295] Next 
}
// End Sub
};

// [299] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [300] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [301] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [302] sbStyle.Append( {96} ) 
_sbstyle.append("{");
// [303] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [304] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [305] sbStyle.Append(k).Append( {97} ).Append(v).Append( {98} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [306] Next 
}
// [307] sbStyle.Append( {99} ) 
_sbstyle.append("}");
// [308] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [309] Return mStyle 
return _B._mstyle;
// End Sub
};

// [313] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [314] Dim mxItems As List = BANanoShared.StrParse( {100} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [315] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [316] Dim k As String = BANanoShared.MvField(mt,1, {101} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [317] Dim v As String = BANanoShared.MvField(mt,2, {102} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [318] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [319] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [320] Next 
}
// End Sub
};

// [324] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [325] Dim mxItems As List = BANanoShared.StrParse( {103} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [326] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [327] Dim k As String = BANanoShared.MvField(mt,1, {104} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [328] Dim v As String = BANanoShared.MvField(mt,2, {105} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [329] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [330] Next 
}
// End Sub
};

// [334] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [335] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [336] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [337] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [338] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [339] sbAttr.Append(k).Append( {106} ).Append(v).Append( {107} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [340] Next 
}
// [341] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [342] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [346] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [347] If mElement <> Null Then 
if (_B._melement!=null) {
// [348] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [349] End If 
}
// [350] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [354] public Sub getCaption() As String 
_B.getcaption=function() {
// [355] Return mCaption 
return _B._mcaption;
// End Sub
};

// [358] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [359] AddAttr( {108} , varAlign) 
_B.addattr("align",_varalign,_B);
// [360] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [363] public Sub getAlign() As String 
_B.getalign=function() {
// [364] Return stAlign 
return _B._stalign;
// End Sub
};

// [367] public Sub setAlt(varAlt As String) 
_B.setalt=function(_varalt) {
// [368] AddAttr( {109} , varAlt) 
_B.addattr("alt",_varalt,_B);
// [369] stAlt = varAlt 
_B._stalt=_varalt;
// End Sub
};

// [372] public Sub getAlt() As String 
_B.getalt=function() {
// [373] Return stAlt 
return _B._stalt;
// End Sub
};

// [376] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [377] AddAttr( {110} , varBorder) 
_B.addattr("border",_varborder,_B);
// [378] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [381] public Sub getBorder() As String 
_B.getborder=function() {
// [382] Return stBorder 
return _B._stborder;
// End Sub
};

// [385] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [386] AddAttr( {111} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [387] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [390] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [391] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [394] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [395] AddAttr( {112} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [396] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [399] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [400] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [403] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [404] AddAttr( {113} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [405] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [408] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [409] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [412] public Sub setFluidOnMobile(varFluidOnMobile As String) 
_B.setfluidonmobile=function(_varfluidonmobile) {
// [413] AddAttr( {114} , varFluidOnMobile) 
_B.addattr("fluid-on-mobile",_varfluidonmobile,_B);
// [414] stFluidOnMobile = varFluidOnMobile 
_B._stfluidonmobile=_varfluidonmobile;
// End Sub
};

// [417] public Sub getFluidOnMobile() As String 
_B.getfluidonmobile=function() {
// [418] Return stFluidOnMobile 
return _B._stfluidonmobile;
// End Sub
};

// [421] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [422] AddAttr( {115} , varHeight) 
_B.addattr("height",_varheight,_B);
// [423] stHeight = varHeight 
_B._stheight=_varheight;
// End Sub
};

// [426] public Sub getHeight() As String 
_B.getheight=function() {
// [427] Return stHeight 
return _B._stheight;
// End Sub
};

// [430] public Sub setHref(varHref As String) 
_B.sethref=function(_varhref) {
// [431] AddAttr( {116} , varHref) 
_B.addattr("href",_varhref,_B);
// [432] stHref = varHref 
_B._sthref=_varhref;
// End Sub
};

// [435] public Sub getHref() As String 
_B.gethref=function() {
// [436] Return stHref 
return _B._sthref;
// End Sub
};

// [439] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [440] AddAttr( {117} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [441] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [444] public Sub getPadding() As String 
_B.getpadding=function() {
// [445] Return stPadding 
return _B._stpadding;
// End Sub
};

// [448] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [449] AddAttr( {118} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [450] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [453] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [454] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [457] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [458] AddAttr( {119} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [459] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [462] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [463] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [466] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [467] AddAttr( {120} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [468] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [471] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [472] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [475] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [476] AddAttr( {121} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [477] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [480] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [481] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [484] public Sub setRel(varRel As String) 
_B.setrel=function(_varrel) {
// [485] AddAttr( {122} , varRel) 
_B.addattr("rel",_varrel,_B);
// [486] stRel = varRel 
_B._strel=_varrel;
// End Sub
};

// [489] public Sub getRel() As String 
_B.getrel=function() {
// [490] Return stRel 
return _B._strel;
// End Sub
};

// [493] public Sub setSrc(varSrc As String) 
_B.setsrc=function(_varsrc) {
// [494] AddAttr( {123} , varSrc) 
_B.addattr("src",_varsrc,_B);
// [495] stSrc = varSrc 
_B._stsrc=_varsrc;
// End Sub
};

// [498] public Sub getSrc() As String 
_B.getsrc=function() {
// [499] Return stSrc 
return _B._stsrc;
// End Sub
};

// [502] public Sub setSrcset(varSrcset As String) 
_B.setsrcset=function(_varsrcset) {
// [503] AddAttr( {124} , varSrcset) 
_B.addattr("srcset",_varsrcset,_B);
// [504] stSrcset = varSrcset 
_B._stsrcset=_varsrcset;
// End Sub
};

// [507] public Sub getSrcset() As String 
_B.getsrcset=function() {
// [508] Return stSrcset 
return _B._stsrcset;
// End Sub
};

// [511] public Sub setTarget(varTarget As String) 
_B.settarget=function(_vartarget) {
// [512] AddAttr( {125} , varTarget) 
_B.addattr("target",_vartarget,_B);
// [513] stTarget = varTarget 
_B._sttarget=_vartarget;
// End Sub
};

// [516] public Sub getTarget() As String 
_B.gettarget=function() {
// [517] Return stTarget 
return _B._sttarget;
// End Sub
};

// [520] public Sub setTitle(varTitle As String) 
_B.settitle=function(_vartitle) {
// [521] AddAttr( {126} , varTitle) 
_B.addattr("title",_vartitle,_B);
// [522] stTitle = varTitle 
_B._sttitle=_vartitle;
// End Sub
};

// [525] public Sub getTitle() As String 
_B.gettitle=function() {
// [526] Return stTitle 
return _B._sttitle;
// End Sub
};

// [529] public Sub setUsemap(varUsemap As String) 
_B.setusemap=function(_varusemap) {
// [530] AddAttr( {127} , varUsemap) 
_B.addattr("usemap",_varusemap,_B);
// [531] stUsemap = varUsemap 
_B._stusemap=_varusemap;
// End Sub
};

// [534] public Sub getUsemap() As String 
_B.getusemap=function() {
// [535] Return stUsemap 
return _B._stusemap;
// End Sub
};

// [538] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [539] AddAttr( {128} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [540] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [543] public Sub getWidth() As String 
_B.getwidth=function() {
// [544] Return stWidth 
return _B._stwidth;
// End Sub
};

// [549] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [550] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJNavBar  =========================== */
function banano_bananomjml_mjnavbar() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-navbar";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stbase="";

_B._stcssclass="";

_B._sthamburger="";

_B._sticoalign="";

_B._sticoclose="";

_B._sticocolor="";

_B._sticofontfamily="";

_B._sticofontsize="";

_B._sticolineheight="";

_B._sticoopen="";

_B._sticopadding="";

_B._sticopaddingbottom="";

_B._sticopaddingleft="";

_B._sticopaddingright="";

_B._sticopaddingtop="";

_B._sticotextdecoration="";

_B._sticotexttransform="";

// [66] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [67] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [68] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [69] mCallBack = CallBack 
_B._mcallback=_callback;
// [70] classList.Initialize 
_B._classlist={};
// [71] styleList.Initialize 
_B._stylelist={};
// [72] attributeList.Initialize 
_B._attributelist={};
// [73] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [77] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [78] mTarget = Target 
_B._mtarget=_target;
// [79] If Props <> Null Then 
if (_props!=null) {
// [80] mClasses = Props.Get( {26} ) 
_B._mclasses=_props["Classes"];
// [81] mAttributes = Props.Get( {27} ) 
_B._mattributes=_props["Attributes"];
// [82] mStyle = Props.Get( {28} ) 
_B._mstyle=_props["Style"];
// [83] mCaption = Props.Get( {29} ) 
_B._mcaption=_props["Caption"];
// [84] stAlign = Props.Get( {30} ) 
_B._stalign=_props["Align"];
// [85] stBase = Props.Get( {31} ) 
_B._stbase=_props["Base"];
// [86] stCssClass = Props.Get( {32} ) 
_B._stcssclass=_props["CssClass"];
// [87] stHamburger = Props.Get( {33} ) 
_B._sthamburger=_props["Hamburger"];
// [88] stIcoAlign = Props.Get( {34} ) 
_B._sticoalign=_props["IcoAlign"];
// [89] stIcoClose = Props.Get( {35} ) 
_B._sticoclose=_props["IcoClose"];
// [90] stIcoColor = Props.Get( {36} ) 
_B._sticocolor=_props["IcoColor"];
// [91] stIcoFontFamily = Props.Get( {37} ) 
_B._sticofontfamily=_props["IcoFontFamily"];
// [92] stIcoFontSize = Props.Get( {38} ) 
_B._sticofontsize=_props["IcoFontSize"];
// [93] stIcoLineHeight = Props.Get( {39} ) 
_B._sticolineheight=_props["IcoLineHeight"];
// [94] stIcoOpen = Props.Get( {40} ) 
_B._sticoopen=_props["IcoOpen"];
// [95] stIcoPadding = Props.Get( {41} ) 
_B._sticopadding=_props["IcoPadding"];
// [96] stIcoPaddingBottom = Props.Get( {42} ) 
_B._sticopaddingbottom=_props["IcoPaddingBottom"];
// [97] stIcoPaddingLeft = Props.Get( {43} ) 
_B._sticopaddingleft=_props["IcoPaddingLeft"];
// [98] stIcoPaddingRight = Props.Get( {44} ) 
_B._sticopaddingright=_props["IcoPaddingRight"];
// [99] stIcoPaddingTop = Props.Get( {45} ) 
_B._sticopaddingtop=_props["IcoPaddingTop"];
// [100] stIcoTextDecoration = Props.Get( {46} ) 
_B._sticotextdecoration=_props["IcoTextDecoration"];
// [101] stIcoTextTransform = Props.Get( {47} ) 
_B._sticotexttransform=_props["IcoTextTransform"];
// [102] End If 
}
// [104] AddAttr( {48} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [105] AddAttr( {49} , stBase) 
_B.addattr("base",_B._stbase,_B);
// [106] AddAttr( {50} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [107] AddAttr( {51} , stHamburger) 
_B.addattr("hamburger",_B._sthamburger,_B);
// [108] AddAttr( {52} , stIcoAlign) 
_B.addattr("ico-align",_B._sticoalign,_B);
// [109] AddAttr( {53} , stIcoClose) 
_B.addattr("ico-close",_B._sticoclose,_B);
// [110] AddAttr( {54} , stIcoColor) 
_B.addattr("ico-color",_B._sticocolor,_B);
// [111] AddAttr( {55} , stIcoFontFamily) 
_B.addattr("ico-font-family",_B._sticofontfamily,_B);
// [112] AddAttr( {56} , stIcoFontSize) 
_B.addattr("ico-font-size",_B._sticofontsize,_B);
// [113] AddAttr( {57} , stIcoLineHeight) 
_B.addattr("ico-line-height",_B._sticolineheight,_B);
// [114] AddAttr( {58} , stIcoOpen) 
_B.addattr("ico-open",_B._sticoopen,_B);
// [115] AddAttr( {59} , stIcoPadding) 
_B.addattr("ico-padding",_B._sticopadding,_B);
// [116] AddAttr( {60} , stIcoPaddingBottom) 
_B.addattr("ico-padding-bottom",_B._sticopaddingbottom,_B);
// [117] AddAttr( {61} , stIcoPaddingLeft) 
_B.addattr("ico-padding-left",_B._sticopaddingleft,_B);
// [118] AddAttr( {62} , stIcoPaddingRight) 
_B.addattr("ico-padding-right",_B._sticopaddingright,_B);
// [119] AddAttr( {63} , stIcoPaddingTop) 
_B.addattr("ico-padding-top",_B._sticopaddingtop,_B);
// [120] AddAttr( {64} , stIcoTextDecoration) 
_B.addattr("ico-text-decoration",_B._sticotextdecoration,_B);
// [121] AddAttr( {65} , stIcoTextTransform) 
_B.addattr("ico-text-transform",_B._sticotexttransform,_B);
// [122] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [123] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [124] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [127] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [128] mElement = mTarget.Append(strHTML).Get( {66} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [134] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [136] Dim className As String = BANanoShared.JoinMapKeys(classList, {67} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [137] AddAttr( {68} , className) 
_B.addattr("class",_classname,_B);
// [139] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [140] AddAttr( {69} , styleName) 
_B.addattr("style",_stylename,_B);
// [142] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [143] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [144] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [145] Return rslt 
return _rslt;
// End Sub
};

// [149] Sub AddBR 
_B.addbr=function() {
// [150] sbText.Append( {70} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [154] Sub AddHR 
_B.addhr=function() {
// [155] sbText.Append( {71} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [159] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [160] Return mElement 
return _B._melement;
// End Sub
};

// [164] public Sub getID() As String 
_B.getid=function() {
// [165] Return mName 
return _B._mname;
// End Sub
};

// [169] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [170] mTarget = BANano.GetElement( {72} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [171] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [175] public Sub Remove() 
_B.remove=function() {
// [176] mElement.Remove 
_B._melement.remove();
// [177] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [181] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [182] If mElement <> Null Then 
if (_B._melement!=null) {
// [183] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [184] End If 
}
// End Sub
};

// [188] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [189] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [190] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [191] varClass = varClass.trim 
_varclass=_varclass.trim();
// [192] if varClass = {73} Then Return 
if (_varclass=="") { return ;}
// [193] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [194] Dim mxItems As List = BANanoShared.StrParse( {74} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [195] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [196] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [197] Next 
}
// End Sub
};

// [201] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [202] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [203] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [204] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [205] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [206] varClass = varClass.trim 
_varclass=_varclass.trim();
// [207] if varClass = {75} Then Return 
if (_varclass=="") { return ;}
// [208] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [209] Dim mxItems As List = BANanoShared.StrParse( {76} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [210] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [211] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [212] Next 
}
// End Sub
};

// [216] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [217] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [218] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [219] If mElement <> Null Then 
if (_B._melement!=null) {
// [220] Dim aStyle As Map = CreateMap() 
_astyle={};
// [221] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [222] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [223] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [224] End If 
}
// [225] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [229] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [230] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [231] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [233] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [234] If varValue = True Then 
if (_varvalue==true) {
// [235] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [236] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [237] End If 
}
// [238] Else 
} else {
// [240] If varValue.StartsWith( {77} ) Then 
if (_varvalue.startsWith(":")) {
// [241] If varValue.StartsWith( {78} ) Then 
if (_varvalue.startsWith("$")) {
// [242] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [243] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [244] Else 
} else {
// [245] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [246] If rname.Contains( {79} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [247] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [248] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [249] End If 
}
// [250] Else 
} else {
// [252] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [253] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [254] Select Case varProp 
switch ("" + _varprop) {
// [255] Case {80} , {81} , {82} , {83} , {84} , {85} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [256] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [257] End Select 
break;
}
// [258] End If 
}
// [259] End If 
}
// [260] Return 
return;
// End Sub
};

// [264] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [265] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [266] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [267] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [268] sbClass.Append(k).Append( {86} ) 
_sbclass.append(_k).append(" ");
// [269] Next 
}
// [270] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [271] Return mClasses 
return _B._mclasses;
// End Sub
};

// [275] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [276] If mElement <> Null Then 
if (_B._melement!=null) {
// [277] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [278] End If 
}
// [279] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [280] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [281] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [282] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [283] Next 
}
// End Sub
};

// [287] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [288] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [289] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [290] sbStyle.Append( {87} ) 
_sbstyle.append("{");
// [291] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [292] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [293] sbStyle.Append(k).Append( {88} ).Append(v).Append( {89} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [294] Next 
}
// [295] sbStyle.Append( {90} ) 
_sbstyle.append("}");
// [296] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [297] Return mStyle 
return _B._mstyle;
// End Sub
};

// [301] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [302] Dim mxItems As List = BANanoShared.StrParse( {91} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [303] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [304] Dim k As String = BANanoShared.MvField(mt,1, {92} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [305] Dim v As String = BANanoShared.MvField(mt,2, {93} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [306] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [307] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [308] Next 
}
// End Sub
};

// [312] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [313] Dim mxItems As List = BANanoShared.StrParse( {94} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [314] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [315] Dim k As String = BANanoShared.MvField(mt,1, {95} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [316] Dim v As String = BANanoShared.MvField(mt,2, {96} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [317] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [318] Next 
}
// End Sub
};

// [322] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [323] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [324] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [325] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [326] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [327] sbAttr.Append(k).Append( {97} ).Append(v).Append( {98} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [328] Next 
}
// [329] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [330] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [334] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [335] If mElement <> Null Then 
if (_B._melement!=null) {
// [336] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [337] End If 
}
// [338] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [342] public Sub getCaption() As String 
_B.getcaption=function() {
// [343] Return mCaption 
return _B._mcaption;
// End Sub
};

// [346] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [347] AddAttr( {99} , varAlign) 
_B.addattr("align",_varalign,_B);
// [348] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [351] public Sub getAlign() As String 
_B.getalign=function() {
// [352] Return stAlign 
return _B._stalign;
// End Sub
};

// [355] public Sub setBase(varBase As String) 
_B.setbase=function(_varbase) {
// [356] AddAttr( {100} , varBase) 
_B.addattr("base",_varbase,_B);
// [357] stBase = varBase 
_B._stbase=_varbase;
// End Sub
};

// [360] public Sub getBase() As String 
_B.getbase=function() {
// [361] Return stBase 
return _B._stbase;
// End Sub
};

// [364] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [365] AddAttr( {101} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [366] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [369] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [370] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [373] public Sub setHamburger(varHamburger As String) 
_B.sethamburger=function(_varhamburger) {
// [374] AddAttr( {102} , varHamburger) 
_B.addattr("hamburger",_varhamburger,_B);
// [375] stHamburger = varHamburger 
_B._sthamburger=_varhamburger;
// End Sub
};

// [378] public Sub getHamburger() As String 
_B.gethamburger=function() {
// [379] Return stHamburger 
return _B._sthamburger;
// End Sub
};

// [382] public Sub setIcoAlign(varIcoAlign As String) 
_B.seticoalign=function(_varicoalign) {
// [383] AddAttr( {103} , varIcoAlign) 
_B.addattr("ico-align",_varicoalign,_B);
// [384] stIcoAlign = varIcoAlign 
_B._sticoalign=_varicoalign;
// End Sub
};

// [387] public Sub getIcoAlign() As String 
_B.geticoalign=function() {
// [388] Return stIcoAlign 
return _B._sticoalign;
// End Sub
};

// [391] public Sub setIcoClose(varIcoClose As String) 
_B.seticoclose=function(_varicoclose) {
// [392] AddAttr( {104} , varIcoClose) 
_B.addattr("ico-close",_varicoclose,_B);
// [393] stIcoClose = varIcoClose 
_B._sticoclose=_varicoclose;
// End Sub
};

// [396] public Sub getIcoClose() As String 
_B.geticoclose=function() {
// [397] Return stIcoClose 
return _B._sticoclose;
// End Sub
};

// [400] public Sub setIcoColor(varIcoColor As String) 
_B.seticocolor=function(_varicocolor) {
// [401] AddAttr( {105} , varIcoColor) 
_B.addattr("ico-color",_varicocolor,_B);
// [402] stIcoColor = varIcoColor 
_B._sticocolor=_varicocolor;
// End Sub
};

// [405] public Sub getIcoColor() As String 
_B.geticocolor=function() {
// [406] Return stIcoColor 
return _B._sticocolor;
// End Sub
};

// [409] public Sub setIcoFontFamily(varIcoFontFamily As String) 
_B.seticofontfamily=function(_varicofontfamily) {
// [410] AddAttr( {106} , varIcoFontFamily) 
_B.addattr("ico-font-family",_varicofontfamily,_B);
// [411] stIcoFontFamily = varIcoFontFamily 
_B._sticofontfamily=_varicofontfamily;
// End Sub
};

// [414] public Sub getIcoFontFamily() As String 
_B.geticofontfamily=function() {
// [415] Return stIcoFontFamily 
return _B._sticofontfamily;
// End Sub
};

// [418] public Sub setIcoFontSize(varIcoFontSize As String) 
_B.seticofontsize=function(_varicofontsize) {
// [419] AddAttr( {107} , varIcoFontSize) 
_B.addattr("ico-font-size",_varicofontsize,_B);
// [420] stIcoFontSize = varIcoFontSize 
_B._sticofontsize=_varicofontsize;
// End Sub
};

// [423] public Sub getIcoFontSize() As String 
_B.geticofontsize=function() {
// [424] Return stIcoFontSize 
return _B._sticofontsize;
// End Sub
};

// [427] public Sub setIcoLineHeight(varIcoLineHeight As String) 
_B.seticolineheight=function(_varicolineheight) {
// [428] AddAttr( {108} , varIcoLineHeight) 
_B.addattr("ico-line-height",_varicolineheight,_B);
// [429] stIcoLineHeight = varIcoLineHeight 
_B._sticolineheight=_varicolineheight;
// End Sub
};

// [432] public Sub getIcoLineHeight() As String 
_B.geticolineheight=function() {
// [433] Return stIcoLineHeight 
return _B._sticolineheight;
// End Sub
};

// [436] public Sub setIcoOpen(varIcoOpen As String) 
_B.seticoopen=function(_varicoopen) {
// [437] AddAttr( {109} , varIcoOpen) 
_B.addattr("ico-open",_varicoopen,_B);
// [438] stIcoOpen = varIcoOpen 
_B._sticoopen=_varicoopen;
// End Sub
};

// [441] public Sub getIcoOpen() As String 
_B.geticoopen=function() {
// [442] Return stIcoOpen 
return _B._sticoopen;
// End Sub
};

// [445] public Sub setIcoPadding(varIcoPadding As String) 
_B.seticopadding=function(_varicopadding) {
// [446] AddAttr( {110} , varIcoPadding) 
_B.addattr("ico-padding",_varicopadding,_B);
// [447] stIcoPadding = varIcoPadding 
_B._sticopadding=_varicopadding;
// End Sub
};

// [450] public Sub getIcoPadding() As String 
_B.geticopadding=function() {
// [451] Return stIcoPadding 
return _B._sticopadding;
// End Sub
};

// [454] public Sub setIcoPaddingBottom(varIcoPaddingBottom As String) 
_B.seticopaddingbottom=function(_varicopaddingbottom) {
// [455] AddAttr( {111} , varIcoPaddingBottom) 
_B.addattr("ico-padding-bottom",_varicopaddingbottom,_B);
// [456] stIcoPaddingBottom = varIcoPaddingBottom 
_B._sticopaddingbottom=_varicopaddingbottom;
// End Sub
};

// [459] public Sub getIcoPaddingBottom() As String 
_B.geticopaddingbottom=function() {
// [460] Return stIcoPaddingBottom 
return _B._sticopaddingbottom;
// End Sub
};

// [463] public Sub setIcoPaddingLeft(varIcoPaddingLeft As String) 
_B.seticopaddingleft=function(_varicopaddingleft) {
// [464] AddAttr( {112} , varIcoPaddingLeft) 
_B.addattr("ico-padding-left",_varicopaddingleft,_B);
// [465] stIcoPaddingLeft = varIcoPaddingLeft 
_B._sticopaddingleft=_varicopaddingleft;
// End Sub
};

// [468] public Sub getIcoPaddingLeft() As String 
_B.geticopaddingleft=function() {
// [469] Return stIcoPaddingLeft 
return _B._sticopaddingleft;
// End Sub
};

// [472] public Sub setIcoPaddingRight(varIcoPaddingRight As String) 
_B.seticopaddingright=function(_varicopaddingright) {
// [473] AddAttr( {113} , varIcoPaddingRight) 
_B.addattr("ico-padding-right",_varicopaddingright,_B);
// [474] stIcoPaddingRight = varIcoPaddingRight 
_B._sticopaddingright=_varicopaddingright;
// End Sub
};

// [477] public Sub getIcoPaddingRight() As String 
_B.geticopaddingright=function() {
// [478] Return stIcoPaddingRight 
return _B._sticopaddingright;
// End Sub
};

// [481] public Sub setIcoPaddingTop(varIcoPaddingTop As String) 
_B.seticopaddingtop=function(_varicopaddingtop) {
// [482] AddAttr( {114} , varIcoPaddingTop) 
_B.addattr("ico-padding-top",_varicopaddingtop,_B);
// [483] stIcoPaddingTop = varIcoPaddingTop 
_B._sticopaddingtop=_varicopaddingtop;
// End Sub
};

// [486] public Sub getIcoPaddingTop() As String 
_B.geticopaddingtop=function() {
// [487] Return stIcoPaddingTop 
return _B._sticopaddingtop;
// End Sub
};

// [490] public Sub setIcoTextDecoration(varIcoTextDecoration As String) 
_B.seticotextdecoration=function(_varicotextdecoration) {
// [491] AddAttr( {115} , varIcoTextDecoration) 
_B.addattr("ico-text-decoration",_varicotextdecoration,_B);
// [492] stIcoTextDecoration = varIcoTextDecoration 
_B._sticotextdecoration=_varicotextdecoration;
// End Sub
};

// [495] public Sub getIcoTextDecoration() As String 
_B.geticotextdecoration=function() {
// [496] Return stIcoTextDecoration 
return _B._sticotextdecoration;
// End Sub
};

// [499] public Sub setIcoTextTransform(varIcoTextTransform As String) 
_B.seticotexttransform=function(_varicotexttransform) {
// [500] AddAttr( {116} , varIcoTextTransform) 
_B.addattr("ico-text-transform",_varicotexttransform,_B);
// [501] stIcoTextTransform = varIcoTextTransform 
_B._sticotexttransform=_varicotexttransform;
// End Sub
};

// [504] public Sub getIcoTextTransform() As String 
_B.geticotexttransform=function() {
// [505] Return stIcoTextTransform 
return _B._sticotexttransform;
// End Sub
};

// [510] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [511] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJNavBarLink  =========================== */
function banano_bananomjml_mjnavbarlink() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-navbar-link";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stfontstyle="";

_B._stfontweight="";

_B._sthref="";

_B._stlineheight="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._strel="";

_B._sttarget="";

_B._sttextdecoration="";

_B._sttexttransform="";

// [64] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [65] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [66] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [67] mCallBack = CallBack 
_B._mcallback=_callback;
// [68] classList.Initialize 
_B._classlist={};
// [69] styleList.Initialize 
_B._stylelist={};
// [70] attributeList.Initialize 
_B._attributelist={};
// [71] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [75] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [76] mTarget = Target 
_B._mtarget=_target;
// [77] If Props <> Null Then 
if (_props!=null) {
// [78] mClasses = Props.Get( {25} ) 
_B._mclasses=_props["Classes"];
// [79] mAttributes = Props.Get( {26} ) 
_B._mattributes=_props["Attributes"];
// [80] mStyle = Props.Get( {27} ) 
_B._mstyle=_props["Style"];
// [81] mCaption = Props.Get( {28} ) 
_B._mcaption=_props["Caption"];
// [82] stColor = Props.Get( {29} ) 
_B._stcolor=_props["Color"];
// [83] stCssClass = Props.Get( {30} ) 
_B._stcssclass=_props["CssClass"];
// [84] stFontFamily = Props.Get( {31} ) 
_B._stfontfamily=_props["FontFamily"];
// [85] stFontSize = Props.Get( {32} ) 
_B._stfontsize=_props["FontSize"];
// [86] stFontStyle = Props.Get( {33} ) 
_B._stfontstyle=_props["FontStyle"];
// [87] stFontWeight = Props.Get( {34} ) 
_B._stfontweight=_props["FontWeight"];
// [88] stHref = Props.Get( {35} ) 
_B._sthref=_props["Href"];
// [89] stLineHeight = Props.Get( {36} ) 
_B._stlineheight=_props["LineHeight"];
// [90] stPadding = Props.Get( {37} ) 
_B._stpadding=_props["Padding"];
// [91] stPaddingBottom = Props.Get( {38} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [92] stPaddingLeft = Props.Get( {39} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [93] stPaddingRight = Props.Get( {40} ) 
_B._stpaddingright=_props["PaddingRight"];
// [94] stPaddingTop = Props.Get( {41} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [95] stRel = Props.Get( {42} ) 
_B._strel=_props["Rel"];
// [96] stTarget = Props.Get( {43} ) 
_B._sttarget=_props["Target"];
// [97] stTextDecoration = Props.Get( {44} ) 
_B._sttextdecoration=_props["TextDecoration"];
// [98] stTextTransform = Props.Get( {45} ) 
_B._sttexttransform=_props["TextTransform"];
// [99] End If 
}
// [101] AddAttr( {46} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [102] AddAttr( {47} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [103] AddAttr( {48} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [104] AddAttr( {49} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [105] AddAttr( {50} , stFontStyle) 
_B.addattr("font-style",_B._stfontstyle,_B);
// [106] AddAttr( {51} , stFontWeight) 
_B.addattr("font-weight",_B._stfontweight,_B);
// [107] AddAttr( {52} , stHref) 
_B.addattr("href",_B._sthref,_B);
// [108] AddAttr( {53} , stLineHeight) 
_B.addattr("line-height",_B._stlineheight,_B);
// [109] AddAttr( {54} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [110] AddAttr( {55} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [111] AddAttr( {56} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [112] AddAttr( {57} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [113] AddAttr( {58} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [114] AddAttr( {59} , stRel) 
_B.addattr("rel",_B._strel,_B);
// [115] AddAttr( {60} , stTarget) 
_B.addattr("target",_B._sttarget,_B);
// [116] AddAttr( {61} , stTextDecoration) 
_B.addattr("text-decoration",_B._sttextdecoration,_B);
// [117] AddAttr( {62} , stTextTransform) 
_B.addattr("text-transform",_B._sttexttransform,_B);
// [118] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [119] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [120] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [123] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [124] mElement = mTarget.Append(strHTML).Get( {63} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [130] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [132] Dim className As String = BANanoShared.JoinMapKeys(classList, {64} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [133] AddAttr( {65} , className) 
_B.addattr("class",_classname,_B);
// [135] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [136] AddAttr( {66} , styleName) 
_B.addattr("style",_stylename,_B);
// [138] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [139] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [140] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [141] Return rslt 
return _rslt;
// End Sub
};

// [145] Sub AddBR 
_B.addbr=function() {
// [146] sbText.Append( {67} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [150] Sub AddHR 
_B.addhr=function() {
// [151] sbText.Append( {68} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [155] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [156] Return mElement 
return _B._melement;
// End Sub
};

// [160] public Sub getID() As String 
_B.getid=function() {
// [161] Return mName 
return _B._mname;
// End Sub
};

// [165] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [166] mTarget = BANano.GetElement( {69} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [167] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [171] public Sub Remove() 
_B.remove=function() {
// [172] mElement.Remove 
_B._melement.remove();
// [173] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [177] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [178] If mElement <> Null Then 
if (_B._melement!=null) {
// [179] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [180] End If 
}
// End Sub
};

// [184] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [185] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [186] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [187] varClass = varClass.trim 
_varclass=_varclass.trim();
// [188] if varClass = {70} Then Return 
if (_varclass=="") { return ;}
// [189] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [190] Dim mxItems As List = BANanoShared.StrParse( {71} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [191] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [192] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [193] Next 
}
// End Sub
};

// [197] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [198] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [199] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [200] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [201] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [202] varClass = varClass.trim 
_varclass=_varclass.trim();
// [203] if varClass = {72} Then Return 
if (_varclass=="") { return ;}
// [204] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [205] Dim mxItems As List = BANanoShared.StrParse( {73} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [206] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [207] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [208] Next 
}
// End Sub
};

// [212] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [213] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [214] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [215] If mElement <> Null Then 
if (_B._melement!=null) {
// [216] Dim aStyle As Map = CreateMap() 
_astyle={};
// [217] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [218] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [219] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [220] End If 
}
// [221] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [225] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [226] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [227] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [229] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [230] If varValue = True Then 
if (_varvalue==true) {
// [231] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [232] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [233] End If 
}
// [234] Else 
} else {
// [236] If varValue.StartsWith( {74} ) Then 
if (_varvalue.startsWith(":")) {
// [237] If varValue.StartsWith( {75} ) Then 
if (_varvalue.startsWith("$")) {
// [238] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [239] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [240] Else 
} else {
// [241] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [242] If rname.Contains( {76} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [243] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [244] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [245] End If 
}
// [246] Else 
} else {
// [248] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [249] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [250] Select Case varProp 
switch ("" + _varprop) {
// [251] Case {77} , {78} , {79} , {80} , {81} , {82} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [252] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [253] End Select 
break;
}
// [254] End If 
}
// [255] End If 
}
// [256] Return 
return;
// End Sub
};

// [260] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [261] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [262] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [263] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [264] sbClass.Append(k).Append( {83} ) 
_sbclass.append(_k).append(" ");
// [265] Next 
}
// [266] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [267] Return mClasses 
return _B._mclasses;
// End Sub
};

// [271] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [272] If mElement <> Null Then 
if (_B._melement!=null) {
// [273] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [274] End If 
}
// [275] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [276] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [277] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [278] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [279] Next 
}
// End Sub
};

// [283] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [284] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [285] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [286] sbStyle.Append( {84} ) 
_sbstyle.append("{");
// [287] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [288] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [289] sbStyle.Append(k).Append( {85} ).Append(v).Append( {86} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [290] Next 
}
// [291] sbStyle.Append( {87} ) 
_sbstyle.append("}");
// [292] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [293] Return mStyle 
return _B._mstyle;
// End Sub
};

// [297] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [298] Dim mxItems As List = BANanoShared.StrParse( {88} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [299] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [300] Dim k As String = BANanoShared.MvField(mt,1, {89} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [301] Dim v As String = BANanoShared.MvField(mt,2, {90} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [302] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [303] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [304] Next 
}
// End Sub
};

// [308] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [309] Dim mxItems As List = BANanoShared.StrParse( {91} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [310] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [311] Dim k As String = BANanoShared.MvField(mt,1, {92} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [312] Dim v As String = BANanoShared.MvField(mt,2, {93} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [313] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [314] Next 
}
// End Sub
};

// [318] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [319] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [320] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [321] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [322] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [323] sbAttr.Append(k).Append( {94} ).Append(v).Append( {95} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [324] Next 
}
// [325] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [326] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [330] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [331] If mElement <> Null Then 
if (_B._melement!=null) {
// [332] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [333] End If 
}
// [334] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [338] public Sub getCaption() As String 
_B.getcaption=function() {
// [339] Return mCaption 
return _B._mcaption;
// End Sub
};

// [342] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [343] AddAttr( {96} , varColor) 
_B.addattr("color",_varcolor,_B);
// [344] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [347] public Sub getColor() As String 
_B.getcolor=function() {
// [348] Return stColor 
return _B._stcolor;
// End Sub
};

// [351] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [352] AddAttr( {97} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [353] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [356] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [357] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [360] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [361] AddAttr( {98} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [362] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [365] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [366] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [369] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [370] AddAttr( {99} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [371] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [374] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [375] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [378] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [379] AddAttr( {100} , varFontStyle) 
_B.addattr("font-style",_varfontstyle,_B);
// [380] stFontStyle = varFontStyle 
_B._stfontstyle=_varfontstyle;
// End Sub
};

// [383] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [384] Return stFontStyle 
return _B._stfontstyle;
// End Sub
};

// [387] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [388] AddAttr( {101} , varFontWeight) 
_B.addattr("font-weight",_varfontweight,_B);
// [389] stFontWeight = varFontWeight 
_B._stfontweight=_varfontweight;
// End Sub
};

// [392] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [393] Return stFontWeight 
return _B._stfontweight;
// End Sub
};

// [396] public Sub setHref(varHref As String) 
_B.sethref=function(_varhref) {
// [397] AddAttr( {102} , varHref) 
_B.addattr("href",_varhref,_B);
// [398] stHref = varHref 
_B._sthref=_varhref;
// End Sub
};

// [401] public Sub getHref() As String 
_B.gethref=function() {
// [402] Return stHref 
return _B._sthref;
// End Sub
};

// [405] public Sub setLineHeight(varLineHeight As String) 
_B.setlineheight=function(_varlineheight) {
// [406] AddAttr( {103} , varLineHeight) 
_B.addattr("line-height",_varlineheight,_B);
// [407] stLineHeight = varLineHeight 
_B._stlineheight=_varlineheight;
// End Sub
};

// [410] public Sub getLineHeight() As String 
_B.getlineheight=function() {
// [411] Return stLineHeight 
return _B._stlineheight;
// End Sub
};

// [414] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [415] AddAttr( {104} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [416] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [419] public Sub getPadding() As String 
_B.getpadding=function() {
// [420] Return stPadding 
return _B._stpadding;
// End Sub
};

// [423] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [424] AddAttr( {105} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [425] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [428] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [429] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [432] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [433] AddAttr( {106} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [434] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [437] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [438] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [441] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [442] AddAttr( {107} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [443] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [446] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [447] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [450] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [451] AddAttr( {108} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [452] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [455] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [456] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [459] public Sub setRel(varRel As String) 
_B.setrel=function(_varrel) {
// [460] AddAttr( {109} , varRel) 
_B.addattr("rel",_varrel,_B);
// [461] stRel = varRel 
_B._strel=_varrel;
// End Sub
};

// [464] public Sub getRel() As String 
_B.getrel=function() {
// [465] Return stRel 
return _B._strel;
// End Sub
};

// [468] public Sub setTarget(varTarget As String) 
_B.settarget=function(_vartarget) {
// [469] AddAttr( {110} , varTarget) 
_B.addattr("target",_vartarget,_B);
// [470] stTarget = varTarget 
_B._sttarget=_vartarget;
// End Sub
};

// [473] public Sub getTarget() As String 
_B.gettarget=function() {
// [474] Return stTarget 
return _B._sttarget;
// End Sub
};

// [477] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [478] AddAttr( {111} , varTextDecoration) 
_B.addattr("text-decoration",_vartextdecoration,_B);
// [479] stTextDecoration = varTextDecoration 
_B._sttextdecoration=_vartextdecoration;
// End Sub
};

// [482] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [483] Return stTextDecoration 
return _B._sttextdecoration;
// End Sub
};

// [486] public Sub setTextTransform(varTextTransform As String) 
_B.settexttransform=function(_vartexttransform) {
// [487] AddAttr( {112} , varTextTransform) 
_B.addattr("text-transform",_vartexttransform,_B);
// [488] stTextTransform = varTextTransform 
_B._sttexttransform=_vartexttransform;
// End Sub
};

// [491] public Sub getTextTransform() As String 
_B.gettexttransform=function() {
// [492] Return stTextTransform 
return _B._sttexttransform;
// End Sub
};

// [497] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [498] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJPreview  =========================== */
function banano_bananomjml_mjpreview() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-preview";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJRaw  =========================== */
function banano_bananomjml_mjraw() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-raw";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJSection  =========================== */
function banano_bananomjml_mjsection() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-section";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stbackgroundrepeat="";

_B._stbackgroundsize="";

_B._stbackgroundurl="";

_B._stborder="";

_B._stborderbottom="";

_B._stborderleft="";

_B._stborderradius="";

_B._stborderright="";

_B._stbordertop="";

_B._stcssclass="";

_B._stdirection="";

_B._stfullwidth="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._sttextalign="";

// [68] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [69] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [70] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [71] mCallBack = CallBack 
_B._mcallback=_callback;
// [72] classList.Initialize 
_B._classlist={};
// [73] styleList.Initialize 
_B._stylelist={};
// [74] attributeList.Initialize 
_B._attributelist={};
// [75] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [79] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [80] mTarget = Target 
_B._mtarget=_target;
// [81] If Props <> Null Then 
if (_props!=null) {
// [82] mClasses = Props.Get( {27} ) 
_B._mclasses=_props["Classes"];
// [83] mAttributes = Props.Get( {28} ) 
_B._mattributes=_props["Attributes"];
// [84] mStyle = Props.Get( {29} ) 
_B._mstyle=_props["Style"];
// [85] mCaption = Props.Get( {30} ) 
_B._mcaption=_props["Caption"];
// [86] stBackgroundColor = Props.Get( {31} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [87] stBackgroundRepeat = Props.Get( {32} ) 
_B._stbackgroundrepeat=_props["BackgroundRepeat"];
// [88] stBackgroundSize = Props.Get( {33} ) 
_B._stbackgroundsize=_props["BackgroundSize"];
// [89] stBackgroundUrl = Props.Get( {34} ) 
_B._stbackgroundurl=_props["BackgroundUrl"];
// [90] stBorder = Props.Get( {35} ) 
_B._stborder=_props["Border"];
// [91] stBorderBottom = Props.Get( {36} ) 
_B._stborderbottom=_props["BorderBottom"];
// [92] stBorderLeft = Props.Get( {37} ) 
_B._stborderleft=_props["BorderLeft"];
// [93] stBorderRadius = Props.Get( {38} ) 
_B._stborderradius=_props["BorderRadius"];
// [94] stBorderRight = Props.Get( {39} ) 
_B._stborderright=_props["BorderRight"];
// [95] stBorderTop = Props.Get( {40} ) 
_B._stbordertop=_props["BorderTop"];
// [96] stCssClass = Props.Get( {41} ) 
_B._stcssclass=_props["CssClass"];
// [97] stDirection = Props.Get( {42} ) 
_B._stdirection=_props["Direction"];
// [98] stFullWidth = Props.Get( {43} ) 
_B._stfullwidth=_props["FullWidth"];
// [99] stPadding = Props.Get( {44} ) 
_B._stpadding=_props["Padding"];
// [100] stPaddingBottom = Props.Get( {45} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [101] stPaddingLeft = Props.Get( {46} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [102] stPaddingRight = Props.Get( {47} ) 
_B._stpaddingright=_props["PaddingRight"];
// [103] stPaddingTop = Props.Get( {48} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [104] stTextAlign = Props.Get( {49} ) 
_B._sttextalign=_props["TextAlign"];
// [105] End If 
}
// [107] AddAttr( {50} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [108] AddAttr( {51} , stBackgroundRepeat) 
_B.addattr("background-repeat",_B._stbackgroundrepeat,_B);
// [109] AddAttr( {52} , stBackgroundSize) 
_B.addattr("background-size",_B._stbackgroundsize,_B);
// [110] AddAttr( {53} , stBackgroundUrl) 
_B.addattr("background-url",_B._stbackgroundurl,_B);
// [111] AddAttr( {54} , stBorder) 
_B.addattr("border",_B._stborder,_B);
// [112] AddAttr( {55} , stBorderBottom) 
_B.addattr("border-bottom",_B._stborderbottom,_B);
// [113] AddAttr( {56} , stBorderLeft) 
_B.addattr("border-left",_B._stborderleft,_B);
// [114] AddAttr( {57} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [115] AddAttr( {58} , stBorderRight) 
_B.addattr("border-right",_B._stborderright,_B);
// [116] AddAttr( {59} , stBorderTop) 
_B.addattr("border-top",_B._stbordertop,_B);
// [117] AddAttr( {60} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [118] AddAttr( {61} , stDirection) 
_B.addattr("direction",_B._stdirection,_B);
// [119] AddAttr( {62} , stFullWidth) 
_B.addattr("full-width",_B._stfullwidth,_B);
// [120] AddAttr( {63} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [121] AddAttr( {64} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [122] AddAttr( {65} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [123] AddAttr( {66} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [124] AddAttr( {67} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [125] AddAttr( {68} , stTextAlign) 
_B.addattr("text-align",_B._sttextalign,_B);
// [126] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [127] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [128] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [131] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [132] mElement = mTarget.Append(strHTML).Get( {69} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [138] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [140] Dim className As String = BANanoShared.JoinMapKeys(classList, {70} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [141] AddAttr( {71} , className) 
_B.addattr("class",_classname,_B);
// [143] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [144] AddAttr( {72} , styleName) 
_B.addattr("style",_stylename,_B);
// [146] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [147] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [148] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [149] Return rslt 
return _rslt;
// End Sub
};

// [153] Sub AddBR 
_B.addbr=function() {
// [154] sbText.Append( {73} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [158] Sub AddHR 
_B.addhr=function() {
// [159] sbText.Append( {74} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [163] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [164] Return mElement 
return _B._melement;
// End Sub
};

// [168] public Sub getID() As String 
_B.getid=function() {
// [169] Return mName 
return _B._mname;
// End Sub
};

// [173] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [174] mTarget = BANano.GetElement( {75} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [175] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [179] public Sub Remove() 
_B.remove=function() {
// [180] mElement.Remove 
_B._melement.remove();
// [181] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [185] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [186] If mElement <> Null Then 
if (_B._melement!=null) {
// [187] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [188] End If 
}
// End Sub
};

// [192] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [193] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [194] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [195] varClass = varClass.trim 
_varclass=_varclass.trim();
// [196] if varClass = {76} Then Return 
if (_varclass=="") { return ;}
// [197] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [198] Dim mxItems As List = BANanoShared.StrParse( {77} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [199] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [200] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [201] Next 
}
// End Sub
};

// [205] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [206] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [207] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [208] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [209] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [210] varClass = varClass.trim 
_varclass=_varclass.trim();
// [211] if varClass = {78} Then Return 
if (_varclass=="") { return ;}
// [212] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [213] Dim mxItems As List = BANanoShared.StrParse( {79} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [214] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [215] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [216] Next 
}
// End Sub
};

// [220] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [221] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [222] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [223] If mElement <> Null Then 
if (_B._melement!=null) {
// [224] Dim aStyle As Map = CreateMap() 
_astyle={};
// [225] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [226] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [227] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [228] End If 
}
// [229] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [233] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [234] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [235] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [237] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [238] If varValue = True Then 
if (_varvalue==true) {
// [239] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [240] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [241] End If 
}
// [242] Else 
} else {
// [244] If varValue.StartsWith( {80} ) Then 
if (_varvalue.startsWith(":")) {
// [245] If varValue.StartsWith( {81} ) Then 
if (_varvalue.startsWith("$")) {
// [246] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [247] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [248] Else 
} else {
// [249] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [250] If rname.Contains( {82} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [251] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [252] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [253] End If 
}
// [254] Else 
} else {
// [256] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [257] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [258] Select Case varProp 
switch ("" + _varprop) {
// [259] Case {83} , {84} , {85} , {86} , {87} , {88} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [260] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [261] End Select 
break;
}
// [262] End If 
}
// [263] End If 
}
// [264] Return 
return;
// End Sub
};

// [268] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [269] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [270] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [271] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [272] sbClass.Append(k).Append( {89} ) 
_sbclass.append(_k).append(" ");
// [273] Next 
}
// [274] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [275] Return mClasses 
return _B._mclasses;
// End Sub
};

// [279] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [280] If mElement <> Null Then 
if (_B._melement!=null) {
// [281] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [282] End If 
}
// [283] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [284] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [285] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [286] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [287] Next 
}
// End Sub
};

// [291] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [292] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [293] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [294] sbStyle.Append( {90} ) 
_sbstyle.append("{");
// [295] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [296] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [297] sbStyle.Append(k).Append( {91} ).Append(v).Append( {92} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [298] Next 
}
// [299] sbStyle.Append( {93} ) 
_sbstyle.append("}");
// [300] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [301] Return mStyle 
return _B._mstyle;
// End Sub
};

// [305] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [306] Dim mxItems As List = BANanoShared.StrParse( {94} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [307] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [308] Dim k As String = BANanoShared.MvField(mt,1, {95} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [309] Dim v As String = BANanoShared.MvField(mt,2, {96} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [310] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [311] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [312] Next 
}
// End Sub
};

// [316] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [317] Dim mxItems As List = BANanoShared.StrParse( {97} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [318] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [319] Dim k As String = BANanoShared.MvField(mt,1, {98} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [320] Dim v As String = BANanoShared.MvField(mt,2, {99} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [321] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [322] Next 
}
// End Sub
};

// [326] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [327] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [328] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [329] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [330] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [331] sbAttr.Append(k).Append( {100} ).Append(v).Append( {101} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [332] Next 
}
// [333] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [334] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [338] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [339] If mElement <> Null Then 
if (_B._melement!=null) {
// [340] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [341] End If 
}
// [342] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [346] public Sub getCaption() As String 
_B.getcaption=function() {
// [347] Return mCaption 
return _B._mcaption;
// End Sub
};

// [350] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [351] AddAttr( {102} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [352] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [355] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [356] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [359] public Sub setBackgroundRepeat(varBackgroundRepeat As String) 
_B.setbackgroundrepeat=function(_varbackgroundrepeat) {
// [360] AddAttr( {103} , varBackgroundRepeat) 
_B.addattr("background-repeat",_varbackgroundrepeat,_B);
// [361] stBackgroundRepeat = varBackgroundRepeat 
_B._stbackgroundrepeat=_varbackgroundrepeat;
// End Sub
};

// [364] public Sub getBackgroundRepeat() As String 
_B.getbackgroundrepeat=function() {
// [365] Return stBackgroundRepeat 
return _B._stbackgroundrepeat;
// End Sub
};

// [368] public Sub setBackgroundSize(varBackgroundSize As String) 
_B.setbackgroundsize=function(_varbackgroundsize) {
// [369] AddAttr( {104} , varBackgroundSize) 
_B.addattr("background-size",_varbackgroundsize,_B);
// [370] stBackgroundSize = varBackgroundSize 
_B._stbackgroundsize=_varbackgroundsize;
// End Sub
};

// [373] public Sub getBackgroundSize() As String 
_B.getbackgroundsize=function() {
// [374] Return stBackgroundSize 
return _B._stbackgroundsize;
// End Sub
};

// [377] public Sub setBackgroundUrl(varBackgroundUrl As String) 
_B.setbackgroundurl=function(_varbackgroundurl) {
// [378] AddAttr( {105} , varBackgroundUrl) 
_B.addattr("background-url",_varbackgroundurl,_B);
// [379] stBackgroundUrl = varBackgroundUrl 
_B._stbackgroundurl=_varbackgroundurl;
// End Sub
};

// [382] public Sub getBackgroundUrl() As String 
_B.getbackgroundurl=function() {
// [383] Return stBackgroundUrl 
return _B._stbackgroundurl;
// End Sub
};

// [386] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [387] AddAttr( {106} , varBorder) 
_B.addattr("border",_varborder,_B);
// [388] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [391] public Sub getBorder() As String 
_B.getborder=function() {
// [392] Return stBorder 
return _B._stborder;
// End Sub
};

// [395] public Sub setBorderBottom(varBorderBottom As String) 
_B.setborderbottom=function(_varborderbottom) {
// [396] AddAttr( {107} , varBorderBottom) 
_B.addattr("border-bottom",_varborderbottom,_B);
// [397] stBorderBottom = varBorderBottom 
_B._stborderbottom=_varborderbottom;
// End Sub
};

// [400] public Sub getBorderBottom() As String 
_B.getborderbottom=function() {
// [401] Return stBorderBottom 
return _B._stborderbottom;
// End Sub
};

// [404] public Sub setBorderLeft(varBorderLeft As String) 
_B.setborderleft=function(_varborderleft) {
// [405] AddAttr( {108} , varBorderLeft) 
_B.addattr("border-left",_varborderleft,_B);
// [406] stBorderLeft = varBorderLeft 
_B._stborderleft=_varborderleft;
// End Sub
};

// [409] public Sub getBorderLeft() As String 
_B.getborderleft=function() {
// [410] Return stBorderLeft 
return _B._stborderleft;
// End Sub
};

// [413] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [414] AddAttr( {109} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [415] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [418] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [419] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [422] public Sub setBorderRight(varBorderRight As String) 
_B.setborderright=function(_varborderright) {
// [423] AddAttr( {110} , varBorderRight) 
_B.addattr("border-right",_varborderright,_B);
// [424] stBorderRight = varBorderRight 
_B._stborderright=_varborderright;
// End Sub
};

// [427] public Sub getBorderRight() As String 
_B.getborderright=function() {
// [428] Return stBorderRight 
return _B._stborderright;
// End Sub
};

// [431] public Sub setBorderTop(varBorderTop As String) 
_B.setbordertop=function(_varbordertop) {
// [432] AddAttr( {111} , varBorderTop) 
_B.addattr("border-top",_varbordertop,_B);
// [433] stBorderTop = varBorderTop 
_B._stbordertop=_varbordertop;
// End Sub
};

// [436] public Sub getBorderTop() As String 
_B.getbordertop=function() {
// [437] Return stBorderTop 
return _B._stbordertop;
// End Sub
};

// [440] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [441] AddAttr( {112} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [442] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [445] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [446] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [449] public Sub setDirection(varDirection As String) 
_B.setdirection=function(_vardirection) {
// [450] AddAttr( {113} , varDirection) 
_B.addattr("direction",_vardirection,_B);
// [451] stDirection = varDirection 
_B._stdirection=_vardirection;
// End Sub
};

// [454] public Sub getDirection() As String 
_B.getdirection=function() {
// [455] Return stDirection 
return _B._stdirection;
// End Sub
};

// [458] public Sub setFullWidth(varFullWidth As String) 
_B.setfullwidth=function(_varfullwidth) {
// [459] AddAttr( {114} , varFullWidth) 
_B.addattr("full-width",_varfullwidth,_B);
// [460] stFullWidth = varFullWidth 
_B._stfullwidth=_varfullwidth;
// End Sub
};

// [463] public Sub getFullWidth() As String 
_B.getfullwidth=function() {
// [464] Return stFullWidth 
return _B._stfullwidth;
// End Sub
};

// [467] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [468] AddAttr( {115} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [469] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [472] public Sub getPadding() As String 
_B.getpadding=function() {
// [473] Return stPadding 
return _B._stpadding;
// End Sub
};

// [476] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [477] AddAttr( {116} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [478] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [481] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [482] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [485] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [486] AddAttr( {117} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [487] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [490] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [491] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [494] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [495] AddAttr( {118} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [496] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [499] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [500] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [503] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [504] AddAttr( {119} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [505] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [508] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [509] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [512] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [513] AddAttr( {120} , varTextAlign) 
_B.addattr("text-align",_vartextalign,_B);
// [514] stTextAlign = varTextAlign 
_B._sttextalign=_vartextalign;
// End Sub
};

// [517] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [518] Return stTextAlign 
return _B._sttextalign;
// End Sub
};

// [523] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [524] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJSocial  =========================== */
function banano_bananomjml_mjsocial() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-social";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stborderradius="";

_B._stcolor="";

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stfontstyle="";

_B._stfontweight="";

_B._sticonheight="";

_B._sticonpadding="";

_B._sticonsize="";

_B._stinnerpadding="";

_B._stlineheight="";

_B._stmode="";

_B._stname="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._sttextdecoration="";

_B._sttextpadding="";

// [76] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [77] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [78] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [79] mCallBack = CallBack 
_B._mcallback=_callback;
// [80] classList.Initialize 
_B._classlist={};
// [81] styleList.Initialize 
_B._stylelist={};
// [82] attributeList.Initialize 
_B._attributelist={};
// [83] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [87] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [88] mTarget = Target 
_B._mtarget=_target;
// [89] If Props <> Null Then 
if (_props!=null) {
// [90] mClasses = Props.Get( {31} ) 
_B._mclasses=_props["Classes"];
// [91] mAttributes = Props.Get( {32} ) 
_B._mattributes=_props["Attributes"];
// [92] mStyle = Props.Get( {33} ) 
_B._mstyle=_props["Style"];
// [93] mCaption = Props.Get( {34} ) 
_B._mcaption=_props["Caption"];
// [94] stAlign = Props.Get( {35} ) 
_B._stalign=_props["Align"];
// [95] stBorderRadius = Props.Get( {36} ) 
_B._stborderradius=_props["BorderRadius"];
// [96] stColor = Props.Get( {37} ) 
_B._stcolor=_props["Color"];
// [97] stContainerBackgroundColor = Props.Get( {38} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [98] stCssClass = Props.Get( {39} ) 
_B._stcssclass=_props["CssClass"];
// [99] stFontFamily = Props.Get( {40} ) 
_B._stfontfamily=_props["FontFamily"];
// [100] stFontSize = Props.Get( {41} ) 
_B._stfontsize=_props["FontSize"];
// [101] stFontStyle = Props.Get( {42} ) 
_B._stfontstyle=_props["FontStyle"];
// [102] stFontWeight = Props.Get( {43} ) 
_B._stfontweight=_props["FontWeight"];
// [103] stIconHeight = Props.Get( {44} ) 
_B._sticonheight=_props["IconHeight"];
// [104] stIconPadding = Props.Get( {45} ) 
_B._sticonpadding=_props["IconPadding"];
// [105] stIconSize = Props.Get( {46} ) 
_B._sticonsize=_props["IconSize"];
// [106] stInnerPadding = Props.Get( {47} ) 
_B._stinnerpadding=_props["InnerPadding"];
// [107] stLineHeight = Props.Get( {48} ) 
_B._stlineheight=_props["LineHeight"];
// [108] stMode = Props.Get( {49} ) 
_B._stmode=_props["Mode"];
// [109] stName = Props.Get( {50} ) 
_B._stname=_props["Name"];
// [110] stPadding = Props.Get( {51} ) 
_B._stpadding=_props["Padding"];
// [111] stPaddingBottom = Props.Get( {52} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [112] stPaddingLeft = Props.Get( {53} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [113] stPaddingRight = Props.Get( {54} ) 
_B._stpaddingright=_props["PaddingRight"];
// [114] stPaddingTop = Props.Get( {55} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [115] stTextDecoration = Props.Get( {56} ) 
_B._sttextdecoration=_props["TextDecoration"];
// [116] stTextPadding = Props.Get( {57} ) 
_B._sttextpadding=_props["TextPadding"];
// [117] End If 
}
// [119] AddAttr( {58} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [120] AddAttr( {59} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [121] AddAttr( {60} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [122] AddAttr( {61} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [123] AddAttr( {62} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [124] AddAttr( {63} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [125] AddAttr( {64} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [126] AddAttr( {65} , stFontStyle) 
_B.addattr("font-style",_B._stfontstyle,_B);
// [127] AddAttr( {66} , stFontWeight) 
_B.addattr("font-weight",_B._stfontweight,_B);
// [128] AddAttr( {67} , stIconHeight) 
_B.addattr("icon-height",_B._sticonheight,_B);
// [129] AddAttr( {68} , stIconPadding) 
_B.addattr("icon-padding",_B._sticonpadding,_B);
// [130] AddAttr( {69} , stIconSize) 
_B.addattr("icon-size",_B._sticonsize,_B);
// [131] AddAttr( {70} , stInnerPadding) 
_B.addattr("inner-padding",_B._stinnerpadding,_B);
// [132] AddAttr( {71} , stLineHeight) 
_B.addattr("line-height",_B._stlineheight,_B);
// [133] AddAttr( {72} , stMode) 
_B.addattr("mode",_B._stmode,_B);
// [134] AddAttr( {73} , stName) 
_B.addattr("name",_B._stname,_B);
// [135] AddAttr( {74} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [136] AddAttr( {75} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [137] AddAttr( {76} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [138] AddAttr( {77} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [139] AddAttr( {78} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [140] AddAttr( {79} , stTextDecoration) 
_B.addattr("text-decoration",_B._sttextdecoration,_B);
// [141] AddAttr( {80} , stTextPadding) 
_B.addattr("text-padding",_B._sttextpadding,_B);
// [142] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [143] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [144] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [147] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [148] mElement = mTarget.Append(strHTML).Get( {81} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [154] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [156] Dim className As String = BANanoShared.JoinMapKeys(classList, {82} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [157] AddAttr( {83} , className) 
_B.addattr("class",_classname,_B);
// [159] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [160] AddAttr( {84} , styleName) 
_B.addattr("style",_stylename,_B);
// [162] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [163] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [164] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [165] Return rslt 
return _rslt;
// End Sub
};

// [169] Sub AddBR 
_B.addbr=function() {
// [170] sbText.Append( {85} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [174] Sub AddHR 
_B.addhr=function() {
// [175] sbText.Append( {86} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [179] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [180] Return mElement 
return _B._melement;
// End Sub
};

// [184] public Sub getID() As String 
_B.getid=function() {
// [185] Return mName 
return _B._mname;
// End Sub
};

// [189] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [190] mTarget = BANano.GetElement( {87} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [191] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [195] public Sub Remove() 
_B.remove=function() {
// [196] mElement.Remove 
_B._melement.remove();
// [197] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [201] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [202] If mElement <> Null Then 
if (_B._melement!=null) {
// [203] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [204] End If 
}
// End Sub
};

// [208] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [209] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [210] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [211] varClass = varClass.trim 
_varclass=_varclass.trim();
// [212] If varClass = {88} Then Return 
if (_varclass=="") { return ;}
// [213] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [214] Dim mxItems As List = BANanoShared.StrParse( {89} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [215] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [216] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [217] Next 
}
// End Sub
};

// [221] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As Boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [222] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [223] If varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [224] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [225] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [226] varClass = varClass.trim 
_varclass=_varclass.trim();
// [227] If varClass = {90} Then Return 
if (_varclass=="") { return ;}
// [228] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [229] Dim mxItems As List = BANanoShared.StrParse( {91} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [230] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [231] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [232] Next 
}
// End Sub
};

// [236] public Sub AddStyle(varProp As String, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [237] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [238] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [239] If mElement <> Null Then 
if (_B._melement!=null) {
// [240] Dim aStyle As Map = CreateMap() 
_astyle={};
// [241] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [242] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [243] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [244] End If 
}
// [245] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [249] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [250] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [251] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [253] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [254] If varValue = True Then 
if (_varvalue==true) {
// [255] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [256] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [257] End If 
}
// [258] Else 
} else {
// [260] If varValue.StartsWith( {92} ) Then 
if (_varvalue.startsWith(":")) {
// [261] If varValue.StartsWith( {93} ) Then 
if (_varvalue.startsWith("$")) {
// [262] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [263] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [264] Else 
} else {
// [265] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [266] If rname.Contains( {94} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [267] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [268] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [269] End If 
}
// [270] Else 
} else {
// [272] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [273] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [274] Select Case varProp 
switch ("" + _varprop) {
// [275] Case {95} , {96} , {97} , {98} , {99} , {100} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [276] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [277] End Select 
break;
}
// [278] End If 
}
// [279] End If 
}
// [280] Return 
return;
// End Sub
};

// [284] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [285] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [286] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [287] For Each k As String In classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [288] sbClass.Append(k).Append( {101} ) 
_sbclass.append(_k).append(" ");
// [289] Next 
}
// [290] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [291] Return mClasses 
return _B._mclasses;
// End Sub
};

// [295] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [296] If mElement <> Null Then 
if (_B._melement!=null) {
// [297] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [298] End If 
}
// [299] Dim mres As Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [300] For Each k As String In mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [301] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [302] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [303] Next 
}
// End Sub
};

// [307] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [308] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [309] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [310] sbStyle.Append( {102} ) 
_sbstyle.append("{");
// [311] For Each k As String In styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [312] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [313] sbStyle.Append(k).Append( {103} ).Append(v).Append( {104} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [314] Next 
}
// [315] sbStyle.Append( {105} ) 
_sbstyle.append("}");
// [316] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [317] Return mStyle 
return _B._mstyle;
// End Sub
};

// [321] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [322] Dim mxItems As List = BANanoShared.StrParse( {106} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [323] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [324] Dim k As String = BANanoShared.MvField(mt,1, {107} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [325] Dim v As String = BANanoShared.MvField(mt,2, {108} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [326] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [327] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [328] Next 
}
// End Sub
};

// [332] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [333] Dim mxItems As List = BANanoShared.StrParse( {109} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [334] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [335] Dim k As String = BANanoShared.MvField(mt,1, {110} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [336] Dim v As String = BANanoShared.MvField(mt,2, {111} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [337] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [338] Next 
}
// End Sub
};

// [342] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [343] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [344] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [345] For Each k As String In attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [346] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [347] sbAttr.Append(k).Append( {112} ).Append(v).Append( {113} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [348] Next 
}
// [349] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [350] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [354] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [355] If mElement <> Null Then 
if (_B._melement!=null) {
// [356] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [357] End If 
}
// [358] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [362] public Sub getCaption() As String 
_B.getcaption=function() {
// [363] Return mCaption 
return _B._mcaption;
// End Sub
};

// [366] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [367] AddAttr( {114} , varAlign) 
_B.addattr("align",_varalign,_B);
// [368] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [371] public Sub getAlign() As String 
_B.getalign=function() {
// [372] Return stAlign 
return _B._stalign;
// End Sub
};

// [375] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [376] AddAttr( {115} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [377] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [380] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [381] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [384] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [385] AddAttr( {116} , varColor) 
_B.addattr("color",_varcolor,_B);
// [386] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [389] public Sub getColor() As String 
_B.getcolor=function() {
// [390] Return stColor 
return _B._stcolor;
// End Sub
};

// [393] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [394] AddAttr( {117} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [395] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [398] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [399] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [402] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [403] AddAttr( {118} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [404] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [407] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [408] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [411] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [412] AddAttr( {119} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [413] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [416] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [417] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [420] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [421] AddAttr( {120} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [422] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [425] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [426] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [429] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [430] AddAttr( {121} , varFontStyle) 
_B.addattr("font-style",_varfontstyle,_B);
// [431] stFontStyle = varFontStyle 
_B._stfontstyle=_varfontstyle;
// End Sub
};

// [434] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [435] Return stFontStyle 
return _B._stfontstyle;
// End Sub
};

// [438] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [439] AddAttr( {122} , varFontWeight) 
_B.addattr("font-weight",_varfontweight,_B);
// [440] stFontWeight = varFontWeight 
_B._stfontweight=_varfontweight;
// End Sub
};

// [443] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [444] Return stFontWeight 
return _B._stfontweight;
// End Sub
};

// [447] public Sub setIconHeight(varIconHeight As String) 
_B.seticonheight=function(_variconheight) {
// [448] AddAttr( {123} , varIconHeight) 
_B.addattr("icon-height",_variconheight,_B);
// [449] stIconHeight = varIconHeight 
_B._sticonheight=_variconheight;
// End Sub
};

// [452] public Sub getIconHeight() As String 
_B.geticonheight=function() {
// [453] Return stIconHeight 
return _B._sticonheight;
// End Sub
};

// [456] public Sub setIconPadding(varIconPadding As String) 
_B.seticonpadding=function(_variconpadding) {
// [457] AddAttr( {124} , varIconPadding) 
_B.addattr("icon-padding",_variconpadding,_B);
// [458] stIconPadding = varIconPadding 
_B._sticonpadding=_variconpadding;
// End Sub
};

// [461] public Sub getIconPadding() As String 
_B.geticonpadding=function() {
// [462] Return stIconPadding 
return _B._sticonpadding;
// End Sub
};

// [465] public Sub setIconSize(varIconSize As String) 
_B.seticonsize=function(_variconsize) {
// [466] AddAttr( {125} , varIconSize) 
_B.addattr("icon-size",_variconsize,_B);
// [467] stIconSize = varIconSize 
_B._sticonsize=_variconsize;
// End Sub
};

// [470] public Sub getIconSize() As String 
_B.geticonsize=function() {
// [471] Return stIconSize 
return _B._sticonsize;
// End Sub
};

// [474] public Sub setInnerPadding(varInnerPadding As String) 
_B.setinnerpadding=function(_varinnerpadding) {
// [475] AddAttr( {126} , varInnerPadding) 
_B.addattr("inner-padding",_varinnerpadding,_B);
// [476] stInnerPadding = varInnerPadding 
_B._stinnerpadding=_varinnerpadding;
// End Sub
};

// [479] public Sub getInnerPadding() As String 
_B.getinnerpadding=function() {
// [480] Return stInnerPadding 
return _B._stinnerpadding;
// End Sub
};

// [483] public Sub setLineHeight(varLineHeight As String) 
_B.setlineheight=function(_varlineheight) {
// [484] AddAttr( {127} , varLineHeight) 
_B.addattr("line-height",_varlineheight,_B);
// [485] stLineHeight = varLineHeight 
_B._stlineheight=_varlineheight;
// End Sub
};

// [488] public Sub getLineHeight() As String 
_B.getlineheight=function() {
// [489] Return stLineHeight 
return _B._stlineheight;
// End Sub
};

// [492] public Sub setMode(varMode As String) 
_B.setmode=function(_varmode) {
// [493] AddAttr( {128} , varMode) 
_B.addattr("mode",_varmode,_B);
// [494] stMode = varMode 
_B._stmode=_varmode;
// End Sub
};

// [497] public Sub getMode() As String 
_B.getmode=function() {
// [498] Return stMode 
return _B._stmode;
// End Sub
};

// [501] public Sub setName(varName As String) 
_B.setname=function(_varname) {
// [502] AddAttr( {129} , varName) 
_B.addattr("name",_varname,_B);
// [503] stName = varName 
_B._stname=_varname;
// End Sub
};

// [506] public Sub getName() As String 
_B.getname=function() {
// [507] Return stName 
return _B._stname;
// End Sub
};

// [510] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [511] AddAttr( {130} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [512] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [515] public Sub getPadding() As String 
_B.getpadding=function() {
// [516] Return stPadding 
return _B._stpadding;
// End Sub
};

// [519] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [520] AddAttr( {131} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [521] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [524] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [525] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [528] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [529] AddAttr( {132} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [530] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [533] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [534] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [537] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [538] AddAttr( {133} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [539] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [542] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [543] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [546] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [547] AddAttr( {134} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [548] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [551] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [552] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [555] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [556] AddAttr( {135} , varTextDecoration) 
_B.addattr("text-decoration",_vartextdecoration,_B);
// [557] stTextDecoration = varTextDecoration 
_B._sttextdecoration=_vartextdecoration;
// End Sub
};

// [560] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [561] Return stTextDecoration 
return _B._sttextdecoration;
// End Sub
};

// [564] public Sub setTextPadding(varTextPadding As String) 
_B.settextpadding=function(_vartextpadding) {
// [565] AddAttr( {136} , varTextPadding) 
_B.addattr("text-padding",_vartextpadding,_B);
// [566] stTextPadding = varTextPadding 
_B._sttextpadding=_vartextpadding;
// End Sub
};

// [569] public Sub getTextPadding() As String 
_B.gettextpadding=function() {
// [570] Return stTextPadding 
return _B._sttextpadding;
// End Sub
};

// [575] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [576] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJSocialElement  =========================== */
function banano_bananomjml_mjsocialelement() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-social-element";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stalt="";

_B._stbackgroundcolor="";

_B._stborderradius="";

_B._stcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stfontstyle="";

_B._stfontweight="";

_B._sthref="";

_B._sticonheight="";

_B._sticonpadding="";

_B._sticonsize="";

_B._stlineheight="";

_B._stmode="";

_B._stname="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._stsrc="";

_B._sttarget="";

_B._sttextdecoration="";

_B._sttextpadding="";

_B._sttitle="";

// [84] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [85] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [86] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [87] mCallBack = CallBack 
_B._mcallback=_callback;
// [88] classList.Initialize 
_B._classlist={};
// [89] styleList.Initialize 
_B._stylelist={};
// [90] attributeList.Initialize 
_B._attributelist={};
// [91] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [95] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [96] mTarget = Target 
_B._mtarget=_target;
// [97] If Props <> Null Then 
if (_props!=null) {
// [98] mClasses = Props.Get( {35} ) 
_B._mclasses=_props["Classes"];
// [99] mAttributes = Props.Get( {36} ) 
_B._mattributes=_props["Attributes"];
// [100] mStyle = Props.Get( {37} ) 
_B._mstyle=_props["Style"];
// [101] mCaption = Props.Get( {38} ) 
_B._mcaption=_props["Caption"];
// [102] stAlign = Props.Get( {39} ) 
_B._stalign=_props["Align"];
// [103] stAlt = Props.Get( {40} ) 
_B._stalt=_props["Alt"];
// [104] stBackgroundColor = Props.Get( {41} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [105] stBorderRadius = Props.Get( {42} ) 
_B._stborderradius=_props["BorderRadius"];
// [106] stColor = Props.Get( {43} ) 
_B._stcolor=_props["Color"];
// [107] stCssClass = Props.Get( {44} ) 
_B._stcssclass=_props["CssClass"];
// [108] stFontFamily = Props.Get( {45} ) 
_B._stfontfamily=_props["FontFamily"];
// [109] stFontSize = Props.Get( {46} ) 
_B._stfontsize=_props["FontSize"];
// [110] stFontStyle = Props.Get( {47} ) 
_B._stfontstyle=_props["FontStyle"];
// [111] stFontWeight = Props.Get( {48} ) 
_B._stfontweight=_props["FontWeight"];
// [112] stHref = Props.Get( {49} ) 
_B._sthref=_props["Href"];
// [113] stIconHeight = Props.Get( {50} ) 
_B._sticonheight=_props["IconHeight"];
// [114] stIconPadding = Props.Get( {51} ) 
_B._sticonpadding=_props["IconPadding"];
// [115] stIconSize = Props.Get( {52} ) 
_B._sticonsize=_props["IconSize"];
// [116] stLineHeight = Props.Get( {53} ) 
_B._stlineheight=_props["LineHeight"];
// [117] stMode = Props.Get( {54} ) 
_B._stmode=_props["Mode"];
// [118] stName = Props.Get( {55} ) 
_B._stname=_props["Name"];
// [119] stPadding = Props.Get( {56} ) 
_B._stpadding=_props["Padding"];
// [120] stPaddingBottom = Props.Get( {57} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [121] stPaddingLeft = Props.Get( {58} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [122] stPaddingRight = Props.Get( {59} ) 
_B._stpaddingright=_props["PaddingRight"];
// [123] stPaddingTop = Props.Get( {60} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [124] stSrc = Props.Get( {61} ) 
_B._stsrc=_props["Src"];
// [125] stTarget = Props.Get( {62} ) 
_B._sttarget=_props["Target"];
// [126] stTextDecoration = Props.Get( {63} ) 
_B._sttextdecoration=_props["TextDecoration"];
// [127] stTextPadding = Props.Get( {64} ) 
_B._sttextpadding=_props["TextPadding"];
// [128] stTitle = Props.Get( {65} ) 
_B._sttitle=_props["Title"];
// [129] End If 
}
// [131] AddAttr( {66} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [132] AddAttr( {67} , stAlt) 
_B.addattr("alt",_B._stalt,_B);
// [133] AddAttr( {68} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [134] AddAttr( {69} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [135] AddAttr( {70} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [136] AddAttr( {71} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [137] AddAttr( {72} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [138] AddAttr( {73} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [139] AddAttr( {74} , stFontStyle) 
_B.addattr("font-style",_B._stfontstyle,_B);
// [140] AddAttr( {75} , stFontWeight) 
_B.addattr("font-weight",_B._stfontweight,_B);
// [141] AddAttr( {76} , stHref) 
_B.addattr("href",_B._sthref,_B);
// [142] AddAttr( {77} , stIconHeight) 
_B.addattr("icon-height",_B._sticonheight,_B);
// [143] AddAttr( {78} , stIconPadding) 
_B.addattr("icon-padding",_B._sticonpadding,_B);
// [144] AddAttr( {79} , stIconSize) 
_B.addattr("icon-size",_B._sticonsize,_B);
// [145] AddAttr( {80} , stLineHeight) 
_B.addattr("line-height",_B._stlineheight,_B);
// [146] AddAttr( {81} , stMode) 
_B.addattr("mode",_B._stmode,_B);
// [147] AddAttr( {82} , stName) 
_B.addattr("name",_B._stname,_B);
// [148] AddAttr( {83} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [149] AddAttr( {84} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [150] AddAttr( {85} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [151] AddAttr( {86} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [152] AddAttr( {87} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [153] AddAttr( {88} , stSrc) 
_B.addattr("src",_B._stsrc,_B);
// [154] AddAttr( {89} , stTarget) 
_B.addattr("target",_B._sttarget,_B);
// [155] AddAttr( {90} , stTextDecoration) 
_B.addattr("text-decoration",_B._sttextdecoration,_B);
// [156] AddAttr( {91} , stTextPadding) 
_B.addattr("text-padding",_B._sttextpadding,_B);
// [157] AddAttr( {92} , stTitle) 
_B.addattr("title",_B._sttitle,_B);
// [158] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [159] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [160] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [163] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [164] mElement = mTarget.Append(strHTML).Get( {93} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [170] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [172] Dim className As String = BANanoShared.JoinMapKeys(classList, {94} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [173] AddAttr( {95} , className) 
_B.addattr("class",_classname,_B);
// [175] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [176] AddAttr( {96} , styleName) 
_B.addattr("style",_stylename,_B);
// [178] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [179] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [180] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [181] Return rslt 
return _rslt;
// End Sub
};

// [185] Sub AddBR 
_B.addbr=function() {
// [186] sbText.Append( {97} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [190] Sub AddHR 
_B.addhr=function() {
// [191] sbText.Append( {98} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [195] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [196] Return mElement 
return _B._melement;
// End Sub
};

// [200] public Sub getID() As String 
_B.getid=function() {
// [201] Return mName 
return _B._mname;
// End Sub
};

// [205] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [206] mTarget = BANano.GetElement( {99} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [207] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [211] public Sub Remove() 
_B.remove=function() {
// [212] mElement.Remove 
_B._melement.remove();
// [213] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [217] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [218] If mElement <> Null Then 
if (_B._melement!=null) {
// [219] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [220] End If 
}
// End Sub
};

// [224] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [225] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [226] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [227] varClass = varClass.trim 
_varclass=_varclass.trim();
// [228] if varClass = {100} Then Return 
if (_varclass=="") { return ;}
// [229] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [230] Dim mxItems As List = BANanoShared.StrParse( {101} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [233] Next 
}
// End Sub
};

// [237] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [238] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [239] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [240] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [241] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [242] varClass = varClass.trim 
_varclass=_varclass.trim();
// [243] if varClass = {102} Then Return 
if (_varclass=="") { return ;}
// [244] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [245] Dim mxItems As List = BANanoShared.StrParse( {103} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [246] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [247] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [248] Next 
}
// End Sub
};

// [252] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [253] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [254] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [255] If mElement <> Null Then 
if (_B._melement!=null) {
// [256] Dim aStyle As Map = CreateMap() 
_astyle={};
// [257] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [258] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [259] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [260] End If 
}
// [261] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [265] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [266] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [267] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [269] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [270] If varValue = True Then 
if (_varvalue==true) {
// [271] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [272] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [273] End If 
}
// [274] Else 
} else {
// [276] If varValue.StartsWith( {104} ) Then 
if (_varvalue.startsWith(":")) {
// [277] If varValue.StartsWith( {105} ) Then 
if (_varvalue.startsWith("$")) {
// [278] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [279] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [280] Else 
} else {
// [281] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [282] If rname.Contains( {106} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [283] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [284] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [285] End If 
}
// [286] Else 
} else {
// [288] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [289] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [290] Select Case varProp 
switch ("" + _varprop) {
// [291] Case {107} , {108} , {109} , {110} , {111} , {112} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [292] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [293] End Select 
break;
}
// [294] End If 
}
// [295] End If 
}
// [296] Return 
return;
// End Sub
};

// [300] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [301] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [302] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [303] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [304] sbClass.Append(k).Append( {113} ) 
_sbclass.append(_k).append(" ");
// [305] Next 
}
// [306] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [307] Return mClasses 
return _B._mclasses;
// End Sub
};

// [311] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [312] If mElement <> Null Then 
if (_B._melement!=null) {
// [313] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [314] End If 
}
// [315] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [316] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [317] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [318] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [319] Next 
}
// End Sub
};

// [323] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [324] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [325] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [326] sbStyle.Append( {114} ) 
_sbstyle.append("{");
// [327] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [328] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [329] sbStyle.Append(k).Append( {115} ).Append(v).Append( {116} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [330] Next 
}
// [331] sbStyle.Append( {117} ) 
_sbstyle.append("}");
// [332] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [333] Return mStyle 
return _B._mstyle;
// End Sub
};

// [337] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [338] Dim mxItems As List = BANanoShared.StrParse( {118} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [339] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [340] Dim k As String = BANanoShared.MvField(mt,1, {119} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [341] Dim v As String = BANanoShared.MvField(mt,2, {120} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [342] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [343] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [344] Next 
}
// End Sub
};

// [348] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [349] Dim mxItems As List = BANanoShared.StrParse( {121} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [350] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [351] Dim k As String = BANanoShared.MvField(mt,1, {122} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [352] Dim v As String = BANanoShared.MvField(mt,2, {123} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [353] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [354] Next 
}
// End Sub
};

// [358] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [359] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [360] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [361] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [362] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [363] sbAttr.Append(k).Append( {124} ).Append(v).Append( {125} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [364] Next 
}
// [365] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [366] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [370] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [371] If mElement <> Null Then 
if (_B._melement!=null) {
// [372] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [373] End If 
}
// [374] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [378] public Sub getCaption() As String 
_B.getcaption=function() {
// [379] Return mCaption 
return _B._mcaption;
// End Sub
};

// [382] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [383] AddAttr( {126} , varAlign) 
_B.addattr("align",_varalign,_B);
// [384] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [387] public Sub getAlign() As String 
_B.getalign=function() {
// [388] Return stAlign 
return _B._stalign;
// End Sub
};

// [391] public Sub setAlt(varAlt As String) 
_B.setalt=function(_varalt) {
// [392] AddAttr( {127} , varAlt) 
_B.addattr("alt",_varalt,_B);
// [393] stAlt = varAlt 
_B._stalt=_varalt;
// End Sub
};

// [396] public Sub getAlt() As String 
_B.getalt=function() {
// [397] Return stAlt 
return _B._stalt;
// End Sub
};

// [400] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [401] AddAttr( {128} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [402] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [405] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [406] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [409] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [410] AddAttr( {129} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [411] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [414] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [415] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [418] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [419] AddAttr( {130} , varColor) 
_B.addattr("color",_varcolor,_B);
// [420] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [423] public Sub getColor() As String 
_B.getcolor=function() {
// [424] Return stColor 
return _B._stcolor;
// End Sub
};

// [427] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [428] AddAttr( {131} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [429] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [432] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [433] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [436] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [437] AddAttr( {132} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [438] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [441] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [442] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [445] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [446] AddAttr( {133} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [447] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [450] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [451] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [454] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [455] AddAttr( {134} , varFontStyle) 
_B.addattr("font-style",_varfontstyle,_B);
// [456] stFontStyle = varFontStyle 
_B._stfontstyle=_varfontstyle;
// End Sub
};

// [459] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [460] Return stFontStyle 
return _B._stfontstyle;
// End Sub
};

// [463] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [464] AddAttr( {135} , varFontWeight) 
_B.addattr("font-weight",_varfontweight,_B);
// [465] stFontWeight = varFontWeight 
_B._stfontweight=_varfontweight;
// End Sub
};

// [468] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [469] Return stFontWeight 
return _B._stfontweight;
// End Sub
};

// [472] public Sub setHref(varHref As String) 
_B.sethref=function(_varhref) {
// [473] AddAttr( {136} , varHref) 
_B.addattr("href",_varhref,_B);
// [474] stHref = varHref 
_B._sthref=_varhref;
// End Sub
};

// [477] public Sub getHref() As String 
_B.gethref=function() {
// [478] Return stHref 
return _B._sthref;
// End Sub
};

// [481] public Sub setIconHeight(varIconHeight As String) 
_B.seticonheight=function(_variconheight) {
// [482] AddAttr( {137} , varIconHeight) 
_B.addattr("icon-height",_variconheight,_B);
// [483] stIconHeight = varIconHeight 
_B._sticonheight=_variconheight;
// End Sub
};

// [486] public Sub getIconHeight() As String 
_B.geticonheight=function() {
// [487] Return stIconHeight 
return _B._sticonheight;
// End Sub
};

// [490] public Sub setIconPadding(varIconPadding As String) 
_B.seticonpadding=function(_variconpadding) {
// [491] AddAttr( {138} , varIconPadding) 
_B.addattr("icon-padding",_variconpadding,_B);
// [492] stIconPadding = varIconPadding 
_B._sticonpadding=_variconpadding;
// End Sub
};

// [495] public Sub getIconPadding() As String 
_B.geticonpadding=function() {
// [496] Return stIconPadding 
return _B._sticonpadding;
// End Sub
};

// [499] public Sub setIconSize(varIconSize As String) 
_B.seticonsize=function(_variconsize) {
// [500] AddAttr( {139} , varIconSize) 
_B.addattr("icon-size",_variconsize,_B);
// [501] stIconSize = varIconSize 
_B._sticonsize=_variconsize;
// End Sub
};

// [504] public Sub getIconSize() As String 
_B.geticonsize=function() {
// [505] Return stIconSize 
return _B._sticonsize;
// End Sub
};

// [508] public Sub setLineHeight(varLineHeight As String) 
_B.setlineheight=function(_varlineheight) {
// [509] AddAttr( {140} , varLineHeight) 
_B.addattr("line-height",_varlineheight,_B);
// [510] stLineHeight = varLineHeight 
_B._stlineheight=_varlineheight;
// End Sub
};

// [513] public Sub getLineHeight() As String 
_B.getlineheight=function() {
// [514] Return stLineHeight 
return _B._stlineheight;
// End Sub
};

// [517] public Sub setMode(varMode As String) 
_B.setmode=function(_varmode) {
// [518] AddAttr( {141} , varMode) 
_B.addattr("mode",_varmode,_B);
// [519] stMode = varMode 
_B._stmode=_varmode;
// End Sub
};

// [522] public Sub getMode() As String 
_B.getmode=function() {
// [523] Return stMode 
return _B._stmode;
// End Sub
};

// [526] public Sub setName(varName As String) 
_B.setname=function(_varname) {
// [527] AddAttr( {142} , varName) 
_B.addattr("name",_varname,_B);
// [528] stName = varName 
_B._stname=_varname;
// End Sub
};

// [531] public Sub getName() As String 
_B.getname=function() {
// [532] Return stName 
return _B._stname;
// End Sub
};

// [535] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [536] AddAttr( {143} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [537] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [540] public Sub getPadding() As String 
_B.getpadding=function() {
// [541] Return stPadding 
return _B._stpadding;
// End Sub
};

// [544] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [545] AddAttr( {144} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [546] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [549] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [550] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [553] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [554] AddAttr( {145} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [555] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [558] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [559] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [562] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [563] AddAttr( {146} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [564] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [567] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [568] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [571] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [572] AddAttr( {147} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [573] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [576] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [577] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [580] public Sub setSrc(varSrc As String) 
_B.setsrc=function(_varsrc) {
// [581] AddAttr( {148} , varSrc) 
_B.addattr("src",_varsrc,_B);
// [582] stSrc = varSrc 
_B._stsrc=_varsrc;
// End Sub
};

// [585] public Sub getSrc() As String 
_B.getsrc=function() {
// [586] Return stSrc 
return _B._stsrc;
// End Sub
};

// [589] public Sub setTarget(varTarget As String) 
_B.settarget=function(_vartarget) {
// [590] AddAttr( {149} , varTarget) 
_B.addattr("target",_vartarget,_B);
// [591] stTarget = varTarget 
_B._sttarget=_vartarget;
// End Sub
};

// [594] public Sub getTarget() As String 
_B.gettarget=function() {
// [595] Return stTarget 
return _B._sttarget;
// End Sub
};

// [598] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [599] AddAttr( {150} , varTextDecoration) 
_B.addattr("text-decoration",_vartextdecoration,_B);
// [600] stTextDecoration = varTextDecoration 
_B._sttextdecoration=_vartextdecoration;
// End Sub
};

// [603] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [604] Return stTextDecoration 
return _B._sttextdecoration;
// End Sub
};

// [607] public Sub setTextPadding(varTextPadding As String) 
_B.settextpadding=function(_vartextpadding) {
// [608] AddAttr( {151} , varTextPadding) 
_B.addattr("text-padding",_vartextpadding,_B);
// [609] stTextPadding = varTextPadding 
_B._sttextpadding=_vartextpadding;
// End Sub
};

// [612] public Sub getTextPadding() As String 
_B.gettextpadding=function() {
// [613] Return stTextPadding 
return _B._sttextpadding;
// End Sub
};

// [616] public Sub setTitle(varTitle As String) 
_B.settitle=function(_vartitle) {
// [617] AddAttr( {152} , varTitle) 
_B.addattr("title",_vartitle,_B);
// [618] stTitle = varTitle 
_B._sttitle=_vartitle;
// End Sub
};

// [621] public Sub getTitle() As String 
_B.gettitle=function() {
// [622] Return stTitle 
return _B._sttitle;
// End Sub
};

// [627] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [628] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJSpacer  =========================== */
function banano_bananomjml_mjspacer() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-spacer";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stheight="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._stverticalalign="";

_B._stwidth="";

// [50] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [51] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [52] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [53] mCallBack = CallBack 
_B._mcallback=_callback;
// [54] classList.Initialize 
_B._classlist={};
// [55] styleList.Initialize 
_B._stylelist={};
// [56] attributeList.Initialize 
_B._attributelist={};
// [57] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [61] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [62] mTarget = Target 
_B._mtarget=_target;
// [63] If Props <> Null Then 
if (_props!=null) {
// [64] mClasses = Props.Get( {18} ) 
_B._mclasses=_props["Classes"];
// [65] mAttributes = Props.Get( {19} ) 
_B._mattributes=_props["Attributes"];
// [66] mStyle = Props.Get( {20} ) 
_B._mstyle=_props["Style"];
// [67] mCaption = Props.Get( {21} ) 
_B._mcaption=_props["Caption"];
// [68] stContainerBackgroundColor = Props.Get( {22} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [69] stCssClass = Props.Get( {23} ) 
_B._stcssclass=_props["CssClass"];
// [70] stHeight = Props.Get( {24} ) 
_B._stheight=_props["Height"];
// [71] stPadding = Props.Get( {25} ) 
_B._stpadding=_props["Padding"];
// [72] stPaddingBottom = Props.Get( {26} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [73] stPaddingLeft = Props.Get( {27} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [74] stPaddingRight = Props.Get( {28} ) 
_B._stpaddingright=_props["PaddingRight"];
// [75] stPaddingTop = Props.Get( {29} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [76] stVerticalAlign = Props.Get( {30} ) 
_B._stverticalalign=_props["VerticalAlign"];
// [77] stWidth = Props.Get( {31} ) 
_B._stwidth=_props["Width"];
// [78] End If 
}
// [80] AddAttr( {32} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [81] AddAttr( {33} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [82] AddAttr( {34} , stHeight) 
_B.addattr("height",_B._stheight,_B);
// [83] AddAttr( {35} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [84] AddAttr( {36} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [85] AddAttr( {37} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [86] AddAttr( {38} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [87] AddAttr( {39} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [88] AddAttr( {40} , stVerticalAlign) 
_B.addattr("vertical-align",_B._stverticalalign,_B);
// [89] AddAttr( {41} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [90] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [91] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [92] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [95] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [96] mElement = mTarget.Append(strHTML).Get( {42} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [102] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [104] Dim className As String = BANanoShared.JoinMapKeys(classList, {43} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [105] AddAttr( {44} , className) 
_B.addattr("class",_classname,_B);
// [107] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [108] AddAttr( {45} , styleName) 
_B.addattr("style",_stylename,_B);
// [110] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [111] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [112] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [113] Return rslt 
return _rslt;
// End Sub
};

// [117] Sub AddBR 
_B.addbr=function() {
// [118] sbText.Append( {46} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [122] Sub AddHR 
_B.addhr=function() {
// [123] sbText.Append( {47} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [127] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [128] Return mElement 
return _B._melement;
// End Sub
};

// [132] public Sub getID() As String 
_B.getid=function() {
// [133] Return mName 
return _B._mname;
// End Sub
};

// [137] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [138] mTarget = BANano.GetElement( {48} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [139] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [143] public Sub Remove() 
_B.remove=function() {
// [144] mElement.Remove 
_B._melement.remove();
// [145] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [149] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [150] If mElement <> Null Then 
if (_B._melement!=null) {
// [151] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [152] End If 
}
// End Sub
};

// [156] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [157] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [158] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [159] varClass = varClass.trim 
_varclass=_varclass.trim();
// [160] if varClass = {49} Then Return 
if (_varclass=="") { return ;}
// [161] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [162] Dim mxItems As List = BANanoShared.StrParse( {50} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [163] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [164] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [165] Next 
}
// End Sub
};

// [169] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [170] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [171] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [172] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [173] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [174] varClass = varClass.trim 
_varclass=_varclass.trim();
// [175] if varClass = {51} Then Return 
if (_varclass=="") { return ;}
// [176] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [177] Dim mxItems As List = BANanoShared.StrParse( {52} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [178] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [179] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [180] Next 
}
// End Sub
};

// [184] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [185] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [186] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [187] If mElement <> Null Then 
if (_B._melement!=null) {
// [188] Dim aStyle As Map = CreateMap() 
_astyle={};
// [189] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [190] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [191] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [192] End If 
}
// [193] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [197] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [198] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [199] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [201] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [202] If varValue = True Then 
if (_varvalue==true) {
// [203] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [204] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [205] End If 
}
// [206] Else 
} else {
// [208] If varValue.StartsWith( {53} ) Then 
if (_varvalue.startsWith(":")) {
// [209] If varValue.StartsWith( {54} ) Then 
if (_varvalue.startsWith("$")) {
// [210] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [211] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [212] Else 
} else {
// [213] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [214] If rname.Contains( {55} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [215] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [216] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [217] End If 
}
// [218] Else 
} else {
// [220] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [221] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [222] Select Case varProp 
switch ("" + _varprop) {
// [223] Case {56} , {57} , {58} , {59} , {60} , {61} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [224] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [225] End Select 
break;
}
// [226] End If 
}
// [227] End If 
}
// [228] Return 
return;
// End Sub
};

// [232] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [233] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [234] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [235] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [236] sbClass.Append(k).Append( {62} ) 
_sbclass.append(_k).append(" ");
// [237] Next 
}
// [238] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [239] Return mClasses 
return _B._mclasses;
// End Sub
};

// [243] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [244] If mElement <> Null Then 
if (_B._melement!=null) {
// [245] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [246] End If 
}
// [247] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [248] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [249] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [250] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [251] Next 
}
// End Sub
};

// [255] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [256] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [257] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [258] sbStyle.Append( {63} ) 
_sbstyle.append("{");
// [259] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [260] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [261] sbStyle.Append(k).Append( {64} ).Append(v).Append( {65} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [262] Next 
}
// [263] sbStyle.Append( {66} ) 
_sbstyle.append("}");
// [264] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [265] Return mStyle 
return _B._mstyle;
// End Sub
};

// [269] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [270] Dim mxItems As List = BANanoShared.StrParse( {67} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [271] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [272] Dim k As String = BANanoShared.MvField(mt,1, {68} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [273] Dim v As String = BANanoShared.MvField(mt,2, {69} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [274] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [275] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [276] Next 
}
// End Sub
};

// [280] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [281] Dim mxItems As List = BANanoShared.StrParse( {70} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [282] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [283] Dim k As String = BANanoShared.MvField(mt,1, {71} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [284] Dim v As String = BANanoShared.MvField(mt,2, {72} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [285] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [286] Next 
}
// End Sub
};

// [290] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [291] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [292] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [293] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [294] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [295] sbAttr.Append(k).Append( {73} ).Append(v).Append( {74} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [296] Next 
}
// [297] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [298] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [302] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [303] If mElement <> Null Then 
if (_B._melement!=null) {
// [304] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [305] End If 
}
// [306] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [310] public Sub getCaption() As String 
_B.getcaption=function() {
// [311] Return mCaption 
return _B._mcaption;
// End Sub
};

// [314] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [315] AddAttr( {75} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [316] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [319] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [320] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [323] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [324] AddAttr( {76} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [325] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [328] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [329] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [332] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [333] AddAttr( {77} , varHeight) 
_B.addattr("height",_varheight,_B);
// [334] stHeight = varHeight 
_B._stheight=_varheight;
// End Sub
};

// [337] public Sub getHeight() As String 
_B.getheight=function() {
// [338] Return stHeight 
return _B._stheight;
// End Sub
};

// [341] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [342] AddAttr( {78} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [343] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [346] public Sub getPadding() As String 
_B.getpadding=function() {
// [347] Return stPadding 
return _B._stpadding;
// End Sub
};

// [350] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [351] AddAttr( {79} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [352] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [355] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [356] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [359] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [360] AddAttr( {80} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [361] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [364] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [365] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [368] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [369] AddAttr( {81} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [370] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [373] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [374] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [377] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [378] AddAttr( {82} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [379] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [382] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [383] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [386] public Sub setVerticalAlign(varVerticalAlign As String) 
_B.setverticalalign=function(_varverticalalign) {
// [387] AddAttr( {83} , varVerticalAlign) 
_B.addattr("vertical-align",_varverticalalign,_B);
// [388] stVerticalAlign = varVerticalAlign 
_B._stverticalalign=_varverticalalign;
// End Sub
};

// [391] public Sub getVerticalAlign() As String 
_B.getverticalalign=function() {
// [392] Return stVerticalAlign 
return _B._stverticalalign;
// End Sub
};

// [395] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [396] AddAttr( {84} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [397] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [400] public Sub getWidth() As String 
_B.getwidth=function() {
// [401] Return stWidth 
return _B._stwidth;
// End Sub
};

// [406] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [407] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJStyle  =========================== */
function banano_bananomjml_mjstyle() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-style";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stinline="inline";

// [32] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [33] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [34] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [35] mCallBack = CallBack 
_B._mcallback=_callback;
// [36] classList.Initialize 
_B._classlist={};
// [37] styleList.Initialize 
_B._stylelist={};
// [38] attributeList.Initialize 
_B._attributelist={};
// [39] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [43] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [44] mTarget = Target 
_B._mtarget=_target;
// [45] If Props <> Null Then 
if (_props!=null) {
// [46] mClasses = Props.Get( {9} ) 
_B._mclasses=_props["Classes"];
// [47] mAttributes = Props.Get( {10} ) 
_B._mattributes=_props["Attributes"];
// [48] mStyle = Props.Get( {11} ) 
_B._mstyle=_props["Style"];
// [49] mCaption = Props.Get( {12} ) 
_B._mcaption=_props["Caption"];
// [50] stInline = Props.Get( {13} ) 
_B._stinline=_props["Inline"];
// [51] End If 
}
// [53] AddAttr( {14} , stInline) 
_B.addattr("inline",_B._stinline,_B);
// [54] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [55] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [56] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [59] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [60] mElement = mTarget.Append(strHTML).Get( {15} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [66] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [68] Dim className As String = BANanoShared.JoinMapKeys(classList, {16} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [69] AddAttr( {17} , className) 
_B.addattr("class",_classname,_B);
// [71] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [72] AddAttr( {18} , styleName) 
_B.addattr("style",_stylename,_B);
// [74] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [75] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [76] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [77] Return rslt 
return _rslt;
// End Sub
};

// [81] Sub AddBR 
_B.addbr=function() {
// [82] sbText.Append( {19} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [86] Sub AddHR 
_B.addhr=function() {
// [87] sbText.Append( {20} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [91] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [92] Return mElement 
return _B._melement;
// End Sub
};

// [96] public Sub getID() As String 
_B.getid=function() {
// [97] Return mName 
return _B._mname;
// End Sub
};

// [101] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [102] mTarget = BANano.GetElement( {21} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [103] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [107] public Sub Remove() 
_B.remove=function() {
// [108] mElement.Remove 
_B._melement.remove();
// [109] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [113] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [114] If mElement <> Null Then 
if (_B._melement!=null) {
// [115] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [116] End If 
}
// End Sub
};

// [120] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [121] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [122] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [123] varClass = varClass.trim 
_varclass=_varclass.trim();
// [124] if varClass = {22} Then Return 
if (_varclass=="") { return ;}
// [125] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [126] Dim mxItems As List = BANanoShared.StrParse( {23} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [127] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [128] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [129] Next 
}
// End Sub
};

// [133] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [134] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [135] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [136] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [137] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [138] varClass = varClass.trim 
_varclass=_varclass.trim();
// [139] if varClass = {24} Then Return 
if (_varclass=="") { return ;}
// [140] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [141] Dim mxItems As List = BANanoShared.StrParse( {25} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [142] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [143] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [144] Next 
}
// End Sub
};

// [148] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [149] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [150] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [151] If mElement <> Null Then 
if (_B._melement!=null) {
// [152] Dim aStyle As Map = CreateMap() 
_astyle={};
// [153] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [154] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [155] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [156] End If 
}
// [157] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [161] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [162] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [163] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [165] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [166] If varValue = True Then 
if (_varvalue==true) {
// [167] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [168] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [169] End If 
}
// [170] Else 
} else {
// [172] If varValue.StartsWith( {26} ) Then 
if (_varvalue.startsWith(":")) {
// [173] If varValue.StartsWith( {27} ) Then 
if (_varvalue.startsWith("$")) {
// [174] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [175] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [176] Else 
} else {
// [177] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [178] If rname.Contains( {28} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [179] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [180] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [181] End If 
}
// [182] Else 
} else {
// [184] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [185] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [186] Select Case varProp 
switch ("" + _varprop) {
// [187] Case {29} , {30} , {31} , {32} , {33} , {34} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [188] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [189] End Select 
break;
}
// [190] End If 
}
// [191] End If 
}
// [192] Return 
return;
// End Sub
};

// [196] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [197] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [198] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [199] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [200] sbClass.Append(k).Append( {35} ) 
_sbclass.append(_k).append(" ");
// [201] Next 
}
// [202] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [203] Return mClasses 
return _B._mclasses;
// End Sub
};

// [207] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [208] If mElement <> Null Then 
if (_B._melement!=null) {
// [209] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [210] End If 
}
// [211] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [212] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [213] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [214] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [215] Next 
}
// End Sub
};

// [219] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [220] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [221] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [222] sbStyle.Append( {36} ) 
_sbstyle.append("{");
// [223] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [224] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [225] sbStyle.Append(k).Append( {37} ).Append(v).Append( {38} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [226] Next 
}
// [227] sbStyle.Append( {39} ) 
_sbstyle.append("}");
// [228] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [229] Return mStyle 
return _B._mstyle;
// End Sub
};

// [233] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [234] Dim mxItems As List = BANanoShared.StrParse( {40} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [235] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [236] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [237] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [238] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [239] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [240] Next 
}
// End Sub
};

// [244] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [245] Dim mxItems As List = BANanoShared.StrParse( {43} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [246] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [247] Dim k As String = BANanoShared.MvField(mt,1, {44} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [248] Dim v As String = BANanoShared.MvField(mt,2, {45} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [249] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [250] Next 
}
// End Sub
};

// [254] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [255] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [256] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [257] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [258] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [259] sbAttr.Append(k).Append( {46} ).Append(v).Append( {47} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [260] Next 
}
// [261] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [262] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [266] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [267] If mElement <> Null Then 
if (_B._melement!=null) {
// [268] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [269] End If 
}
// [270] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [274] public Sub getCaption() As String 
_B.getcaption=function() {
// [275] Return mCaption 
return _B._mcaption;
// End Sub
};

// [278] public Sub setInline(varInline As String) 
_B.setinline=function(_varinline) {
// [279] AddAttr( {48} , varInline) 
_B.addattr("inline",_varinline,_B);
// [280] stInline = varInline 
_B._stinline=_varinline;
// End Sub
};

// [283] public Sub getInline() As String 
_B.getinline=function() {
// [284] Return stInline 
return _B._stinline;
// End Sub
};

// [289] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [290] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJTable  =========================== */
function banano_bananomjml_mjtable() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="table";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stborder="";

_B._stcellpadding="";

_B._stcellspacing="";

_B._stcolor="";

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stfontstyle="";

_B._stlineheight="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._sttablelayout="";

_B._stwidth="";

// [66] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [67] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [68] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [69] mCallBack = CallBack 
_B._mcallback=_callback;
// [70] classList.Initialize 
_B._classlist={};
// [71] styleList.Initialize 
_B._stylelist={};
// [72] attributeList.Initialize 
_B._attributelist={};
// [73] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [77] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [78] mTarget = Target 
_B._mtarget=_target;
// [79] If Props <> Null Then 
if (_props!=null) {
// [80] mClasses = Props.Get( {26} ) 
_B._mclasses=_props["Classes"];
// [81] mAttributes = Props.Get( {27} ) 
_B._mattributes=_props["Attributes"];
// [82] mStyle = Props.Get( {28} ) 
_B._mstyle=_props["Style"];
// [83] mCaption = Props.Get( {29} ) 
_B._mcaption=_props["Caption"];
// [84] stAlign = Props.Get( {30} ) 
_B._stalign=_props["Align"];
// [85] stBorder = Props.Get( {31} ) 
_B._stborder=_props["Border"];
// [86] stCellpadding = Props.Get( {32} ) 
_B._stcellpadding=_props["Cellpadding"];
// [87] stCellspacing = Props.Get( {33} ) 
_B._stcellspacing=_props["Cellspacing"];
// [88] stColor = Props.Get( {34} ) 
_B._stcolor=_props["Color"];
// [89] stContainerBackgroundColor = Props.Get( {35} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [90] stCssClass = Props.Get( {36} ) 
_B._stcssclass=_props["CssClass"];
// [91] stFontFamily = Props.Get( {37} ) 
_B._stfontfamily=_props["FontFamily"];
// [92] stFontSize = Props.Get( {38} ) 
_B._stfontsize=_props["FontSize"];
// [93] stFontStyle = Props.Get( {39} ) 
_B._stfontstyle=_props["FontStyle"];
// [94] stLineHeight = Props.Get( {40} ) 
_B._stlineheight=_props["LineHeight"];
// [95] stPadding = Props.Get( {41} ) 
_B._stpadding=_props["Padding"];
// [96] stPaddingBottom = Props.Get( {42} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [97] stPaddingLeft = Props.Get( {43} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [98] stPaddingRight = Props.Get( {44} ) 
_B._stpaddingright=_props["PaddingRight"];
// [99] stPaddingTop = Props.Get( {45} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [100] stTableLayout = Props.Get( {46} ) 
_B._sttablelayout=_props["TableLayout"];
// [101] stWidth = Props.Get( {47} ) 
_B._stwidth=_props["Width"];
// [102] End If 
}
// [104] AddAttr( {48} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [105] AddAttr( {49} , stBorder) 
_B.addattr("border",_B._stborder,_B);
// [106] AddAttr( {50} , stCellpadding) 
_B.addattr("cellpadding",_B._stcellpadding,_B);
// [107] AddAttr( {51} , stCellspacing) 
_B.addattr("cellspacing",_B._stcellspacing,_B);
// [108] AddAttr( {52} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [109] AddAttr( {53} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [110] AddAttr( {54} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [111] AddAttr( {55} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [112] AddAttr( {56} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [113] AddAttr( {57} , stFontStyle) 
_B.addattr("font-style",_B._stfontstyle,_B);
// [114] AddAttr( {58} , stLineHeight) 
_B.addattr("line-height",_B._stlineheight,_B);
// [115] AddAttr( {59} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [116] AddAttr( {60} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [117] AddAttr( {61} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [118] AddAttr( {62} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [119] AddAttr( {63} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [120] AddAttr( {64} , stTableLayout) 
_B.addattr("table-layout",_B._sttablelayout,_B);
// [121] AddAttr( {65} , stWidth) 
_B.addattr("width",_B._stwidth,_B);
// [122] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [123] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [124] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [127] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [128] mElement = mTarget.Append(strHTML).Get( {66} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [134] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [136] Dim className As String = BANanoShared.JoinMapKeys(classList, {67} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [137] AddAttr( {68} , className) 
_B.addattr("class",_classname,_B);
// [139] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [140] AddAttr( {69} , styleName) 
_B.addattr("style",_stylename,_B);
// [142] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [143] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [144] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [145] Return rslt 
return _rslt;
// End Sub
};

// [149] Sub AddBR 
_B.addbr=function() {
// [150] sbText.Append( {70} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [154] Sub AddHR 
_B.addhr=function() {
// [155] sbText.Append( {71} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [159] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [160] Return mElement 
return _B._melement;
// End Sub
};

// [164] public Sub getID() As String 
_B.getid=function() {
// [165] Return mName 
return _B._mname;
// End Sub
};

// [169] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [170] mTarget = BANano.GetElement( {72} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [171] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [175] public Sub Remove() 
_B.remove=function() {
// [176] mElement.Remove 
_B._melement.remove();
// [177] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [181] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [182] If mElement <> Null Then 
if (_B._melement!=null) {
// [183] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [184] End If 
}
// End Sub
};

// [188] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [189] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [190] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [191] varClass = varClass.trim 
_varclass=_varclass.trim();
// [192] if varClass = {73} Then Return 
if (_varclass=="") { return ;}
// [193] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [194] Dim mxItems As List = BANanoShared.StrParse( {74} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [195] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [196] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [197] Next 
}
// End Sub
};

// [201] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [202] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [203] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [204] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [205] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [206] varClass = varClass.trim 
_varclass=_varclass.trim();
// [207] if varClass = {75} Then Return 
if (_varclass=="") { return ;}
// [208] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [209] Dim mxItems As List = BANanoShared.StrParse( {76} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [210] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [211] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [212] Next 
}
// End Sub
};

// [216] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [217] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [218] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [219] If mElement <> Null Then 
if (_B._melement!=null) {
// [220] Dim aStyle As Map = CreateMap() 
_astyle={};
// [221] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [222] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [223] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [224] End If 
}
// [225] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [229] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [230] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [231] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [233] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [234] If varValue = True Then 
if (_varvalue==true) {
// [235] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [236] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [237] End If 
}
// [238] Else 
} else {
// [240] If varValue.StartsWith( {77} ) Then 
if (_varvalue.startsWith(":")) {
// [241] If varValue.StartsWith( {78} ) Then 
if (_varvalue.startsWith("$")) {
// [242] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [243] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [244] Else 
} else {
// [245] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [246] If rname.Contains( {79} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [247] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [248] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [249] End If 
}
// [250] Else 
} else {
// [252] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [253] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [254] Select Case varProp 
switch ("" + _varprop) {
// [255] Case {80} , {81} , {82} , {83} , {84} , {85} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [256] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [257] End Select 
break;
}
// [258] End If 
}
// [259] End If 
}
// [260] Return 
return;
// End Sub
};

// [264] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [265] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [266] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [267] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [268] sbClass.Append(k).Append( {86} ) 
_sbclass.append(_k).append(" ");
// [269] Next 
}
// [270] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [271] Return mClasses 
return _B._mclasses;
// End Sub
};

// [275] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [276] If mElement <> Null Then 
if (_B._melement!=null) {
// [277] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [278] End If 
}
// [279] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [280] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [281] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [282] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [283] Next 
}
// End Sub
};

// [287] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [288] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [289] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [290] sbStyle.Append( {87} ) 
_sbstyle.append("{");
// [291] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [292] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [293] sbStyle.Append(k).Append( {88} ).Append(v).Append( {89} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [294] Next 
}
// [295] sbStyle.Append( {90} ) 
_sbstyle.append("}");
// [296] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [297] Return mStyle 
return _B._mstyle;
// End Sub
};

// [301] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [302] Dim mxItems As List = BANanoShared.StrParse( {91} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [303] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [304] Dim k As String = BANanoShared.MvField(mt,1, {92} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [305] Dim v As String = BANanoShared.MvField(mt,2, {93} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [306] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [307] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [308] Next 
}
// End Sub
};

// [312] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [313] Dim mxItems As List = BANanoShared.StrParse( {94} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [314] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [315] Dim k As String = BANanoShared.MvField(mt,1, {95} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [316] Dim v As String = BANanoShared.MvField(mt,2, {96} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [317] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [318] Next 
}
// End Sub
};

// [322] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [323] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [324] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [325] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [326] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [327] sbAttr.Append(k).Append( {97} ).Append(v).Append( {98} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [328] Next 
}
// [329] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [330] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [334] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [335] If mElement <> Null Then 
if (_B._melement!=null) {
// [336] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [337] End If 
}
// [338] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [342] public Sub getCaption() As String 
_B.getcaption=function() {
// [343] Return mCaption 
return _B._mcaption;
// End Sub
};

// [346] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [347] AddAttr( {99} , varAlign) 
_B.addattr("align",_varalign,_B);
// [348] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [351] public Sub getAlign() As String 
_B.getalign=function() {
// [352] Return stAlign 
return _B._stalign;
// End Sub
};

// [355] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [356] AddAttr( {100} , varBorder) 
_B.addattr("border",_varborder,_B);
// [357] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [360] public Sub getBorder() As String 
_B.getborder=function() {
// [361] Return stBorder 
return _B._stborder;
// End Sub
};

// [364] public Sub setCellpadding(varCellpadding As String) 
_B.setcellpadding=function(_varcellpadding) {
// [365] AddAttr( {101} , varCellpadding) 
_B.addattr("cellpadding",_varcellpadding,_B);
// [366] stCellpadding = varCellpadding 
_B._stcellpadding=_varcellpadding;
// End Sub
};

// [369] public Sub getCellpadding() As String 
_B.getcellpadding=function() {
// [370] Return stCellpadding 
return _B._stcellpadding;
// End Sub
};

// [373] public Sub setCellspacing(varCellspacing As String) 
_B.setcellspacing=function(_varcellspacing) {
// [374] AddAttr( {102} , varCellspacing) 
_B.addattr("cellspacing",_varcellspacing,_B);
// [375] stCellspacing = varCellspacing 
_B._stcellspacing=_varcellspacing;
// End Sub
};

// [378] public Sub getCellspacing() As String 
_B.getcellspacing=function() {
// [379] Return stCellspacing 
return _B._stcellspacing;
// End Sub
};

// [382] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [383] AddAttr( {103} , varColor) 
_B.addattr("color",_varcolor,_B);
// [384] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [387] public Sub getColor() As String 
_B.getcolor=function() {
// [388] Return stColor 
return _B._stcolor;
// End Sub
};

// [391] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [392] AddAttr( {104} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [393] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [396] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [397] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [400] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [401] AddAttr( {105} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [402] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [405] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [406] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [409] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [410] AddAttr( {106} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [411] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [414] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [415] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [418] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [419] AddAttr( {107} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [420] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [423] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [424] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [427] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [428] AddAttr( {108} , varFontStyle) 
_B.addattr("font-style",_varfontstyle,_B);
// [429] stFontStyle = varFontStyle 
_B._stfontstyle=_varfontstyle;
// End Sub
};

// [432] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [433] Return stFontStyle 
return _B._stfontstyle;
// End Sub
};

// [436] public Sub setLineHeight(varLineHeight As String) 
_B.setlineheight=function(_varlineheight) {
// [437] AddAttr( {109} , varLineHeight) 
_B.addattr("line-height",_varlineheight,_B);
// [438] stLineHeight = varLineHeight 
_B._stlineheight=_varlineheight;
// End Sub
};

// [441] public Sub getLineHeight() As String 
_B.getlineheight=function() {
// [442] Return stLineHeight 
return _B._stlineheight;
// End Sub
};

// [445] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [446] AddAttr( {110} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [447] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [450] public Sub getPadding() As String 
_B.getpadding=function() {
// [451] Return stPadding 
return _B._stpadding;
// End Sub
};

// [454] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [455] AddAttr( {111} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [456] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [459] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [460] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [463] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [464] AddAttr( {112} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [465] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [468] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [469] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [472] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [473] AddAttr( {113} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [474] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [477] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [478] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [481] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [482] AddAttr( {114} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [483] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [486] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [487] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [490] public Sub setTableLayout(varTableLayout As String) 
_B.settablelayout=function(_vartablelayout) {
// [491] AddAttr( {115} , varTableLayout) 
_B.addattr("table-layout",_vartablelayout,_B);
// [492] stTableLayout = varTableLayout 
_B._sttablelayout=_vartablelayout;
// End Sub
};

// [495] public Sub getTableLayout() As String 
_B.gettablelayout=function() {
// [496] Return stTableLayout 
return _B._sttablelayout;
// End Sub
};

// [499] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [500] AddAttr( {116} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [501] stWidth = varWidth 
_B._stwidth=_varwidth;
// End Sub
};

// [504] public Sub getWidth() As String 
_B.getwidth=function() {
// [505] Return stWidth 
return _B._stwidth;
// End Sub
};

// [510] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [511] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJTableBody  =========================== */
function banano_bananomjml_mjtablebody() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="tbody";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJTableData  =========================== */
function banano_bananomjml_mjtabledata() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="td";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stbgcolor="";

_B._stvalign="";

_B._stbackgroundcolor="";

_B._stborderradius="";

_B._stcolor="";

_B._stcursor="";

// [44] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [45] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [46] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [47] mCallBack = CallBack 
_B._mcallback=_callback;
// [48] classList.Initialize 
_B._classlist={};
// [49] styleList.Initialize 
_B._stylelist={};
// [50] attributeList.Initialize 
_B._attributelist={};
// [51] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [55] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [56] mTarget = Target 
_B._mtarget=_target;
// [57] If Props <> Null Then 
if (_props!=null) {
// [58] mClasses = Props.Get( {15} ) 
_B._mclasses=_props["Classes"];
// [59] mAttributes = Props.Get( {16} ) 
_B._mattributes=_props["Attributes"];
// [60] mStyle = Props.Get( {17} ) 
_B._mstyle=_props["Style"];
// [61] mCaption = Props.Get( {18} ) 
_B._mcaption=_props["Caption"];
// [62] stAlign = Props.Get( {19} ) 
_B._stalign=_props["Align"];
// [63] stBgcolor = Props.Get( {20} ) 
_B._stbgcolor=_props["Bgcolor"];
// [64] stValign = Props.Get( {21} ) 
_B._stvalign=_props["Valign"];
// [65] stBackgroundColor = Props.Get( {22} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [66] stBorderRadius = Props.Get( {23} ) 
_B._stborderradius=_props["BorderRadius"];
// [67] stColor = Props.Get( {24} ) 
_B._stcolor=_props["Color"];
// [68] stCursor = Props.Get( {25} ) 
_B._stcursor=_props["Cursor"];
// [69] End If 
}
// [71] AddAttr( {26} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [72] AddAttr( {27} , stBgcolor) 
_B.addattr("bgcolor",_B._stbgcolor,_B);
// [73] AddAttr( {28} , stValign) 
_B.addattr("valign",_B._stvalign,_B);
// [74] AddStyle( {29} , stBackgroundColor) 
_B.addstyle("background-color",_B._stbackgroundcolor,_B);
// [75] AddStyle( {30} , stBorderRadius) 
_B.addstyle("border-radius",_B._stborderradius,_B);
// [76] AddStyle( {31} , stColor) 
_B.addstyle("color",_B._stcolor,_B);
// [77] AddStyle( {32} , stCursor) 
_B.addstyle("cursor",_B._stcursor,_B);
// [78] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [79] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [80] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [83] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [84] mElement = mTarget.Append(strHTML).Get( {33} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [90] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [92] Dim className As String = BANanoShared.JoinMapKeys(classList, {34} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [93] AddAttr( {35} , className) 
_B.addattr("class",_classname,_B);
// [95] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [96] AddAttr( {36} , styleName) 
_B.addattr("style",_stylename,_B);
// [98] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [99] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [100] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [101] Return rslt 
return _rslt;
// End Sub
};

// [105] Sub AddBR 
_B.addbr=function() {
// [106] sbText.Append( {37} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [110] Sub AddHR 
_B.addhr=function() {
// [111] sbText.Append( {38} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [115] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [116] Return mElement 
return _B._melement;
// End Sub
};

// [120] public Sub getID() As String 
_B.getid=function() {
// [121] Return mName 
return _B._mname;
// End Sub
};

// [125] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [126] mTarget = BANano.GetElement( {39} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [127] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [131] public Sub Remove() 
_B.remove=function() {
// [132] mElement.Remove 
_B._melement.remove();
// [133] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [137] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [138] If mElement <> Null Then 
if (_B._melement!=null) {
// [139] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [140] End If 
}
// End Sub
};

// [144] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [145] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [146] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [147] varClass = varClass.trim 
_varclass=_varclass.trim();
// [148] if varClass = {40} Then Return 
if (_varclass=="") { return ;}
// [149] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [150] Dim mxItems As List = BANanoShared.StrParse( {41} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [151] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [152] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [153] Next 
}
// End Sub
};

// [157] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [158] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [159] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [160] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [161] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [162] varClass = varClass.trim 
_varclass=_varclass.trim();
// [163] if varClass = {42} Then Return 
if (_varclass=="") { return ;}
// [164] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [165] Dim mxItems As List = BANanoShared.StrParse( {43} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [166] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [167] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [168] Next 
}
// End Sub
};

// [172] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [173] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [174] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [175] If mElement <> Null Then 
if (_B._melement!=null) {
// [176] Dim aStyle As Map = CreateMap() 
_astyle={};
// [177] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [178] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [179] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [180] End If 
}
// [181] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [185] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [186] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [187] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [189] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [190] If varValue = True Then 
if (_varvalue==true) {
// [191] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [192] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [193] End If 
}
// [194] Else 
} else {
// [196] If varValue.StartsWith( {44} ) Then 
if (_varvalue.startsWith(":")) {
// [197] If varValue.StartsWith( {45} ) Then 
if (_varvalue.startsWith("$")) {
// [198] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [199] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [200] Else 
} else {
// [201] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [202] If rname.Contains( {46} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [203] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [204] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [205] End If 
}
// [206] Else 
} else {
// [208] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [209] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [210] Select Case varProp 
switch ("" + _varprop) {
// [211] Case {47} , {48} , {49} , {50} , {51} , {52} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [212] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [213] End Select 
break;
}
// [214] End If 
}
// [215] End If 
}
// [216] Return 
return;
// End Sub
};

// [220] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [221] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [222] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [223] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [224] sbClass.Append(k).Append( {53} ) 
_sbclass.append(_k).append(" ");
// [225] Next 
}
// [226] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [227] Return mClasses 
return _B._mclasses;
// End Sub
};

// [231] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [232] If mElement <> Null Then 
if (_B._melement!=null) {
// [233] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [234] End If 
}
// [235] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [236] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [237] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [238] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [239] Next 
}
// End Sub
};

// [243] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [244] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [245] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [246] sbStyle.Append( {54} ) 
_sbstyle.append("{");
// [247] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [248] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [249] sbStyle.Append(k).Append( {55} ).Append(v).Append( {56} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [250] Next 
}
// [251] sbStyle.Append( {57} ) 
_sbstyle.append("}");
// [252] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [253] Return mStyle 
return _B._mstyle;
// End Sub
};

// [257] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [258] Dim mxItems As List = BANanoShared.StrParse( {58} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [259] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [260] Dim k As String = BANanoShared.MvField(mt,1, {59} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [261] Dim v As String = BANanoShared.MvField(mt,2, {60} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [262] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [263] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [264] Next 
}
// End Sub
};

// [268] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [269] Dim mxItems As List = BANanoShared.StrParse( {61} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [270] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [271] Dim k As String = BANanoShared.MvField(mt,1, {62} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [272] Dim v As String = BANanoShared.MvField(mt,2, {63} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [273] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [274] Next 
}
// End Sub
};

// [278] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [279] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [280] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [281] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [282] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [283] sbAttr.Append(k).Append( {64} ).Append(v).Append( {65} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [284] Next 
}
// [285] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [286] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [290] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [291] If mElement <> Null Then 
if (_B._melement!=null) {
// [292] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [293] End If 
}
// [294] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [298] public Sub getCaption() As String 
_B.getcaption=function() {
// [299] Return mCaption 
return _B._mcaption;
// End Sub
};

// [302] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [303] AddAttr( {66} , varAlign) 
_B.addattr("align",_varalign,_B);
// [304] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [307] public Sub getAlign() As String 
_B.getalign=function() {
// [308] Return stAlign 
return _B._stalign;
// End Sub
};

// [311] public Sub setBgcolor(varBgcolor As String) 
_B.setbgcolor=function(_varbgcolor) {
// [312] AddAttr( {67} , varBgcolor) 
_B.addattr("bgcolor",_varbgcolor,_B);
// [313] stBgcolor = varBgcolor 
_B._stbgcolor=_varbgcolor;
// End Sub
};

// [316] public Sub getBgcolor() As String 
_B.getbgcolor=function() {
// [317] Return stBgcolor 
return _B._stbgcolor;
// End Sub
};

// [320] public Sub setValign(varValign As String) 
_B.setvalign=function(_varvalign) {
// [321] AddAttr( {68} , varValign) 
_B.addattr("valign",_varvalign,_B);
// [322] stValign = varValign 
_B._stvalign=_varvalign;
// End Sub
};

// [325] public Sub getValign() As String 
_B.getvalign=function() {
// [326] Return stValign 
return _B._stvalign;
// End Sub
};

// [329] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [330] AddStyle( {69} , varBackgroundColor) 
_B.addstyle("background-color",_varbackgroundcolor,_B);
// [331] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [334] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [335] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [338] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [339] AddStyle( {70} , varBorderRadius) 
_B.addstyle("border-radius",_varborderradius,_B);
// [340] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [343] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [344] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [347] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [348] AddStyle( {71} , varColor) 
_B.addstyle("color",_varcolor,_B);
// [349] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [352] public Sub getColor() As String 
_B.getcolor=function() {
// [353] Return stColor 
return _B._stcolor;
// End Sub
};

// [356] public Sub setCursor(varCursor As String) 
_B.setcursor=function(_varcursor) {
// [357] AddStyle( {72} , varCursor) 
_B.addstyle("cursor",_varcursor,_B);
// [358] stCursor = varCursor 
_B._stcursor=_varcursor;
// End Sub
};

// [361] public Sub getCursor() As String 
_B.getcursor=function() {
// [362] Return stCursor 
return _B._stcursor;
// End Sub
};

// [367] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [368] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJTableRow  =========================== */
function banano_bananomjml_mjtablerow() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="tr";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJText  =========================== */
function banano_bananomjml_mjtext() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-text";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stalign="";

_B._stcolor="";

_B._stcontainerbackgroundcolor="";

_B._stcssclass="";

_B._stfontfamily="";

_B._stfontsize="";

_B._stfontstyle="";

_B._stfontweight="";

_B._stheight="";

_B._stletterspacing="";

_B._stlineheight="";

_B._boloremipsum=false;

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._sttextdecoration="";

_B._sttexttransform="";

// [68] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [69] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [70] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [71] mCallBack = CallBack 
_B._mcallback=_callback;
// [72] classList.Initialize 
_B._classlist={};
// [73] styleList.Initialize 
_B._stylelist={};
// [74] attributeList.Initialize 
_B._attributelist={};
// [75] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [79] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [80] mTarget = Target 
_B._mtarget=_target;
// [81] If Props <> Null Then 
if (_props!=null) {
// [82] mClasses = Props.Get( {26} ) 
_B._mclasses=_props["Classes"];
// [83] mAttributes = Props.Get( {27} ) 
_B._mattributes=_props["Attributes"];
// [84] mStyle = Props.Get( {28} ) 
_B._mstyle=_props["Style"];
// [85] mCaption = Props.Get( {29} ) 
_B._mcaption=_props["Caption"];
// [86] stAlign = Props.Get( {30} ) 
_B._stalign=_props["Align"];
// [87] stColor = Props.Get( {31} ) 
_B._stcolor=_props["Color"];
// [88] stContainerBackgroundColor = Props.Get( {32} ) 
_B._stcontainerbackgroundcolor=_props["ContainerBackgroundColor"];
// [89] stCssClass = Props.Get( {33} ) 
_B._stcssclass=_props["CssClass"];
// [90] stFontFamily = Props.Get( {34} ) 
_B._stfontfamily=_props["FontFamily"];
// [91] stFontSize = Props.Get( {35} ) 
_B._stfontsize=_props["FontSize"];
// [92] stFontStyle = Props.Get( {36} ) 
_B._stfontstyle=_props["FontStyle"];
// [93] stFontWeight = Props.Get( {37} ) 
_B._stfontweight=_props["FontWeight"];
// [94] stHeight = Props.Get( {38} ) 
_B._stheight=_props["Height"];
// [95] stLetterSpacing = Props.Get( {39} ) 
_B._stletterspacing=_props["LetterSpacing"];
// [96] stLineHeight = Props.Get( {40} ) 
_B._stlineheight=_props["LineHeight"];
// [97] boLoremipsum = Props.Get( {41} ) 
_B._boloremipsum=_props["Loremipsum"];
// [98] stPadding = Props.Get( {42} ) 
_B._stpadding=_props["Padding"];
// [99] stPaddingBottom = Props.Get( {43} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [100] stPaddingLeft = Props.Get( {44} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [101] stPaddingRight = Props.Get( {45} ) 
_B._stpaddingright=_props["PaddingRight"];
// [102] stPaddingTop = Props.Get( {46} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [103] stTextDecoration = Props.Get( {47} ) 
_B._sttextdecoration=_props["TextDecoration"];
// [104] stTextTransform = Props.Get( {48} ) 
_B._sttexttransform=_props["TextTransform"];
// [105] End If 
}
// [107]  If boLoremipsum Then 
if (_B._boloremipsum) {
// [108]  mCaption = BANanoShared.Rand_LoremIpsum(1) 
_B._mcaption=_banano_bananomjml_bananoshared.rand_loremipsum(1);
// [109]  End If 
}
// [111] AddAttr( {49} , stAlign) 
_B.addattr("align",_B._stalign,_B);
// [112] AddAttr( {50} , stColor) 
_B.addattr("color",_B._stcolor,_B);
// [113] AddAttr( {51} , stContainerBackgroundColor) 
_B.addattr("container-background-color",_B._stcontainerbackgroundcolor,_B);
// [114] AddAttr( {52} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [115] AddAttr( {53} , stFontFamily) 
_B.addattr("font-family",_B._stfontfamily,_B);
// [116] AddAttr( {54} , stFontSize) 
_B.addattr("font-size",_B._stfontsize,_B);
// [117] AddAttr( {55} , stFontStyle) 
_B.addattr("font-style",_B._stfontstyle,_B);
// [118] AddAttr( {56} , stFontWeight) 
_B.addattr("font-weight",_B._stfontweight,_B);
// [119] AddAttr( {57} , stHeight) 
_B.addattr("height",_B._stheight,_B);
// [120] AddAttr( {58} , stLetterSpacing) 
_B.addattr("letter-spacing",_B._stletterspacing,_B);
// [121] AddAttr( {59} , stLineHeight) 
_B.addattr("line-height",_B._stlineheight,_B);
// [122] AddAttr( {60} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [123] AddAttr( {61} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [124] AddAttr( {62} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [125] AddAttr( {63} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [126] AddAttr( {64} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [127] AddAttr( {65} , stTextDecoration) 
_B.addattr("text-decoration",_B._sttextdecoration,_B);
// [128] AddAttr( {66} , stTextTransform) 
_B.addattr("text-transform",_B._sttexttransform,_B);
// [129] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [130] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [131] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [134] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [135] mElement = mTarget.Append(strHTML).Get( {67} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [141] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [143] Dim className As String = BANanoShared.JoinMapKeys(classList, {68} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [144] AddAttr( {69} , className) 
_B.addattr("class",_classname,_B);
// [146] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [147] AddAttr( {70} , styleName) 
_B.addattr("style",_stylename,_B);
// [149] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [150] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [151] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [152] Return rslt 
return _rslt;
// End Sub
};

// [156] Sub AddBR 
_B.addbr=function() {
// [157] sbText.Append( {71} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [161] Sub AddHR 
_B.addhr=function() {
// [162] sbText.Append( {72} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [166] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [167] Return mElement 
return _B._melement;
// End Sub
};

// [171] public Sub getID() As String 
_B.getid=function() {
// [172] Return mName 
return _B._mname;
// End Sub
};

// [176] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [177] mTarget = BANano.GetElement( {73} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [178] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [182] public Sub Remove() 
_B.remove=function() {
// [183] mElement.Remove 
_B._melement.remove();
// [184] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [188] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [189] If mElement <> Null Then 
if (_B._melement!=null) {
// [190] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [191] End If 
}
// End Sub
};

// [195] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [196] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [197] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [198] varClass = varClass.trim 
_varclass=_varclass.trim();
// [199] if varClass = {74} Then Return 
if (_varclass=="") { return ;}
// [200] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [201] Dim mxItems As List = BANanoShared.StrParse( {75} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [202] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [203] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [204] Next 
}
// End Sub
};

// [208] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [209] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [210] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [211] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [212] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [213] varClass = varClass.trim 
_varclass=_varclass.trim();
// [214] if varClass = {76} Then Return 
if (_varclass=="") { return ;}
// [215] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [216] Dim mxItems As List = BANanoShared.StrParse( {77} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [217] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [218] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [219] Next 
}
// End Sub
};

// [223] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [224] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [225] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [226] If mElement <> Null Then 
if (_B._melement!=null) {
// [227] Dim aStyle As Map = CreateMap() 
_astyle={};
// [228] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [229] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [230] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [231] End If 
}
// [232] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [236] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [237] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [238] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [240] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [241] If varValue = True Then 
if (_varvalue==true) {
// [242] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [243] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [244] End If 
}
// [245] Else 
} else {
// [247] If varValue.StartsWith( {78} ) Then 
if (_varvalue.startsWith(":")) {
// [248] If varValue.StartsWith( {79} ) Then 
if (_varvalue.startsWith("$")) {
// [249] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [250] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [251] Else 
} else {
// [252] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [253] If rname.Contains( {80} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [254] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [255] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [256] End If 
}
// [257] Else 
} else {
// [259] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [260] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [261] Select Case varProp 
switch ("" + _varprop) {
// [262] Case {81} , {82} , {83} , {84} , {85} , {86} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [263] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [264] End Select 
break;
}
// [265] End If 
}
// [266] End If 
}
// [267] Return 
return;
// End Sub
};

// [271] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [272] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [273] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [274] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [275] sbClass.Append(k).Append( {87} ) 
_sbclass.append(_k).append(" ");
// [276] Next 
}
// [277] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [278] Return mClasses 
return _B._mclasses;
// End Sub
};

// [282] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [283] If mElement <> Null Then 
if (_B._melement!=null) {
// [284] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [285] End If 
}
// [286] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [287] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [288] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [289] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [290] Next 
}
// End Sub
};

// [294] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [295] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [296] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [297] sbStyle.Append( {88} ) 
_sbstyle.append("{");
// [298] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [299] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [300] sbStyle.Append(k).Append( {89} ).Append(v).Append( {90} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [301] Next 
}
// [302] sbStyle.Append( {91} ) 
_sbstyle.append("}");
// [303] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [304] Return mStyle 
return _B._mstyle;
// End Sub
};

// [308] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [309] Dim mxItems As List = BANanoShared.StrParse( {92} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [310] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [311] Dim k As String = BANanoShared.MvField(mt,1, {93} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [312] Dim v As String = BANanoShared.MvField(mt,2, {94} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [313] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [314] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [315] Next 
}
// End Sub
};

// [319] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [320] Dim mxItems As List = BANanoShared.StrParse( {95} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [321] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [322] Dim k As String = BANanoShared.MvField(mt,1, {96} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [323] Dim v As String = BANanoShared.MvField(mt,2, {97} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [324] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [325] Next 
}
// End Sub
};

// [329] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [330] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [331] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [332] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [333] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [334] sbAttr.Append(k).Append( {98} ).Append(v).Append( {99} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [335] Next 
}
// [336] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [337] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [341] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [342] If mElement <> Null Then 
if (_B._melement!=null) {
// [343] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [344] End If 
}
// [345] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [349] public Sub getCaption() As String 
_B.getcaption=function() {
// [350] Return mCaption 
return _B._mcaption;
// End Sub
};

// [353] public Sub setAlign(varAlign As String) 
_B.setalign=function(_varalign) {
// [354] AddAttr( {100} , varAlign) 
_B.addattr("align",_varalign,_B);
// [355] stAlign = varAlign 
_B._stalign=_varalign;
// End Sub
};

// [358] public Sub getAlign() As String 
_B.getalign=function() {
// [359] Return stAlign 
return _B._stalign;
// End Sub
};

// [362] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [363] AddAttr( {101} , varColor) 
_B.addattr("color",_varcolor,_B);
// [364] stColor = varColor 
_B._stcolor=_varcolor;
// End Sub
};

// [367] public Sub getColor() As String 
_B.getcolor=function() {
// [368] Return stColor 
return _B._stcolor;
// End Sub
};

// [371] public Sub setContainerBackgroundColor(varContainerBackgroundColor As String) 
_B.setcontainerbackgroundcolor=function(_varcontainerbackgroundcolor) {
// [372] AddAttr( {102} , varContainerBackgroundColor) 
_B.addattr("container-background-color",_varcontainerbackgroundcolor,_B);
// [373] stContainerBackgroundColor = varContainerBackgroundColor 
_B._stcontainerbackgroundcolor=_varcontainerbackgroundcolor;
// End Sub
};

// [376] public Sub getContainerBackgroundColor() As String 
_B.getcontainerbackgroundcolor=function() {
// [377] Return stContainerBackgroundColor 
return _B._stcontainerbackgroundcolor;
// End Sub
};

// [380] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [381] AddAttr( {103} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [382] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [385] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [386] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [389] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [390] AddAttr( {104} , varFontFamily) 
_B.addattr("font-family",_varfontfamily,_B);
// [391] stFontFamily = varFontFamily 
_B._stfontfamily=_varfontfamily;
// End Sub
};

// [394] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [395] Return stFontFamily 
return _B._stfontfamily;
// End Sub
};

// [398] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [399] AddAttr( {105} , varFontSize) 
_B.addattr("font-size",_varfontsize,_B);
// [400] stFontSize = varFontSize 
_B._stfontsize=_varfontsize;
// End Sub
};

// [403] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [404] Return stFontSize 
return _B._stfontsize;
// End Sub
};

// [407] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [408] AddAttr( {106} , varFontStyle) 
_B.addattr("font-style",_varfontstyle,_B);
// [409] stFontStyle = varFontStyle 
_B._stfontstyle=_varfontstyle;
// End Sub
};

// [412] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [413] Return stFontStyle 
return _B._stfontstyle;
// End Sub
};

// [416] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [417] AddAttr( {107} , varFontWeight) 
_B.addattr("font-weight",_varfontweight,_B);
// [418] stFontWeight = varFontWeight 
_B._stfontweight=_varfontweight;
// End Sub
};

// [421] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [422] Return stFontWeight 
return _B._stfontweight;
// End Sub
};

// [425] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [426] AddAttr( {108} , varHeight) 
_B.addattr("height",_varheight,_B);
// [427] stHeight = varHeight 
_B._stheight=_varheight;
// End Sub
};

// [430] public Sub getHeight() As String 
_B.getheight=function() {
// [431] Return stHeight 
return _B._stheight;
// End Sub
};

// [434] public Sub setLetterSpacing(varLetterSpacing As String) 
_B.setletterspacing=function(_varletterspacing) {
// [435] AddAttr( {109} , varLetterSpacing) 
_B.addattr("letter-spacing",_varletterspacing,_B);
// [436] stLetterSpacing = varLetterSpacing 
_B._stletterspacing=_varletterspacing;
// End Sub
};

// [439] public Sub getLetterSpacing() As String 
_B.getletterspacing=function() {
// [440] Return stLetterSpacing 
return _B._stletterspacing;
// End Sub
};

// [443] public Sub setLineHeight(varLineHeight As String) 
_B.setlineheight=function(_varlineheight) {
// [444] AddAttr( {110} , varLineHeight) 
_B.addattr("line-height",_varlineheight,_B);
// [445] stLineHeight = varLineHeight 
_B._stlineheight=_varlineheight;
// End Sub
};

// [448] public Sub getLineHeight() As String 
_B.getlineheight=function() {
// [449] Return stLineHeight 
return _B._stlineheight;
// End Sub
};

// [452] public Sub setLoremipsum(varLoremipsum As Boolean) 
_B.setloremipsum=function(_varloremipsum) {
// [453] AddAttr( {111} , varLoremipsum) 
_B.addattr("LoremIpsum",_varloremipsum,_B);
// [454] boLoremipsum = varLoremipsum 
_B._boloremipsum=_varloremipsum;
// End Sub
};

// [457] public Sub getLoremipsum() As Boolean 
_B.getloremipsum=function() {
// [458] Return boLoremipsum 
return _B._boloremipsum;
// End Sub
};

// [461] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [462] AddAttr( {112} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [463] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [466] public Sub getPadding() As String 
_B.getpadding=function() {
// [467] Return stPadding 
return _B._stpadding;
// End Sub
};

// [470] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [471] AddAttr( {113} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [472] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [475] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [476] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [479] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [480] AddAttr( {114} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [481] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [484] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [485] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [488] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [489] AddAttr( {115} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [490] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [493] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [494] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [497] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [498] AddAttr( {116} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [499] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [502] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [503] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [506] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [507] AddAttr( {117} , varTextDecoration) 
_B.addattr("text-decoration",_vartextdecoration,_B);
// [508] stTextDecoration = varTextDecoration 
_B._sttextdecoration=_vartextdecoration;
// End Sub
};

// [511] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [512] Return stTextDecoration 
return _B._sttextdecoration;
// End Sub
};

// [515] public Sub setTextTransform(varTextTransform As String) 
_B.settexttransform=function(_vartexttransform) {
// [516] AddAttr( {118} , varTextTransform) 
_B.addattr("text-transform",_vartexttransform,_B);
// [517] stTextTransform = varTextTransform 
_B._sttexttransform=_vartexttransform;
// End Sub
};

// [520] public Sub getTextTransform() As String 
_B.gettexttransform=function() {
// [521] Return stTextTransform 
return _B._sttexttransform;
// End Sub
};

// [526] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [527] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJTitle  =========================== */
function banano_bananomjml_mjtitle() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-title";

_B._sbtext=new StringBuilder();

_B._bindings={};

// [30] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [31] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [32] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [33] mCallBack = CallBack 
_B._mcallback=_callback;
// [34] classList.Initialize 
_B._classlist={};
// [35] styleList.Initialize 
_B._stylelist={};
// [36] attributeList.Initialize 
_B._attributelist={};
// [37] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [41] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [42] mTarget = Target 
_B._mtarget=_target;
// [43] If Props <> Null Then 
if (_props!=null) {
// [44] mClasses = Props.Get( {8} ) 
_B._mclasses=_props["Classes"];
// [45] mAttributes = Props.Get( {9} ) 
_B._mattributes=_props["Attributes"];
// [46] mStyle = Props.Get( {10} ) 
_B._mstyle=_props["Style"];
// [47] mCaption = Props.Get( {11} ) 
_B._mcaption=_props["Caption"];
// [48] End If 
}
// [50] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [51] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [52] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [55] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [56] mElement = mTarget.Append(strHTML).Get( {12} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [62] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [64] Dim className As String = BANanoShared.JoinMapKeys(classList, {13} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [65] AddAttr( {14} , className) 
_B.addattr("class",_classname,_B);
// [67] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [68] AddAttr( {15} , styleName) 
_B.addattr("style",_stylename,_B);
// [70] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [71] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [72] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [73] Return rslt 
return _rslt;
// End Sub
};

// [77] Sub AddBR 
_B.addbr=function() {
// [78] sbText.Append( {16} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [82] Sub AddHR 
_B.addhr=function() {
// [83] sbText.Append( {17} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [87] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [88] Return mElement 
return _B._melement;
// End Sub
};

// [92] public Sub getID() As String 
_B.getid=function() {
// [93] Return mName 
return _B._mname;
// End Sub
};

// [97] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [98] mTarget = BANano.GetElement( {18} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [99] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [103] public Sub Remove() 
_B.remove=function() {
// [104] mElement.Remove 
_B._melement.remove();
// [105] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [109] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [110] If mElement <> Null Then 
if (_B._melement!=null) {
// [111] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [112] End If 
}
// End Sub
};

// [116] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [117] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [118] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [119] varClass = varClass.trim 
_varclass=_varclass.trim();
// [120] if varClass = {19} Then Return 
if (_varclass=="") { return ;}
// [121] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [122] Dim mxItems As List = BANanoShared.StrParse( {20} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [123] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [124] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [125] Next 
}
// End Sub
};

// [129] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [130] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [131] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [132] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [133] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [134] varClass = varClass.trim 
_varclass=_varclass.trim();
// [135] if varClass = {21} Then Return 
if (_varclass=="") { return ;}
// [136] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [137] Dim mxItems As List = BANanoShared.StrParse( {22} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [138] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [139] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [140] Next 
}
// End Sub
};

// [144] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [145] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [146] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [147] If mElement <> Null Then 
if (_B._melement!=null) {
// [148] Dim aStyle As Map = CreateMap() 
_astyle={};
// [149] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [150] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [151] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [152] End If 
}
// [153] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [157] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [158] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [159] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [161] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [162] If varValue = True Then 
if (_varvalue==true) {
// [163] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [164] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [165] End If 
}
// [166] Else 
} else {
// [168] If varValue.StartsWith( {23} ) Then 
if (_varvalue.startsWith(":")) {
// [169] If varValue.StartsWith( {24} ) Then 
if (_varvalue.startsWith("$")) {
// [170] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [171] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [172] Else 
} else {
// [173] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [174] If rname.Contains( {25} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [175] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [176] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [177] End If 
}
// [178] Else 
} else {
// [180] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [181] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [182] Select Case varProp 
switch ("" + _varprop) {
// [183] Case {26} , {27} , {28} , {29} , {30} , {31} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [184] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [185] End Select 
break;
}
// [186] End If 
}
// [187] End If 
}
// [188] Return 
return;
// End Sub
};

// [192] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [193] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [194] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [195] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [196] sbClass.Append(k).Append( {32} ) 
_sbclass.append(_k).append(" ");
// [197] Next 
}
// [198] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [199] Return mClasses 
return _B._mclasses;
// End Sub
};

// [203] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [204] If mElement <> Null Then 
if (_B._melement!=null) {
// [205] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [206] End If 
}
// [207] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [208] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [209] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [210] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [211] Next 
}
// End Sub
};

// [215] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [216] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [217] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [218] sbStyle.Append( {33} ) 
_sbstyle.append("{");
// [219] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [220] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [221] sbStyle.Append(k).Append( {34} ).Append(v).Append( {35} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [222] Next 
}
// [223] sbStyle.Append( {36} ) 
_sbstyle.append("}");
// [224] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [225] Return mStyle 
return _B._mstyle;
// End Sub
};

// [229] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [230] Dim mxItems As List = BANanoShared.StrParse( {37} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [231] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [232] Dim k As String = BANanoShared.MvField(mt,1, {38} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [233] Dim v As String = BANanoShared.MvField(mt,2, {39} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [234] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [235] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [236] Next 
}
// End Sub
};

// [240] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [241] Dim mxItems As List = BANanoShared.StrParse( {40} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [242] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [243] Dim k As String = BANanoShared.MvField(mt,1, {41} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [244] Dim v As String = BANanoShared.MvField(mt,2, {42} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [245] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [246] Next 
}
// End Sub
};

// [250] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [251] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [252] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [253] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [254] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [255] sbAttr.Append(k).Append( {43} ).Append(v).Append( {44} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [256] Next 
}
// [257] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [258] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [262] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [263] If mElement <> Null Then 
if (_B._melement!=null) {
// [264] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [265] End If 
}
// [266] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [270] public Sub getCaption() As String 
_B.getcaption=function() {
// [271] Return mCaption 
return _B._mcaption;
// End Sub
};

// [276] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [277] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
/* =========================== MJWrapper  =========================== */
function banano_bananomjml_mjwrapper() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mcaption="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="mj-wrapper";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._stbackgroundcolor="";

_B._stbackgroundrepeat="";

_B._stbackgroundsize="";

_B._stbackgroundurl="";

_B._stborder="";

_B._stborderbottom="";

_B._stborderleft="";

_B._stborderradius="";

_B._stborderright="";

_B._stbordertop="";

_B._stcssclass="";

_B._stfullwidth="";

_B._stpadding="";

_B._stpaddingbottom="";

_B._stpaddingleft="";

_B._stpaddingright="";

_B._stpaddingtop="";

_B._sttextalign="";

_B._stverticalalign="";

// [68] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [69] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [70] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [71] mCallBack = CallBack 
_B._mcallback=_callback;
// [72] classList.Initialize 
_B._classlist={};
// [73] styleList.Initialize 
_B._stylelist={};
// [74] attributeList.Initialize 
_B._attributelist={};
// [75] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// End Sub
};

// [79] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [80] mTarget = Target 
_B._mtarget=_target;
// [81] If Props <> Null Then 
if (_props!=null) {
// [82] mClasses = Props.Get( {27} ) 
_B._mclasses=_props["Classes"];
// [83] mAttributes = Props.Get( {28} ) 
_B._mattributes=_props["Attributes"];
// [84] mStyle = Props.Get( {29} ) 
_B._mstyle=_props["Style"];
// [85] mCaption = Props.Get( {30} ) 
_B._mcaption=_props["Caption"];
// [86] stBackgroundColor = Props.Get( {31} ) 
_B._stbackgroundcolor=_props["BackgroundColor"];
// [87] stBackgroundRepeat = Props.Get( {32} ) 
_B._stbackgroundrepeat=_props["BackgroundRepeat"];
// [88] stBackgroundSize = Props.Get( {33} ) 
_B._stbackgroundsize=_props["BackgroundSize"];
// [89] stBackgroundUrl = Props.Get( {34} ) 
_B._stbackgroundurl=_props["BackgroundUrl"];
// [90] stBorder = Props.Get( {35} ) 
_B._stborder=_props["Border"];
// [91] stBorderBottom = Props.Get( {36} ) 
_B._stborderbottom=_props["BorderBottom"];
// [92] stBorderLeft = Props.Get( {37} ) 
_B._stborderleft=_props["BorderLeft"];
// [93] stBorderRadius = Props.Get( {38} ) 
_B._stborderradius=_props["BorderRadius"];
// [94] stBorderRight = Props.Get( {39} ) 
_B._stborderright=_props["BorderRight"];
// [95] stBorderTop = Props.Get( {40} ) 
_B._stbordertop=_props["BorderTop"];
// [96] stCssClass = Props.Get( {41} ) 
_B._stcssclass=_props["CssClass"];
// [97] stFullWidth = Props.Get( {42} ) 
_B._stfullwidth=_props["FullWidth"];
// [98] stPadding = Props.Get( {43} ) 
_B._stpadding=_props["Padding"];
// [99] stPaddingBottom = Props.Get( {44} ) 
_B._stpaddingbottom=_props["PaddingBottom"];
// [100] stPaddingLeft = Props.Get( {45} ) 
_B._stpaddingleft=_props["PaddingLeft"];
// [101] stPaddingRight = Props.Get( {46} ) 
_B._stpaddingright=_props["PaddingRight"];
// [102] stPaddingTop = Props.Get( {47} ) 
_B._stpaddingtop=_props["PaddingTop"];
// [103] stTextAlign = Props.Get( {48} ) 
_B._sttextalign=_props["TextAlign"];
// [104] stVerticalAlign = Props.Get( {49} ) 
_B._stverticalalign=_props["VerticalAlign"];
// [105] End If 
}
// [107] AddAttr( {50} , stBackgroundColor) 
_B.addattr("background-color",_B._stbackgroundcolor,_B);
// [108] AddAttr( {51} , stBackgroundRepeat) 
_B.addattr("background-repeat",_B._stbackgroundrepeat,_B);
// [109] AddAttr( {52} , stBackgroundSize) 
_B.addattr("background-size",_B._stbackgroundsize,_B);
// [110] AddAttr( {53} , stBackgroundUrl) 
_B.addattr("background-url",_B._stbackgroundurl,_B);
// [111] AddAttr( {54} , stBorder) 
_B.addattr("border",_B._stborder,_B);
// [112] AddAttr( {55} , stBorderBottom) 
_B.addattr("border-bottom",_B._stborderbottom,_B);
// [113] AddAttr( {56} , stBorderLeft) 
_B.addattr("border-left",_B._stborderleft,_B);
// [114] AddAttr( {57} , stBorderRadius) 
_B.addattr("border-radius",_B._stborderradius,_B);
// [115] AddAttr( {58} , stBorderRight) 
_B.addattr("border-right",_B._stborderright,_B);
// [116] AddAttr( {59} , stBorderTop) 
_B.addattr("border-top",_B._stbordertop,_B);
// [117] AddAttr( {60} , stCssClass) 
_B.addattr("css-class",_B._stcssclass,_B);
// [118] AddAttr( {61} , stFullWidth) 
_B.addattr("full-width",_B._stfullwidth,_B);
// [119] AddAttr( {62} , stPadding) 
_B.addattr("padding",_B._stpadding,_B);
// [120] AddAttr( {63} , stPaddingBottom) 
_B.addattr("padding-bottom",_B._stpaddingbottom,_B);
// [121] AddAttr( {64} , stPaddingLeft) 
_B.addattr("padding-left",_B._stpaddingleft,_B);
// [122] AddAttr( {65} , stPaddingRight) 
_B.addattr("padding-right",_B._stpaddingright,_B);
// [123] AddAttr( {66} , stPaddingTop) 
_B.addattr("padding-top",_B._stpaddingtop,_B);
// [124] AddAttr( {67} , stTextAlign) 
_B.addattr("text-align",_B._sttextalign,_B);
// [125] AddAttr( {68} , stVerticalAlign) 
_B.addattr("vertical-align",_B._stverticalalign,_B);
// [126] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [127] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [128] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [131] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [132] mElement = mTarget.Append(strHTML).Get( {69} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [138] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [140] Dim className As String = BANanoShared.JoinMapKeys(classList, {70} ) 
_classname=_banano_bananomjml_bananoshared.joinmapkeys(_B._classlist," ");
// [141] AddAttr( {71} , className) 
_B.addattr("class",_classname,_B);
// [143] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananomjml_bananoshared.buildstyle(_B._stylelist);
// [144] AddAttr( {72} , styleName) 
_B.addattr("style",_stylename,_B);
// [146] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananomjml_bananoshared.buildattributes(_B._attributelist);
// [147] iStructure = iStructure.trim 
_istructure=_istructure.trim();
// [148] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mcaption + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [149] Return rslt 
return _rslt;
// End Sub
};

// [153] Sub AddBR 
_B.addbr=function() {
// [154] sbText.Append( {73} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [158] Sub AddHR 
_B.addhr=function() {
// [159] sbText.Append( {74} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [163] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [164] Return mElement 
return _B._melement;
// End Sub
};

// [168] public Sub getID() As String 
_B.getid=function() {
// [169] Return mName 
return _B._mname;
// End Sub
};

// [173] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [174] mTarget = BANano.GetElement( {75} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [175] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [179] public Sub Remove() 
_B.remove=function() {
// [180] mElement.Remove 
_B._melement.remove();
// [181] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [185] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [186] If mElement <> Null Then 
if (_B._melement!=null) {
// [187] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [188] End If 
}
// End Sub
};

// [192] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [193] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [194] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [195] varClass = varClass.trim 
_varclass=_varclass.trim();
// [196] if varClass = {76} Then Return 
if (_varclass=="") { return ;}
// [197] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [198] Dim mxItems As List = BANanoShared.StrParse( {77} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [199] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [200] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [201] Next 
}
// End Sub
};

// [205] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [206] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [207] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [208] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [209] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananomjml_bananoshared.cstr(_varclass);}
// [210] varClass = varClass.trim 
_varclass=_varclass.trim();
// [211] if varClass = {78} Then Return 
if (_varclass=="") { return ;}
// [212] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [213] Dim mxItems As List = BANanoShared.StrParse( {79} , varClass) 
_mxitems=_banano_bananomjml_bananoshared.strparse(" ",_varclass);
// [214] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [215] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [216] Next 
}
// End Sub
};

// [220] public Sub AddStyle(varProp As string, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [221] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [222] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananomjml_bananoshared.cstr(_varstyle);}
// [223] If mElement <> Null Then 
if (_B._melement!=null) {
// [224] Dim aStyle As Map = CreateMap() 
_astyle={};
// [225] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [226] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [227] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [228] End If 
}
// [229] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [233] Public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [234] If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [235] If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananomjml_bananoshared.cstr(_varvalue);}
// [237] If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [238] If varValue = True Then 
if (_varvalue==true) {
// [239] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [240] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [241] End If 
}
// [242] Else 
} else {
// [244] If varValue.StartsWith( {80} ) Then 
if (_varvalue.startsWith(":")) {
// [245] If varValue.StartsWith( {81} ) Then 
if (_varvalue.startsWith("$")) {
// [246] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [247] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [248] Else 
} else {
// [249] Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananomjml_bananoshared.midstring2(_varvalue,2);
// [250] If rname.Contains( {82} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [251] attributeList.put( {1} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [252] If mElement <> Null Then mElement.SetAttr( {2} , rname) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_rname);}
// [253] End If 
}
// [254] Else 
} else {
// [256] If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [257] attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [258] Select Case varProp 
switch ("" + _varprop) {
// [259] Case {83} , {84} , {85} , {86} , {87} , {88} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [260] bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [261] End Select 
break;
}
// [262] End If 
}
// [263] End If 
}
// [264] Return 
return;
// End Sub
};

// [268] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [269] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [270] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [271] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [272] sbClass.Append(k).Append( {89} ) 
_sbclass.append(_k).append(" ");
// [273] Next 
}
// [274] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [275] Return mClasses 
return _B._mclasses;
// End Sub
};

// [279] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [280] If mElement <> Null Then 
if (_B._melement!=null) {
// [281] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [282] End If 
}
// [283] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [284] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [285] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [286] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [287] Next 
}
// End Sub
};

// [291] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [292] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [293] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [294] sbStyle.Append( {90} ) 
_sbstyle.append("{");
// [295] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [296] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [297] sbStyle.Append(k).Append( {91} ).Append(v).Append( {92} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [298] Next 
}
// [299] sbStyle.Append( {93} ) 
_sbstyle.append("}");
// [300] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [301] Return mStyle 
return _B._mstyle;
// End Sub
};

// [305] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [306] Dim mxItems As List = BANanoShared.StrParse( {94} , varAttributes) 
_mxitems=_banano_bananomjml_bananoshared.strparse(";",_varattributes);
// [307] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [308] Dim k As String = BANanoShared.MvField(mt,1, {95} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,"=");
// [309] Dim v As String = BANanoShared.MvField(mt,2, {96} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,"=");
// [310] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [311] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [312] Next 
}
// End Sub
};

// [316] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [317] Dim mxItems As List = BANanoShared.StrParse( {97} , varStyles) 
_mxitems=_banano_bananomjml_bananoshared.strparse(",",_varstyles);
// [318] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [319] Dim k As String = BANanoShared.MvField(mt,1, {98} ) 
_k=_banano_bananomjml_bananoshared.mvfield(_mt,1,":");
// [320] Dim v As String = BANanoShared.MvField(mt,2, {99} ) 
_v=_banano_bananomjml_bananoshared.mvfield(_mt,2,":");
// [321] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [322] Next 
}
// End Sub
};

// [326] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [327] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [328] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [329] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [330] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [331] sbAttr.Append(k).Append( {100} ).Append(v).Append( {101} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [332] Next 
}
// [333] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [334] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [338] public Sub setCaption(varCaption As String) 
_B.setcaption=function(_varcaption) {
// [339] If mElement <> Null Then 
if (_B._melement!=null) {
// [340] mElement.SetHTML(BANano.SF(varCaption)) 
_B._melement.html(banano_sf(_varcaption,false));
// [341] End If 
}
// [342] mCaption = varCaption 
_B._mcaption=_varcaption;
// End Sub
};

// [346] public Sub getCaption() As String 
_B.getcaption=function() {
// [347] Return mCaption 
return _B._mcaption;
// End Sub
};

// [350] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [351] AddAttr( {102} , varBackgroundColor) 
_B.addattr("background-color",_varbackgroundcolor,_B);
// [352] stBackgroundColor = varBackgroundColor 
_B._stbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [355] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [356] Return stBackgroundColor 
return _B._stbackgroundcolor;
// End Sub
};

// [359] public Sub setBackgroundRepeat(varBackgroundRepeat As String) 
_B.setbackgroundrepeat=function(_varbackgroundrepeat) {
// [360] AddAttr( {103} , varBackgroundRepeat) 
_B.addattr("background-repeat",_varbackgroundrepeat,_B);
// [361] stBackgroundRepeat = varBackgroundRepeat 
_B._stbackgroundrepeat=_varbackgroundrepeat;
// End Sub
};

// [364] public Sub getBackgroundRepeat() As String 
_B.getbackgroundrepeat=function() {
// [365] Return stBackgroundRepeat 
return _B._stbackgroundrepeat;
// End Sub
};

// [368] public Sub setBackgroundSize(varBackgroundSize As String) 
_B.setbackgroundsize=function(_varbackgroundsize) {
// [369] AddAttr( {104} , varBackgroundSize) 
_B.addattr("background-size",_varbackgroundsize,_B);
// [370] stBackgroundSize = varBackgroundSize 
_B._stbackgroundsize=_varbackgroundsize;
// End Sub
};

// [373] public Sub getBackgroundSize() As String 
_B.getbackgroundsize=function() {
// [374] Return stBackgroundSize 
return _B._stbackgroundsize;
// End Sub
};

// [377] public Sub setBackgroundUrl(varBackgroundUrl As String) 
_B.setbackgroundurl=function(_varbackgroundurl) {
// [378] AddAttr( {105} , varBackgroundUrl) 
_B.addattr("background-url",_varbackgroundurl,_B);
// [379] stBackgroundUrl = varBackgroundUrl 
_B._stbackgroundurl=_varbackgroundurl;
// End Sub
};

// [382] public Sub getBackgroundUrl() As String 
_B.getbackgroundurl=function() {
// [383] Return stBackgroundUrl 
return _B._stbackgroundurl;
// End Sub
};

// [386] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [387] AddAttr( {106} , varBorder) 
_B.addattr("border",_varborder,_B);
// [388] stBorder = varBorder 
_B._stborder=_varborder;
// End Sub
};

// [391] public Sub getBorder() As String 
_B.getborder=function() {
// [392] Return stBorder 
return _B._stborder;
// End Sub
};

// [395] public Sub setBorderBottom(varBorderBottom As String) 
_B.setborderbottom=function(_varborderbottom) {
// [396] AddAttr( {107} , varBorderBottom) 
_B.addattr("border-bottom",_varborderbottom,_B);
// [397] stBorderBottom = varBorderBottom 
_B._stborderbottom=_varborderbottom;
// End Sub
};

// [400] public Sub getBorderBottom() As String 
_B.getborderbottom=function() {
// [401] Return stBorderBottom 
return _B._stborderbottom;
// End Sub
};

// [404] public Sub setBorderLeft(varBorderLeft As String) 
_B.setborderleft=function(_varborderleft) {
// [405] AddAttr( {108} , varBorderLeft) 
_B.addattr("border-left",_varborderleft,_B);
// [406] stBorderLeft = varBorderLeft 
_B._stborderleft=_varborderleft;
// End Sub
};

// [409] public Sub getBorderLeft() As String 
_B.getborderleft=function() {
// [410] Return stBorderLeft 
return _B._stborderleft;
// End Sub
};

// [413] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [414] AddAttr( {109} , varBorderRadius) 
_B.addattr("border-radius",_varborderradius,_B);
// [415] stBorderRadius = varBorderRadius 
_B._stborderradius=_varborderradius;
// End Sub
};

// [418] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [419] Return stBorderRadius 
return _B._stborderradius;
// End Sub
};

// [422] public Sub setBorderRight(varBorderRight As String) 
_B.setborderright=function(_varborderright) {
// [423] AddAttr( {110} , varBorderRight) 
_B.addattr("border-right",_varborderright,_B);
// [424] stBorderRight = varBorderRight 
_B._stborderright=_varborderright;
// End Sub
};

// [427] public Sub getBorderRight() As String 
_B.getborderright=function() {
// [428] Return stBorderRight 
return _B._stborderright;
// End Sub
};

// [431] public Sub setBorderTop(varBorderTop As String) 
_B.setbordertop=function(_varbordertop) {
// [432] AddAttr( {111} , varBorderTop) 
_B.addattr("border-top",_varbordertop,_B);
// [433] stBorderTop = varBorderTop 
_B._stbordertop=_varbordertop;
// End Sub
};

// [436] public Sub getBorderTop() As String 
_B.getbordertop=function() {
// [437] Return stBorderTop 
return _B._stbordertop;
// End Sub
};

// [440] public Sub setCssClass(varCssClass As String) 
_B.setcssclass=function(_varcssclass) {
// [441] AddAttr( {112} , varCssClass) 
_B.addattr("css-class",_varcssclass,_B);
// [442] stCssClass = varCssClass 
_B._stcssclass=_varcssclass;
// End Sub
};

// [445] public Sub getCssClass() As String 
_B.getcssclass=function() {
// [446] Return stCssClass 
return _B._stcssclass;
// End Sub
};

// [449] public Sub setFullWidth(varFullWidth As String) 
_B.setfullwidth=function(_varfullwidth) {
// [450] AddAttr( {113} , varFullWidth) 
_B.addattr("full-width",_varfullwidth,_B);
// [451] stFullWidth = varFullWidth 
_B._stfullwidth=_varfullwidth;
// End Sub
};

// [454] public Sub getFullWidth() As String 
_B.getfullwidth=function() {
// [455] Return stFullWidth 
return _B._stfullwidth;
// End Sub
};

// [458] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [459] AddAttr( {114} , varPadding) 
_B.addattr("padding",_varpadding,_B);
// [460] stPadding = varPadding 
_B._stpadding=_varpadding;
// End Sub
};

// [463] public Sub getPadding() As String 
_B.getpadding=function() {
// [464] Return stPadding 
return _B._stpadding;
// End Sub
};

// [467] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [468] AddAttr( {115} , varPaddingBottom) 
_B.addattr("padding-bottom",_varpaddingbottom,_B);
// [469] stPaddingBottom = varPaddingBottom 
_B._stpaddingbottom=_varpaddingbottom;
// End Sub
};

// [472] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [473] Return stPaddingBottom 
return _B._stpaddingbottom;
// End Sub
};

// [476] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [477] AddAttr( {116} , varPaddingLeft) 
_B.addattr("padding-left",_varpaddingleft,_B);
// [478] stPaddingLeft = varPaddingLeft 
_B._stpaddingleft=_varpaddingleft;
// End Sub
};

// [481] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [482] Return stPaddingLeft 
return _B._stpaddingleft;
// End Sub
};

// [485] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [486] AddAttr( {117} , varPaddingRight) 
_B.addattr("padding-right",_varpaddingright,_B);
// [487] stPaddingRight = varPaddingRight 
_B._stpaddingright=_varpaddingright;
// End Sub
};

// [490] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [491] Return stPaddingRight 
return _B._stpaddingright;
// End Sub
};

// [494] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [495] AddAttr( {118} , varPaddingTop) 
_B.addattr("padding-top",_varpaddingtop,_B);
// [496] stPaddingTop = varPaddingTop 
_B._stpaddingtop=_varpaddingtop;
// End Sub
};

// [499] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [500] Return stPaddingTop 
return _B._stpaddingtop;
// End Sub
};

// [503] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [504] AddAttr( {119} , varTextAlign) 
_B.addattr("text-align",_vartextalign,_B);
// [505] stTextAlign = varTextAlign 
_B._sttextalign=_vartextalign;
// End Sub
};

// [508] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [509] Return stTextAlign 
return _B._sttextalign;
// End Sub
};

// [512] public Sub setVerticalAlign(varVerticalAlign As String) 
_B.setverticalalign=function(_varverticalalign) {
// [513] AddAttr( {120} , varVerticalAlign) 
_B.addattr("vertical-align",_varverticalalign,_B);
// [514] stVerticalAlign = varVerticalAlign 
_B._stverticalalign=_varverticalalign;
// End Sub
};

// [517] public Sub getVerticalAlign() As String 
_B.getverticalalign=function() {
// [518] Return stVerticalAlign 
return _B._stverticalalign;
// End Sub
};

// [523] Sub AddChild(child As String) 
_B.addchild=function(_child) {
// [524] sbText.Append(child) 
_B._sbtext.append(_child);
// End Sub
};

}
