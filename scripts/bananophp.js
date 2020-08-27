

/* bananophp */
/* =========================== BANanoPHP  =========================== */
function banano_bananophp_bananophp() {
var _B=this;
_B._send_email="SendEmail";

_B._get_file="GetFile";

_B._directory_list="DirectoryList";

_B._rolling_copyright="RollingCopyright";

_B._validate_cc="ValidateCC";

_B._file_exists="FileExists";

_B._file_write="WriteFile";

_B._file_log="LogFile";

_B._file_append="FileAppend";

_B._file_copy="FileCopy";

_B._file_rename="FileRename";

_B._file_delete="FileDelete";

_B._directory_make="DirectoryMake";

_B._file_gethtml="FileGetHTML";

_B._file_getjson="FileGetJSON";

_B._directory_zip="DirectoryZip";

_B._directory_delete="DirectoryDelete";

_B._directory_listrecursive="DirectoryListRecursive";

_B._file_unzip="FileUnzip";

_B._directory_copy="DirectoryCopy";

_B._excel_test="ExcelTest";

// [28] Sub Initialize As BANanoPHP 
_B.initialize=function() {
// [29]  Return Me 
return _B;
// End Sub
};

// [33] Sub GetDirectoryList(sout As String) As BANAnoPHPDirList 
_B.getdirectorylist=function(_sout) {
var _dir,_soutm;
// [35]  Dim DIR As BANAnoPHPDirList 
_dir= new banano_bananophp_bananophpdirlist();
// [36]  DIR.initialize 
_dir.initialize();
// [37]  DIR.dirs.initialize 
_dir._dirs.length=0;
// [38]  DIR.dnum = 0 
_dir._dnum=0;
// [39]  DIR.fnum = 0 
_dir._fnum=0;
// [40]  DIR.files.Initialize 
_dir._files.length=0;
// [42]  If sout.startswith( {21} ) Then 
if (_sout.startsWith("{")) {
// [43]  Dim soutm As Map = BANano.fromjson(sout) 
_soutm=JSON.parse(_sout);
// [44]  DIR.dnum = soutm.get( {22} ) 
_dir._dnum=_soutm["dnum"];
// [45]  DIR.fnum = soutm.get( {23} ) 
_dir._fnum=_soutm["fnum"];
// [46]  DIR.files = soutm.get( {24} ) 
_dir._files=_soutm["files"];
// [47]  DIR.dirs = soutm.get( {25} ) 
_dir._dirs=_soutm["dirs"];
// [48]  End If 
}
// [49]  Return DIR 
return _dir;
// End Sub
};

// [53] Sub BuildRollingCopyright(message As String, year As String) As Map 
_B.buildrollingcopyright=function(_message,_year) {
var _se;
// [54]  Dim se As Map = CreateMap() 
_se={};
// [55]  se.put( {26} , message) 
_se["message"]=_message;
// [56]  se.put( {27} , year) 
_se["year"]=_year;
// [57]  Return se 
return _se;
// End Sub
};

// [61] Sub BuildFileExists(path As String) As Map 
_B.buildfileexists=function(_path) {
var _se;
// [62]  Dim se As Map = CreateMap() 
_se={};
// [63]  se.Put( {28} , path) 
_se["path"]=_path;
// [64]  Return se 
return _se;
// End Sub
};

// [68] Sub BuildValidateCC(number As String, expiry As String) As Map 
_B.buildvalidatecc=function(_number,_expiry) {
var _se;
// [69]  Dim se As Map = CreateMap() 
_se={};
// [70]  se.put( {29} , number) 
_se["number"]=_number;
// [71]  se.put( {30} , expiry) 
_se["expiry"]=_expiry;
// [72]  Return se 
return _se;
// End Sub
};

// [76] Sub BuildSendEmail(fromEmail As String, toEmail As String, ccEmail As String, subject As String, message As String) As Map 
_B.buildsendemail=function(_fromemail,_toemail,_ccemail,_subject,_message) {
var _se;
// [77]  Dim se As Map = CreateMap() 
_se={};
// [78]  se.put( {31} , fromEmail) 
_se["from"]=_fromemail;
// [79]  se.put( {32} , toEmail) 
_se["to"]=_toemail;
// [80]  se.put( {33} , ccEmail) 
_se["cc"]=_ccemail;
// [81]  se.put( {34} , subject) 
_se["subject"]=_subject;
// [82]  se.put( {35} , message) 
_se["msg"]=_message;
// [83]  Return se 
return _se;
// End Sub
};

// [87] Sub BuildGetFile(fileName As String) As Map 
_B.buildgetfile=function(_filename) {
var _se;
// [88]  Dim se As Map = CreateMap() 
_se={};
// [89]  se.put( {36} , fileName) 
_se["fileName"]=_filename;
// [90]  Return se 
return _se;
// End Sub
};

// [94] Sub BuildFileGetHTML(url As String) As Map 
_B.buildfilegethtml=function(_url) {
var _se;
// [95]  Dim se As Map = CreateMap() 
_se={};
// [96]  se.put( {37} , url) 
_se["url"]=_url;
// [97]  Return se 
return _se;
// End Sub
};

// [101] Sub BuildFileGetJSON(url As String) As Map 
_B.buildfilegetjson=function(_url) {
var _se;
// [102]  Dim se As Map = CreateMap() 
_se={};
// [103]  se.put( {38} , url) 
_se["url"]=_url;
// [104]  Return se 
return _se;
// End Sub
};

// [109] Sub BuildWriteFile(fileName As String, fileContents As String) As Map 
_B.buildwritefile=function(_filename,_filecontents) {
var _se;
// [110]  Dim se As Map = CreateMap() 
_se={};
// [111]  se.Put( {39} , fileName) 
_se["fileName"]=_filename;
// [112]  se.Put( {40} , fileContents) 
_se["fileContents"]=_filecontents;
// [113]  Return se 
return _se;
// End Sub
};

// [117] Sub BuildFileCopy(source As String, target As String) As Map 
_B.buildfilecopy=function(_source,_target) {
var _se;
// [118]  Dim se As Map = CreateMap() 
_se={};
// [119]  se.Put( {41} , source) 
_se["source"]=_source;
// [120]  se.Put( {42} , target) 
_se["target"]=_target;
// [121]  Return se 
return _se;
// End Sub
};

// [125] Sub BuildFileRename(source As String, target As String) As Map 
_B.buildfilerename=function(_source,_target) {
var _se;
// [126]  Dim se As Map = CreateMap() 
_se={};
// [127]  se.Put( {43} , source) 
_se["source"]=_source;
// [128]  se.Put( {44} , target) 
_se["target"]=_target;
// [129]  Return se 
return _se;
// End Sub
};

// [133] Sub BuildDirectoryList(path As String) As Map 
_B.builddirectorylist=function(_path) {
var _se;
// [134]  Dim se As Map = CreateMap() 
_se={};
// [135]  se.put( {45} , path) 
_se["path"]=_path;
// [136]  Return se 
return _se;
// End Sub
};

// [140] Sub BuildFileUnzip(zipfile As String, extractTo As String) As Map 
_B.buildfileunzip=function(_zipfile,_extractto) {
var _se;
// [141]  Dim se As Map = CreateMap() 
_se={};
// [142]  se.put( {46} , zipfile) 
_se["zipfile"]=_zipfile;
// [143]  se.Put( {47} , extractTo) 
_se["extractTo"]=_extractto;
// [144]  Return se 
return _se;
// End Sub
};

// [149] Sub BuildDirectoryZip(path As String, zipname As String) As Map 
_B.builddirectoryzip=function(_path,_zipname) {
var _se;
// [150]  Dim se As Map = CreateMap() 
_se={};
// [151]  se.put( {48} , path) 
_se["path"]=_path;
// [152]  se.Put( {49} , zipname) 
_se["zipname"]=_zipname;
// [153]  Return se 
return _se;
// End Sub
};

// [157] Sub BuildFileDelete(filex As String) As Map 
_B.buildfiledelete=function(_filex) {
var _se;
// [158]  Dim se As Map = CreateMap() 
_se={};
// [159]  se.put( {50} , filex) 
_se["filex"]=_filex;
// [160]  Return se 
return _se;
// End Sub
};

// [164] Sub BuildDirectoryMake(dirPath As String) As Map 
_B.builddirectorymake=function(_dirpath) {
var _se;
// [165]  Dim se As Map = CreateMap() 
_se={};
// [166]  se.put( {51} , dirPath) 
_se["dirpath"]=_dirpath;
// [167]  Return se 
return _se;
// End Sub
};

// [171] Sub BuildDirectoryDelele(dirPath As String) As Map 
_B.builddirectorydelele=function(_dirpath) {
var _se;
// [172]  Dim se As Map = CreateMap() 
_se={};
// [173]  se.put( {52} , dirPath) 
_se["dir"]=_dirpath;
// [174]  Return se 
return _se;
// End Sub
};

// [178] Sub BuildDirectoryListRecursive(dirPath As String) As Map 
_B.builddirectorylistrecursive=function(_dirpath) {
var _se;
// [179]  Dim se As Map = CreateMap() 
_se={};
// [180]  se.put( {53} , dirPath) 
_se["path"]=_dirpath;
// [181]  Return se 
return _se;
// End Sub
};

// [185] Sub BuildDirectoryCopy(src As String, dst As String) As Map 
_B.builddirectorycopy=function(_src,_dst) {
var _se;
// [186]  Dim se As Map = CreateMap() 
_se={};
// [187]  se.put( {54} , src) 
_se["src"]=_src;
// [188]  se.put( {55} , dst) 
_se["dst"]=_dst;
// [189]  Return se 
return _se;
// End Sub
};

}
