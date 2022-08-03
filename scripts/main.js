const  AllHosts = new Map() ;
AllHosts.set("Billing","")
function btn(urlPageHtml)
{
    window.location.href=urlPageHtml;
}
function getInputValues()
{
    
    var inputHost=document.getElementById("host").value;
    var inputHostGroup= document.getElementById("HostGroup").value;
    var problem= document.getElementById("problem").value;
    document.getElementById("output").innerHTML=inputHost +" "+inputHostGroup +" "+problem;

}
