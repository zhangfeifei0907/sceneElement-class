/**
 * Created by faye.zhang on 2015/7/22.
 */
function loadCss(url){
    var htmlhead=document.querySelector('head');
    var css=document.createElement('link');
    css.href=url;
    css.rel='stylesheet';
    css.type='text/css';
    htmlhead.appendChild(css);
}
function sceneElement(type,width,height,cssUrl){
    //�����������������������ͷ�������������Ҳ������β���������������������ǵ���ʾ�¼������ǵ���ʽͳһ��sceneelement.css���ơ�
    //typeΪ������ͣ���3��(sceneHeader,sceneFooter,sceneLeftSidebar,sceneRightSidebar)
    this.sceneElementType=type;
    this.sceneElementWidth=width+'px';
    this.sceneElementHeight=height+'px';
    this.sceneElementCssUrl=cssUrl;
}

sceneElement.prototype.creElement=function(){
    loadCss(this.sceneElementCssUrl);
    var item=document.createElement('div');
    item.className+=' sceneElement';
    item.className+=' '+this.sceneElementType;
    item.className+=' JS'+this.sceneElementType;
    item.style.width=this.sceneElementWidth;
    item.style.height=this.sceneElementHeight;
    document.body.appendChild(item);

}
sceneElement.prototype.hideElement=function(){
    var temp='.JS'+this.sceneElementType;
    var target=document.querySelector(temp);
    switch(this.sceneElementType)
    {
        case 'sceneHeader':
            target.style.top='-'+this.sceneElementHeight;
            break;
        case 'sceneLeftSidebar':
            target.style.left='-'+this.sceneElementWidth;
            break;
        case 'sceneRightSidebar':
            target.style.right='-'+this.sceneElementWidth;
            break;
        case 'sceneFooter':
            target.style.bottom='-'+this.sceneElementHeight;
            break;
        default:
            console.log('check. object do not match');
            break;
    }
}
sceneElement.prototype.showElement=function(){
    var temp='.JS'+this.sceneElementType;
    var target=document.querySelector(temp);
    switch(this.sceneElementType)
    {
        case 'sceneHeader':
            target.style.top=0;
            break;
        case 'sceneLeftSidebar':
            target.style.left=0;
            break;
        case 'sceneRightSidebar':
            target.style.right=0;
            break;
        case 'sceneFooter':
            target.style.bottom=0;
            break;
        default:
            console.log('check. object do not match');
            break;
    }
}