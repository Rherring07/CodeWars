//return the domain name of a given url

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  //must check if url starts with www
  //codesitewww.com would return codesitecom otherwise
  if(url.startsWith("www.")) 
    url = url.replace("www.", '');
  return url.split('.')[0];
  
}
