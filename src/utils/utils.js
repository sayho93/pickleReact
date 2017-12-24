export function formatPhone(string){
    console.log(string);
    if(string != null)
        return string.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    else
        return null;
}

export function getCookie(name){
    let value = ";" + document.cookie;
    let parts = value.split(";" + name + "=");
    if(parts.length === 2)
        return decodeURIComponent(atob(parts.pop().split(";").shift()));
}

export function setCookie(name, value){
    document.cookie = name + "=" + btoa(encodeURIComponent(JSON.stringify(value)));
    console.log(JSON.stringify(value));
}

export function deleteCookie(name){
    let expireDate = new Date();

    //어제 날짜를 쿠키 소멸 날짜로 설정한다.
    expireDate.setDate( expireDate.getDate() - 1 );
    document.cookie = name + "= " + "; expires=" + expireDate.toUTCString() + "; path=/";
}