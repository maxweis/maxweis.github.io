document.write('<style>' +
'a:link{color:#3366FF;}' +
'a:visited{color:#9C9D9C;}' +
'a:hover{color:#5C85FF;}' +
'</style>' +
'<link rel="shortcut icon" href="images/mw.ico" />' +
'<body link="#3366FF" background="images/tile.jpg">' +
');

var page=window.location.pathname;
if (page == "/art_home.html"){
        document.write('\
        <a class="btn" href="art_home.html"><button class="btn" type="submit"><font color=blue>Art</font></button></a>\
        ');
}
else{
        document.write('\
        <a class="btn" href="art_home.html"><button class="btn" type="submit">Art</button></a>\
        ');
}

if (page == "/downloads_home.html"){
        document.write('\
        <a class="btn" href="downloads_home.html"><button class="btn" type="submit"><font color = blue>Downloads</font></button></a>\
        ');
}
else{
        document.write('\
        <a class="btn" href="downloads_home.html"><button class="btn" type="submit">Downloads</button></a>\
        ');
}

if (page == "/essays_home.html"){
        document.write('\
        <a class="btn" href="essays_home.html"><button class="btn" type="submit"><font color = blue>Essays</font></button></a>\
        ');
}
else{
        document.write('\
        <a class="btn" href="essays_home.html"><button class="btn" type="submit">Essays</button></a>\
        ');
}

if (page == "/humor_home.html"){
        document.write('\
        <a class="btn" href="humor_home.html"><button class="btn" type="submit"><font color = blue>Humor</font></button></a>\
        ');
}
else{
        document.write('\
        <a class="btn" href="humor_home.html"><button class="btn" type="submit">Humor</button></a>\
        ');
}

if (page == "/links_home.html"){
        document.write('\
        <a class="btn" href="links_home.html"><button class="btn" type="submit"><font color = blue>Links</font></button></a>\
        ');
}
else{
        document.write('\
        <a class="btn" href="links_home.html"><button class="btn" type="submit">Links</button></a>\
        ');
}

if (page == "videos_home.html"){
        document.write('\
        <a class="btn" href="videos_home.html"><button class="btn" type="submit"><font color = blue>Videos</font></button></a>\
        ');
}
else{
        document.write('\
        <a class="btn" href="videos_home.html"><button class="btn" type="submit">Videos</button></a>\
        ');
}

document.write('
'<font color="white" face="ubuntu">' +
'<h1 style="text-align:center;">The Max Weis Page of Various Nonsense</h1>' +
'</font>' +
'<font color="white" face="Droid Sans">' +
');
