var _banano_helloemail=new banano_helloemail();var _banano_bananomjml_bananoshared=new banano_bananomjml_bananoshared();var _banano_helloemail_bananohelpers=new banano_helloemail_bananohelpers();var _banano_helloemail_pgindex=new banano_helloemail_pgindex();

/* App */
/* =========================== BANanoHelpers  =========================== */
function banano_helloemail_bananohelpers() {
var _B;
// [7] Sub UploadFileWait(e As BANanoEvent) As BANanoPromise 
this.uploadfilewait=async function(_e) {
if (_B==null) _B=this;
var _prom,_filelist,_fileo,_fd;
// [8]  Dim prom As BANanoPromise 
_prom=null;
// [10]  Dim fileList As List = BANanoShared.GetFileListFromTarget(e) 
_filelist=_banano_bananomjml_bananoshared.getfilelistfromtarget(_e);
// [11]  If fileList.size = 0 Then Return prom 
if (_filelist.length==0) { return _prom;}
// [14]  Dim fileO As Map = fileList.Get(0) 
_fileo=_filelist[0];
// [16]  Dim fd As BANanoObject 
_fd=null;
// [17]  fd.Initialize2( {1} , Null) 
_fd=new FormData();
// [18]  fd.RunMethod( {2} , Array( {3} , fileO)) 
_fd["append"]("upload",_fileo);
// [20]  prom = BANano.CallAjaxWait( {4} , {5} , {6} , fd, True, Null) 
_prom=await callAjaxWait("./assets/upload.php","POST","", _fd,true,null);
// [21]  Return prom 
return _prom;
// End Sub
};

// [25] Sub SendEmail(sfrom As String, sto As String, scc As String, sSubject As String, smsg As String) As Boolean 
this.sendemail=async function(_sfrom,_sto,_scc,_ssubject,_smsg) {
if (_B==null) _B=this;
var _se,_result,_resultm,_response;
// [26]  Dim Se As Map = CreateMap() 
_se={};
// [27]  Se.put( {7} , sfrom) 
_se["from"]=_sfrom;
// [28]  Se.put( {8} , sto) 
_se["to"]=_sto;
// [29]  Se.put( {9} , scc) 
_se["cc"]=_scc;
// [30]  Se.put( {10} , sSubject) 
_se["subject"]=_ssubject;
// [31]  Se.put( {11} , smsg) 
_se["msg"]=_smsg;
// [32]  Dim Result As String = BANano.CallInlinePHPWait( {12} , Se) 
_result=await callAjaxWait('http://localhost:8080/helloemail/helloemail.php','POST','json', JSON.stringify({"request": "SendEmail", "params": _se}),false,null);
// [33]  Dim ResultM As Map = BANano.FromJSON(Result) 
_resultm=JSON.parse(_result);
// [34]  Dim Response As String = ResultM.Get( {13} ) 
_response=_resultm["response"];
// [35]  Select Case Response 
switch ("" + _response) {
// [36]  Case {14} 
case "" + "failure":
// [37]  Return False 
return false;
// [38]  Case Else 
default:
// [39]  Return True 
return true;
// [40]  End Select 
}
// End Sub
};

// [45] Sub SaveHTMLFile(fileName As String, content As String) 'ignore 
this.savehtmlfile=async function(_filename,_content) {
if (_B==null) _B=this;
var _bphp;
// [46]  Dim bPHP As BANanoPHP 
_bphp= new banano_bananophp_bananophp();
// [47]  bPHP.Initialize 
_bphp.initialize();
// [48]  BANano.CallInlinePHPWait(bPHP.FILE_WRITE, bPHP.BuildWriteFile( {0} , content)) 
await callAjaxWait('http://localhost:8080/helloemail/helloemail.php','POST','json', JSON.stringify({"request": _bphp._file_write, "params": _bphp.buildwritefile("./" + _filename + ".html",_content)}),false,null);
// End Sub
};

// [53] Sub SendMJMLEmail(MailFromName As String, MailFrom As String, MailSubject As String, MailRecipients As String, MailHTML As String) As BANanoPromise 'ignore 
this.sendmjmlemail=async function(_mailfromname,_mailfrom,_mailsubject,_mailrecipients,_mailhtml) {
if (_B==null) _B=this;
var _se,_bp;
// [54]  Dim se As Map = CreateMap() 
_se={};
// [55]  se.put( {15} , MailFrom) 
_se["from"]=_mailfrom;
// [56]  se.put( {16} , MailRecipients) 
_se["to"]=_mailrecipients;
// [57]  se.put( {17} , MailSubject) 
_se["subject"]=_mailsubject;
// [58]  se.put( {18} , MailHTML) 
_se["msg"]=_mailhtml;
// [59]  se.Put( {19} , MailFromName) 
_se["fromname"]=_mailfromname;
// [60]  Dim bp As BANanoPromise = BANano.CallInlinePHPWait( {20} , se) 
_bp=await callAjaxWait('http://localhost:8080/helloemail/helloemail.php','POST','json', JSON.stringify({"request": "SendMJMLEmail", "params": _se}),false,null);
// [61]  Return bp 
return _bp;
// End Sub
};

}
/* =========================== pgIndex  =========================== */
function banano_helloemail_pgindex() {
var _B;
this._mjmlapp= new banano_bananomjml_bananomjml();

// [14] Sub Init 
this.init=function() {
if (_B==null) _B=this;
var _bpr,_bpe,_bp;
// [16]  MJMLApp.Initialize( {0} ) 
_B._mjmlapp.initialize("myemail");
// [18]  BANano.LoadLayout( {1} , {2} ) 
this.myemail("#template");
// [20]  companyheader.Element.LoadLayout( {3} ) 
_B._companyheader.getelement().BANll(this.ch);
// [23]  imageheader.Element.LoadLayout( {4} ) 
_B._imageheader.getelement().BANll(this.ih);
// [26]  introductiontext.Element.LoadLayout( {5} ) 
_B._introductiontext.getelement().BANll(this.introtext);
// [29]  twocolumnsection.Element.LoadLayout( {6} ) 
_B._twocolumnsection.getelement().BANll(this.section1);
// [32]  icons.Element.LoadLayout( {7} ) 
_B._icons.getelement().BANll(this.iconsx);
// [35]  socialicons.Element.LoadLayout( {8} ) 
_B._socialicons.getelement().BANll(this.social);
// [37]  MJMLApp.Preview 
_B._mjmlapp.preview();
// [40]  BANanoHelpers.SaveHTMLFile( {9} , MJMLApp.HTML) 
_banano_helloemail_bananohelpers.savehtmlfile("myemail",_B._mjmlapp.gethtml());
// [42]  Dim bpr As Map 
_bpr={};
// [43]  Dim bpe As Map 
_bpe={};
// [44]  Dim bp As BANanoPromise = BANanoHelpers.SendMJMLEmail( {10} , {11} , {12} , {13} , MJMLApp.html) 
_bp=_banano_helloemail_bananohelpers.sendmjmlemail("TGIF Zone Inc","info@tgifzone.com","BANanoMJML Test","mbanga.anele@tgifzone.com",_B._mjmlapp.gethtml());
// [45]  bp.Then(bpr) 
_bp.then(function(_bpr) {
// [46]  Log(bpr) 
console.log(_bpr);
// [47]  bp.Else(bpe) 
}).catch(function(_bpe) {
// [48]  Log(bpe) 
console.log(_bpe);
// [49]  bp.End 
});
// End Sub
};

this.myemail=function(Par) {
u(Par).empty();
_B._emailpage=BANC( banano_bananomjml_mjapp,_B, "emailpage", "emailpage",u(Par), {"Attributes": "","Caption": "","Classes": "","Style": ""});
_B._emailbody=BANC( banano_bananomjml_mjbody,_B, "emailbody", "emailbody",u('#emailpage'), {"Attributes": "","BackgroundColor": "","Caption": "","Classes": "","CssClass": "","Style": "","Width": ""});
_B._companyheader=BANC( banano_bananomjml_mjsection,_B, "companyheader", "companyheader",u('#emailbody'), {"Attributes": "","BackgroundColor": "#f0f0f0","BackgroundRepeat": "","BackgroundSize": "","BackgroundUrl": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","Direction": "","FullWidth": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextAlign": ""});
_B._imageheader=BANC( banano_bananomjml_mjsection,_B, "imageheader", "imageheader",u('#emailbody'), {"Attributes": "","BackgroundColor": "#f0f0f0","BackgroundRepeat": "no-repeat","BackgroundSize": "cover","BackgroundUrl": "https://images.freeimages.com/images/large-previews/b8d/irish-landscape-1393571.jpg","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","Direction": "","FullWidth": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextAlign": ""});
_B._introductiontext=BANC( banano_bananomjml_mjsection,_B, "introductiontext", "introductiontext",u('#emailbody'), {"Attributes": "","BackgroundColor": "#fafafa","BackgroundRepeat": "","BackgroundSize": "","BackgroundUrl": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","Direction": "","FullWidth": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextAlign": ""});
_B._twocolumnsection=BANC( banano_bananomjml_mjsection,_B, "twocolumnsection", "twocolumnsection",u('#emailbody'), {"Attributes": "","BackgroundColor": "white","BackgroundRepeat": "","BackgroundSize": "","BackgroundUrl": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","Direction": "","FullWidth": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextAlign": ""});
_B._icons=BANC( banano_bananomjml_mjsection,_B, "icons", "icons",u('#emailbody'), {"Attributes": "","BackgroundColor": "#fbfbfb","BackgroundRepeat": "","BackgroundSize": "","BackgroundUrl": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","Direction": "","FullWidth": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextAlign": ""});
_B._socialicons=BANC( banano_bananomjml_mjsection,_B, "socialicons", "socialicons",u('#emailbody'), {"Attributes": "","BackgroundColor": "#e7e7e7","BackgroundRepeat": "","BackgroundSize": "","BackgroundUrl": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","Direction": "","FullWidth": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextAlign": ""});
};

this.ch=function(Par) {
u(Par).empty();
_B._chcol1=BANC( banano_bananomjml_mjcolumn,_B, "chcol1", "chcol1",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": ""});
_B._chtext1=BANC( banano_bananomjml_mjtext,_B, "chtext1", "chtext1",u('#chcol1'), {"Align": "","Attributes": "","Caption": "TGIF Zone Inc","Classes": "","Color": "#626262","ContainerBackgroundColor": "","CssClass": "","FontFamily": "","FontSize": "20px","FontStyle": "italic","FontWeight": "","Height": "","LetterSpacing": "","LineHeight": "","Loremipsum": false,"Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextDecoration": "","TextTransform": ""});
};

this.ih=function(Par) {
u(Par).empty();
_B._ihcol1=BANC( banano_bananomjml_mjcolumn,_B, "ihcol1", "ihcol1",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": "600px"});
_B._ihtext1=BANC( banano_bananomjml_mjtext,_B, "ihtext1", "ihtext1",u('#ihcol1'), {"Align": "center","Attributes": "","Caption": "My Slogan Here","Classes": "","Color": "#fff","ContainerBackgroundColor": "","CssClass": "","FontFamily": "Helvetica Neue","FontSize": "40px","FontStyle": "","FontWeight": "","Height": "","LetterSpacing": "","LineHeight": "","Loremipsum": false,"Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextDecoration": "","TextTransform": ""});
_B._ihbutton1=BANC( banano_bananomjml_mjbutton,_B, "ihbutton1", "ihbutton1",u('#ihcol1'), {"Align": "","Attributes": "","BackgroundColor": "#F63A4D","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "Promotion","Classes": "","Color": "","ContainerBackgroundColor": "","CssClass": "","FontFamily": "","FontSize": "","FontStyle": "","FontWeight": "","Height": "","Href": "#","InnerPadding": "","LineHeight": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Rel": "","Style": "","Target": "","TextAlign": "","TextDecoration": "","TextTransform": "","VerticalAlign": "","Width": ""});
};

this.introtext=function(Par) {
u(Par).empty();
_B._it1=BANC( banano_bananomjml_mjcolumn,_B, "it1", "it1",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": "400px"});
_B._itt1=BANC( banano_bananomjml_mjtext,_B, "itt1", "itt1",u('#it1'), {"Align": "","Attributes": "","Caption": "My Awesome Text","Classes": "","Color": "#626262","ContainerBackgroundColor": "","CssClass": "","FontFamily": "Helvetica Neue","FontSize": "20px","FontStyle": "italic","FontWeight": "","Height": "","LetterSpacing": "","LineHeight": "","Loremipsum": false,"Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextDecoration": "","TextTransform": ""});
_B._it1lorem=BANC( banano_bananomjml_mjtext,_B, "it1lorem", "it1lorem",u('#it1'), {"Align": "","Attributes": "","Caption": "","Classes": "","Color": "#525252","ContainerBackgroundColor": "","CssClass": "","FontFamily": "","FontSize": "","FontStyle": "","FontWeight": "","Height": "","LetterSpacing": "","LineHeight": "","Loremipsum": true,"Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextDecoration": "","TextTransform": ""});
_B._itbtn1=BANC( banano_bananomjml_mjbutton,_B, "itbtn1", "itbtn1",u('#it1'), {"Align": "","Attributes": "","BackgroundColor": "#F45E43","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "Learn more","Classes": "","Color": "","ContainerBackgroundColor": "","CssClass": "","FontFamily": "","FontSize": "","FontStyle": "","FontWeight": "","Height": "#","Href": "","InnerPadding": "","LineHeight": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Rel": "","Style": "","Target": "","TextAlign": "","TextDecoration": "","TextTransform": "","VerticalAlign": "","Width": ""});
};

this.section1=function(Par) {
u(Par).empty();
_B._sect1=BANC( banano_bananomjml_mjcolumn,_B, "sect1", "sect1",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": ""});
_B._sect2=BANC( banano_bananomjml_mjcolumn,_B, "sect2", "sect2",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": ""});
_B._sect1img1=BANC( banano_bananomjml_mjimage,_B, "sect1img1", "sect1img1",u('#sect1'), {"Align": "","Alt": "","Attributes": "","Border": "","BorderRadius": "","Caption": "","Classes": "","ContainerBackgroundColor": "","CssClass": "","FluidOnMobile": "","Height": "","Href": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Rel": "","Src": "https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg","Srcset": "","Style": "","Target": "","Title": "","Usemap": "","Width": "200px"});
_B._sect2text1=BANC( banano_bananomjml_mjtext,_B, "sect2text1", "sect2text1",u('#sect2'), {"Align": "","Attributes": "","Caption": "Find amazing places","Classes": "","Color": "#626262","ContainerBackgroundColor": "","CssClass": "","FontFamily": "Helvetica Neue","FontSize": "20px","FontStyle": "italic","FontWeight": "","Height": "","LetterSpacing": "","LineHeight": "","Loremipsum": false,"Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextDecoration": "","TextTransform": ""});
_B._sect2text2=BANC( banano_bananomjml_mjtext,_B, "sect2text2", "sect2text2",u('#sect2'), {"Align": "","Attributes": "","Caption": "","Classes": "","Color": "#525252","ContainerBackgroundColor": "","CssClass": "","FontFamily": "","FontSize": "","FontStyle": "","FontWeight": "","Height": "","LetterSpacing": "","LineHeight": "","Loremipsum": true,"Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","TextDecoration": "","TextTransform": ""});
};

this.iconsx=function(Par) {
u(Par).empty();
_B._icncol1=BANC( banano_bananomjml_mjcolumn,_B, "icncol1", "icncol1",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": ""});
_B._icncol2=BANC( banano_bananomjml_mjcolumn,_B, "icncol2", "icncol2",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": ""});
_B._icncol3=BANC( banano_bananomjml_mjcolumn,_B, "icncol3", "icncol3",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": ""});
_B._icncol1img=BANC( banano_bananomjml_mjimage,_B, "icncol1img", "icncol1img",u('#icncol1'), {"Align": "","Alt": "","Attributes": "","Border": "","BorderRadius": "","Caption": "","Classes": "","ContainerBackgroundColor": "","CssClass": "","FluidOnMobile": "","Height": "","Href": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Rel": "","Src": "http://191n.mj.am/img/191n/3s/x0l.png","Srcset": "","Style": "","Target": "","Title": "","Usemap": "","Width": "100px"});
_B._icncol2img=BANC( banano_bananomjml_mjimage,_B, "icncol2img", "icncol2img",u('#icncol2'), {"Align": "","Alt": "","Attributes": "","Border": "","BorderRadius": "","Caption": "","Classes": "","ContainerBackgroundColor": "","CssClass": "","FluidOnMobile": "","Height": "","Href": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Rel": "","Src": "http://191n.mj.am/img/191n/3s/x01.png","Srcset": "","Style": "","Target": "","Title": "","Usemap": "","Width": "100px"});
_B._icncol3img=BANC( banano_bananomjml_mjimage,_B, "icncol3img", "icncol3img",u('#icncol3'), {"Align": "","Alt": "","Attributes": "","Border": "","BorderRadius": "","Caption": "","Classes": "","ContainerBackgroundColor": "","CssClass": "","FluidOnMobile": "","Height": "","Href": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Rel": "","Src": "http://191n.mj.am/img/191n/3s/x0s.png","Srcset": "","Style": "","Target": "","Title": "","Usemap": "","Width": "100px"});
};

this.social=function(Par) {
u(Par).empty();
_B._soccol1=BANC( banano_bananomjml_mjcolumn,_B, "soccol1", "soccol1",u(Par), {"Attributes": "","BackgroundColor": "","Border": "","BorderBottom": "","BorderLeft": "","BorderRadius": "","BorderRight": "","BorderTop": "","Caption": "","Classes": "","CssClass": "","InnerBackgroundColor": "","InnerBorder": "","InnerBorderBottom": "","InnerBorderLeft": "","InnerBorderRadius": "","InnerBorderRight": "","InnerBorderTop": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Style": "","VerticalAlign": "","Width": ""});
_B._soccol1soc1=BANC( banano_bananomjml_mjsocial,_B, "soccol1soc1", "soccol1soc1",u('#soccol1'), {"Align": "","Alt": "","Attributes": "","BackgroundColor": "","BorderRadius": "","Caption": "","Classes": "","Color": "","ContainerBackgroundColor": "","CssClass": "","FontFamily": "","FontSize": "15px","FontStyle": "","FontWeight": "","Href": "","IconHeight": "","IconPadding": "","IconSize": "30px","InnerPadding": "","LineHeight": "","Mode": "horizontal","Name": "","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Src": "","Style": "","Target": "","TextDecoration": "","TextPadding": "","Title": ""});
_B._socfb=BANC( banano_bananomjml_mjsocialelement,_B, "socfb", "socfb",u('#soccol1soc1'), {"Align": "","Alt": "","Attributes": "","BackgroundColor": "","BorderRadius": "","Caption": "Facebook","Classes": "","Color": "","ContainerBackgroundColor": "","CssClass": "","FontFamily": "","FontSize": "","FontStyle": "","FontWeight": "","Href": "https://www.facebook.com/b4xdev/","IconHeight": "","IconPadding": "","IconSize": "","InnerPadding": "","LineHeight": "","Mode": "","Name": "facebook","Padding": "","PaddingBottom": "","PaddingLeft": "","PaddingRight": "","PaddingTop": "","Src": "","Style": "","Target": "","TextDecoration": "","TextPadding": "","Title": ""});
};

}
/* =========================== HelloEmail  =========================== */
function banano_helloemail() {
var _B;
this._appname="helloemail";

this._apptitle="Hello Email";

this._publish="C:\laragon\www";

this._serverip="localhost";

this._version="0.1";

this._port="8080";

// [62] Sub BANano_Ready 
this.banano_ready=function() {
if (_B==null) _B=this;
// [63]  pgIndex.init 
_banano_helloemail_pgindex.init();
// End Sub
};

}
/* =========================== bananophpdirlist  =========================== */
function banano_bananophp_bananophpdirlist() {
var _B=this;
_B._dnum=0;

_B._fnum=0;

_B._dirs=[];

_B._files=[];

// [0] public sub initialize
_B.initialize=function() {
// End Sub
};

}
/* =========================== fileobject  =========================== */
function banano_bananomjml_fileobject() {
var _B=this;
_B._filename="";

_B._filedate="";

_B._filesize=0;

_B._filetype="";

// [0] public sub initialize
_B.initialize=function() {
// End Sub
};

}
var BANversion=1598539755542;_banano_helloemail.banano_ready();