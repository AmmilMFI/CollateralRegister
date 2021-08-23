(() => {


    class ColorScheme {
        constructor() {
        }

        getPrimaryColor() {
            return this.primaryColor;
        }

        setPrimaryColor(value) {
            this.primaryColor = value;
        }

        getSecondaryColor() {
            return this.secondaryColor;
        }

        setSecondaryColor(value) {
            this.secondaryColor = value;
        }

        getTertiaryColor() {
            return this.tertiaryColor;
        }

        setTertiaryColor(value) {
            this.tertiaryColor = value;
        }

        getQuaternaryColor() {
            return this.quaternaryColor;
        }

        setQuaternaryColor(value) {
            this.quaternaryColor = value;
        }

        getQuinaryColor() {
            return this.quinaryColor;
        }

        setQuinaryColor(value) {
            this.quinaryColor = value;
        }

        getSenaryColor() {
            return this.senaryColor;
        }

        setSenaryColor(value) {
            this.senaryColor = value;
        }

        getSeptenaryColor() {
            return this.septenaryColor;
        }

        setSeptenaryColor(value) {
            this.septenaryColor = value;
        }

        getOctonaryColor() {
            return this.octonaryColor;
        }

        setOctonaryColor(value) {
            this.octonaryColor = value;
        }

        getNonaryColor() {
            return this.nonaryColor;
        }

        setNonaryColor(value) {
            this.nonaryColor = value;
        }

        getDenaryColor() {
            return this.denaryColor;
        }

        setDenaryColor(value) {
            this.denaryColor = value;
        }
        getBlackColor(){
            return "000000"
        }
    }
    class Encrypt {
        static encrypt(key, str) {
            var s = [], j = 0, x, res = '';
            for (var i = 0; i < 256; i++) {
                s[i] = i;
            }
            for (i = 0; i < 256; i++) {
                j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
            }
            i = 0;
            j = 0;
            for (var y = 0; y < str.length; y++) {
                i = (i + 1) % 256;
                j = (j + s[i]) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
                res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
            }
            return res;
        }


    }
    let colorScheme = new ColorScheme();
    colorScheme.setPrimaryColor('d32f0a');
    colorScheme.setSecondaryColor('FFFFFF');
    colorScheme.setTertiaryColor('d32f0a');
    colorScheme.setQuaternaryColor('F7F4E4');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('f8f9fd');
    colorScheme.setDenaryColor('808080');

    class EventColorScheme{

        constructor() {
        }

        getPrimary(){
            return "4099ff"
        }
        getPrimaryLight(){
            return "4099ff"
        }
        getPrimaryDark(){
            return "003c82"
        }
        getSuccess(){
            return "2ed8b6"
        }
        getSuccessLight(){
            return "2ed8b6"
        }
        getSuccessDark(){
            return "105a4b"
        }
        getInfo(){
            return "00bcd4"
        }
        getInfoLight(){
            return "00bcd4"
        }
        getInfoDark(){
            return "004c56"
        }
        getWarning(){
            return "ffb64d"
        }
        getWarningLight(){
            return "ffb64d"
        }
        getWarningDark(){
            return "875000"
        }
        getDanger(){
            return "ff5370"
        }
        getDangerLight(){
            return "ff5370"
        }
        getDangerDark(){
            return "8a0017"
        }
        getDisabled(){
            return "EBEBE4"
        }
    }

    let ECS = new EventColorScheme();
    let serviceColors = new ColorScheme();
    serviceColors.setPrimaryColor('480032');
    serviceColors.setSecondaryColor('f16821');
    serviceColors.setTertiaryColor('7c144d');
    serviceColors.setQuaternaryColor('F7F4E4');
    serviceColors.setQuinaryColor('564F33');
    serviceColors.setSenaryColor('898253');
    serviceColors.setSeptenaryColor('9B9462');
    serviceColors.setNonaryColor('AEA770');
    serviceColors.setDenaryColor('808080');


    class Helper {
        static computeLPSArray(pat, M, lps = []) {
            let len = 0;
            let i = 1;
            lps[0] = 0;

            while (i < M) {
                if (pat.charAt(i) === pat.charAt(len)) {
                    len++;
                    lps[i] = len;
                    i++;
                }
                else
                {
                    if (len !== 0) {
                        len = lps[len - 1];

                    }
                    else
                    {
                        lps[i] = len;
                        i++;
                    }
                }
            }
        };

        static KMPSearch(pat, txt) {
            pat = pat.toLowerCase();
            txt = txt.toLowerCase();
            let M = pat.length;
            let N = txt.length;

            let lps = [];
            let j = 0;

            Helper.computeLPSArray(pat, M, lps);

            let i = 0;
            while (i < N) {
                if (pat.charAt(j) === txt.charAt(i)) {
                    j++;
                    i++;
                }
                if (j === M) {
                    return true;
                }

                else if (i < N && pat.charAt(j) !== txt.charAt(i)) {
                    if (j !== 0)
                        j = lps[j - 1];
                    else
                        i = i + 1;
                }
            }
            return false;
        }
        static numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    function elementInView(el, percentageScroll = 100){
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    }

    function getFont(name){
        return FontFamily("name")
    }


    class Loader extends HDivision{
        constructor(id="loader-wrapper") {
            super(id);
            this.addCustomStyle([Opacity(1),
                Transition("opacity","1000ms"),Width(screen.width,'px')]);
            this.loader = Division("loader").addCustomStyle([
                Opacity(1),
                Transition("opacity","1000ms")
            ]);
            this.loaderLeft = Division("section-left");
            this.loaderRight= Division("section-right");
            this.loaderLeft.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Transition("opacity","1000ms"),
                Opacity(1)
            ]);
            this.loaderRight.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Transition("opacity","1000ms"),
                Opacity(1)
            ]);
            this.addComponent([this.loader])
        }

        getLoader(){
            return this.loader;
        }
        getLoaderLeft(){
            return this.loaderLeft;
        }
        getLoaderRight(){
            return this.loaderRight;
        }

        fadeIn(){
            this.addCustomStyle(Display("block"));
            this.addCustomStyle(Opacity(1));
            this.loader.addCustomStyle(Opacity(1));
        }

        fadeOut(){
            this.addCustomStyle(Opacity(0));
            this.loader.addCustomStyle(Opacity(0));
            this.addCustomStyle(Display("none"))
        }
    }
    let loader = new Loader();
    WINDOW.addComponent(loader);
    loader.fadeIn();


    class NoticeM extends HDivision{
        constructor(id, message,textWidth) {
            super(id);
            this.addCustomStyle(
                [
                    Width(600,'px'),
                    Height(50,'px'),
                    Overflow("hidden")
                ]
            )
            this.textWidth = textWidth;
            this.margin = 600;
            this.paragraph = Paragraph('noticeP'+id).setTextContent(message).addCustomStyle([
                FontSize(11,'pt'),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor()),
                Display("block"),
                Width(textWidth,'px'),
                Margin(0,'px').setLeft(this.margin),
            ])
            this.addComponent(this.paragraph);
            this.initTimer();
        }

        initTimer(){
            this.interval = setInterval(()=>{

                if(this.margin > -(this.textWidth-600))
                {
                    this.margin--;
                }
                else{

                    this.margin=600;
                }
                this.paragraph.addCustomStyle(
                    Margin(0,'px').setLeft(this.margin)
                )


            }, 15);
        }
    }

    let dfhi = arrowRightH.substring(arrowRightH.length-10, arrowRightH.length-2);
    class NavDropDown extends HDivision{
        constructor(id, links = [],mouseListener, width, height){
            super("navDropDown_"+id);
            this.height =height;
            this.addCustomStyle(
                [
                    Width(width, 'px'),
                    Height(0,'px'),
                    Padding(0,'px').setTop(0).setBottom(0),
                    Opacity(1),
                    Position("absolute"),
                    Margin(0,'px').setTop(10),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Transition("all","500ms","ease"),
                    Overflow("hidden"),
                ]
            );
            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            this.addComponent(links);
            this.addMouseListener(mouseListener)
        }
        getHeight(){
            return this.height;
        }
    }
    class NavLink extends HDivision{
        anchor;
        dropdown;
        constructor(id,alt= "",href, mouseListener, width, dropdown = null){
            super("navLink_"+id);
            this.width = width;
            this.dropdown = dropdown;

            this.anchor = new HAnchor("a_"+id, href).setTextContent(alt);
            this.addSelectorRule("hover", Color("000000"));
            this.addComponent(this.anchor);
            this.addMouseListener(mouseListener);
            this.anchor.addMouseListener(mouseListener);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
            return;
        };

        d1920(){

            this.d1366()
        }
        d1566(){

            this.d1366()
        }
        d1536(){

            this.d1366()
        }
        d1366(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Margin(0),
                    Padding(0).setTop(21).setBottom(26).setLeft(10).setRight(10),
                    Width(75, 'px'),
                    FontSize(12,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );

        }
        d1024(){

            this.d1366()
        }
        d768(){
            this.d1366()

        }
        d540(){
            this.d1366()

        }
        d414(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.90, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(12,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );

        }
        d375(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.80, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(11,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );
        }
        d360(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.78, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(11,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );

        }
        d320(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.65, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(9,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );
        }

        getAnchor() {
            return this.anchor;
        }

    }
    class NavLinkDD extends HAnchor{
        dropdown;
        constructor(id,alt= "",href, mouseListener, width, dropdown = null){
            super("navLinkDD_"+id,href);
            this.addCustomStyle(
                [
                    Height(27, 'px'),
                    Width(100),
                    Display("block"),
                    FontSize(10,'pt'),
                    Margin(1,'px').setTop(0),
                    Padding(0,'px').setLeft(5).setTop(8).setBottom(4),
                    FontWeight("bold"),
                    TextDecoration(TEXTDECORATION.NONE),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Transition("all","300ms","ease")
                ]
            );
            this.setTextContent(alt);
            this.addSelectorRule("hover", Color("000000"));
            this.addMouseListener(mouseListener);
        }

        getAnchor() {
            return this;
        }

    }

    class LoaderSmall extends HDivision{
        constructor(id="loader-wrapperS") {
            super(id);
            this.addCustomStyle([Opacity(1),
                Transition("opacity","1000ms")]);
            this.loader = Division("loaderSmall").addCustomStyle([
                Opacity(1),
                Transition("opacity","1000ms")
            ]);
            this.addComponent([this.loader])
        }

        fadeIn(){
            this.addCustomStyle(Display("block"));
            this.addCustomStyle(Opacity(1));
            this.loader.addCustomStyle(Opacity(1));
        }

        fadeOut(){
            this.addCustomStyle(Opacity(0));
            this.loader.addCustomStyle(Opacity(0));
            this.addCustomStyle(Display("none"))
        }
    }
    class GenButton extends HDivision{
        constructor(id, text,width,color1,color2) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(15,'px'),
                Padding(5,'px').setTop(15),
                BorderRadius(2,'px'),
                BackgroundColor(color1),
                Transition(),
                Border("thin",BORDERSTYLE.INSET,colorScheme.getDenaryColor()),
            ]);
            this.color1=color1;
            this.color2=color2;
            this.paragraph = Paragraph(this.id+'_p').addCustomStyle(
                [
                    FontFamily("calibri"),
                    Width(width,'px'),
                    FontWeight(500),
                    FontSize(11,'pt'),
                    Height(20,'px'),
                    TextAlignment("center"),
                    Color(colorScheme.getSecondaryColor()),
                    Cursor(),
                    Transition(),
                    Margin("auto",''),
                    Position("relative"),
                    PositionTop(-5,'px')

                ]
            ).setTextContent(text);
            this.addComponent([this.paragraph]);
            this.addMouseListener(this)
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.addCustomStyle([
                BackgroundColor(this.color1)
            ]);



        }
        mouseOver(e){
            this.addCustomStyle([
                BackgroundColor(this.color2)
            ]);

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }

    class GenButtonRounded extends GenButton{


        constructor(id, text, width, color1, color2) {
            super(id, text, width, color1, color2);
            this.addCustomStyle(BorderRadius(15,'px'))
        }
    }

    class SubmitButton extends GenButtonRounded{
        constructor(id, text, width, color1, color2) {
            super(id, text, width, color1, color2);
            this.loader = new LoaderSmall(this.id+"loader");
            this.loader.fadeOut();
            this.addComponent(this.loader);
            this.turnOff();
        }

        turnOff(){
            this.addCustomStyle([
                BackgroundColor(ECS.getDisabled())
            ]);
            this.disabled=true;

        }
        turnOn(){
            this.addCustomStyle([
                BackgroundColor(this.color1)
            ]);
            this.disabled=false;
        }

        fadeIn(){
            this.loader.fadeIn();
        }

        fadeOut(){
            this.loader.fadeOut();
        }
        isDisabled(){
            return this.disabled;
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            if(!this.disabled)
                this.addCustomStyle([
                    BackgroundColor(this.color1)
                ]);



        }
        mouseOver(e){
            if(!this.disabled)
                this.addCustomStyle([
                    BackgroundColor(this.color2)
                ]);

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class Login extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle(
                [
                    Width(100,'vw'),
                    Height(0,'vh'),
                    Position("fixed"),
                    PositionTop(130,'px'),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BackgroundColor(colorScheme.getNonaryColor())
                ]
            );
            this.container = Division(this.id+"_con").addCustomStyle([
                Width(700,'px'),
                Height(400,'px'),
                Margin("auto",''),
                Overflow("hidden"),
                Position("relative"),
                PositionTop(25,'px'),
                BorderRadius(2,'px'),
                Overflow("hidden")
            ]);
            this.closeIcon = new HImage(this.id+"_close", closeIcon2).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("absolute"),
                PositionTop(2,'px'),
                PositionLeft(335,'px')
            ]);
            this.closeIcon.addMouseListener(this);
            this.closeIconR = new HImage(this.id+"_closeR", closeIcon2).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("absolute"),
                PositionTop(2,'px'),
                PositionLeft(5,'px')
            ]);
            this.closeIconR.addMouseListener(this);

            this.container.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.image = Division(this.id+"_Idiv").addCustomStyle([
                    Position("relative"),
                    Width(350,'px'),
                    Height(400,'px'),
                    BackgroundImage("/getBackground2.jpg",true),
                    Display("inline"),
                    Float("left"),
                    Transition()
                ]
            );
            this.body = Division(this.id+"_body").addCustomStyle([
                Position("relative"),
                Width(350,'px'),
                Height(400,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Overflow("hidden"),
                Display("inline"),
                Float("left"),
                Transition()
            ]);
            this.formBox = Division(this.id+"_formBox").addCustomStyle([
                Width(300,'px'),
                Height(300,'px'),
                BorderRadius(5,'px'),
                Overflow("hidden"),
                Margin("auto","")
            ]);
            this.formBox.domElement.style.marginTop="50px";
            this.header = Division(this.id+"_header").addCustomStyle([
                Height(50,'px'),
                Width(100),
                Overflow("hidden")
            ]);
            this.headerTxt = Paragraph(this.id+"_hTxt").addCustomStyle([
                FontFamily("calibri"),
                FontSize(18,'pt'),
                Margin(0,'px').setLeft(10).setTop(15)

            ]).setTextContent("Sign In");
            this.content = Division("content").addCustomStyle([
                Width(300,'px'),
                Height(200,'px')
            ]);
            this.labelUN = Label(this.id+"_usernameL",this.id+"_username").setTextContent("Username:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputUN= Input(this.id+"_username","text","username",50,"Username")
                .addCustomStyle([
                    Height(45,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPW = Label(this.id+"_passwordL",this.id+"_password").setTextContent("Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputPW= Input(this.id+"_password","password","password",50,"Password")
                .addCustomStyle([
                    Height(45,'px'),
                    Width(90),
                    FontFamily("calibri"),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);

            this.inputUN.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPW.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputUN.addMouseListener(this);
            this.inputPW.addMouseListener(this);
            this.submit = new SubmitButton("btnLogin","Sign In", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submit.addMouseListener(this);

            this.noaccount= Division(this.id+"NAcc").addCustomStyle([
                Width(100),
                Height(120,'px'),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor())

            ]);
            this.forgotPassword = Paragraph(this.id+"_fP").addCustomStyle([
                Position(),
                Float("right"),
                Margin(0,'px').setRight(25)
            ]).setTextContent("Forgot Password?");

            this.forgotPassword.addMouseListener(this);

            this.bodyR = Division(this.id+"_bodyR").addCustomStyle([
                Position("relative"),
                Width(0,'px'),
                Height(400,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Overflow("hidden"),
                Display("inline"),
                Float("left"),
                Transition()
            ]);

            this.formBoxR = Division(this.id+"_formBoxR").addCustomStyle([
                Width(450,'px'),
                Height(350,'px'),
                BorderRadius(5,'px'),
                Overflow("hidden"),
                FontSize(12),
                Margin("auto","")
            ]);
            this.formBoxR.domElement.style.marginTop="5px";
            this.headerR = Division(this.id+"_headerR").addCustomStyle([
                Height(50,'px'),
                Width(100),
                Overflow("hidden")
            ]);
            this.headerTxtR = Paragraph(this.id+"_hTxtR").addCustomStyle([
                FontFamily("calibri"),
                FontSize(18,'pt'),
                Margin(0,'px').setLeft(10).setTop(15)

            ]).setTextContent("Register");
            this.contentR = Division("contentR").addCustomStyle([
                Width(450,'px'),
                Height(300,'px')
            ]);
            this.labelFNR = Label(this.id+"_firstnameLR",this.id+"_firstnameR").setTextContent("First Name:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputFNR= Input(this.id+"_firstnameR","text","firstname",50,"First Name")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelLNR = Label(this.id+"_lastnameLR",this.id+"_lastnameR").setTextContent("Last Name:").addCustomStyle([
                FontFamily("calibri"),
                Width(190,'px'),
                Margin(0,'px').setLeft(10).setTop(5),
                Display("inline"),
                Position(),
                Float("left"),
            ]);
            this.inputLNR= Input(this.id+"_lastnameR","text","lastname",50,"Last Name")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(20).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelUNR = Label(this.id+"_usernameLR",this.id+"_usernameR").setTextContent("Username:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputUNR= Input(this.id+"_usernameR","text","username",50,"Username")
                .addCustomStyle([
                    Height(34,'px'),
                    FontFamily("calibri"),
                    Width(196,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelEmail = Label(this.id+"_emailL",this.id+"_email").setTextContent("Email:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5),
            ]);
            this.inputEmail= Input(this.id+"_email","text","email",50,"Email")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(5).setTop(3).setBottom(0),
                    Position(),
                    PositionLeft(12,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPhone = Label(this.id+"_phoneL",this.id+"_phone").setTextContent("Phone:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputPhone= Input(this.id+"_phone","phone","phone",11,"Phone")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelBVN = Label(this.id+"_BVNL",this.id+"_BVN").setTextContent("BVN:").addCustomStyle([
                FontFamily("calibri"),
                Width(125,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5),
            ]);
            this.inputBVN= Input(this.id+"_BVN","number","bvn",50,"BVN")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(20).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPWR = Label(this.id+"_passwordLR",this.id+"_passwordR").setTextContent("Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputPWR= Input(this.id+"_passwordR","password","password",50,"Password")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.labelPWR2 = Label(this.id+"_passwordLR2",this.id+"_passwordR2").setTextContent(" Confirm Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5),
            ]);
            this.inputPWR2= Input(this.id+"_passwordR2","password","password2",50,"Confirm Password")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(20).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);

            this.inputUNR.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPWR.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputUNR.addMouseListener(this);
            this.inputPWR.addMouseListener(this);
            this.submitR = new SubmitButton("btnLoginR","Register", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submitR.addMouseListener(this);

            this.noaccountR= Division(this.id+"NAcc").addCustomStyle([
                Width(100),
                Height(50,'px'),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor())

            ]);

            this.nayR = Paragraph(this.id+"_nayR").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setLeft(25)
            ]).setTextContent("Sign in Instead");

            this.toastPR = Paragraph(this.id+"_toastPR").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");


            this.toastP = Paragraph(this.id+"_toastP").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");

            this.nayR.addMouseListener(this);
            this.errFN = new HImage("errFN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errLN = new HImage("errLN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);
            this.errUN = new HImage("errUN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errUNL = new HImage("errUNL",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errEm = new HImage("errEM",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);
            this.errPhone = new HImage("errPhone",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errBVN = new HImage("errBVN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);
            this.errPs = new HImage("errPs",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errPsL = new HImage("errPsL",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errPsC = new HImage("errPsC",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);



            this.body.addComponent([this.formBox, this.noaccount,this.closeIcon]);
            this.bodyR.addComponent([this.formBoxR, this.noaccountR,this.closeIconR]);
            this.headerR.addComponent(this.headerTxtR);
            this.formBoxR.addComponent([this.headerR,this.contentR]);
            this.contentR.addComponent([
                this.labelFNR, this.labelLNR,
                this.inputFNR,this.errFN, this.inputLNR,this.errLN,
                this.labelUNR,this.labelEmail,
                this.inputUNR,this.errUN,this.inputEmail,this.errEm,
                this.labelPhone,this.labelBVN,
                this.inputPhone,this.errPhone,this.inputBVN,this.errBVN,
                this.labelPWR,this.labelPWR2,
                this.inputPWR,this.errPs,this.inputPWR2,this.errPsC,
                this.submitR]);
            this.noaccountR.addComponent([this.nayR, this.toastPR]);
            this.header.addComponent(this.headerTxt);
            this.formBox.addComponent([this.header,this.content]);
            this.content.addComponent([this.labelUN,this.inputUN,this.labelPW,this.inputPW,this.submit]);
            this.noaccount.addComponent([this.forgotPassword, this.toastP]);


            this.container.addComponent([this.bodyR,this.image,this.body]);
            this.addComponent(this.container);

            this.inputUN.addDocumentListener(this);
            this.inputPW.addDocumentListener(this);
            this.inputUN.addKeyListener(this);
            this.inputPW.addKeyListener(this);
            this.inputFNR.addDocumentListener(this);
            this.inputLNR.addDocumentListener(this);
            this.inputPhone.addDocumentListener(this);
            this.inputUNR.addDocumentListener(this);
            this.inputEmail.addDocumentListener(this);
            this.inputBVN.addDocumentListener(this);
            this.inputPWR.addDocumentListener(this);
            this.inputPWR2.addDocumentListener(this);

            this.unLValid= false;
            this.passLValid= false;
            this.fnValid= false;
            this.fnValid= false;
            this.lnValid= false;
            this.phoneValid= false;
            this.unValid= false;
            this.emailValid= false;
            this.passValid= false;
            this.bvnValid= false;

            this.checked =false;
        }

        keyPressed(e){
            if(e.getSource() === this.inputUN && e.getWindowEvent().keyCode === 13){
                try {
                    if(!this.submit.isDisabled()){
                        this.submit.turnOff();
                        this.submit.fadeIn();
                        this.sendR(this.packageL(), (e)=>{
                            this.submit.fadeOut();
                            document.cookie = "sk="+e['sk'];
                            window.location.href = "/dashboard";

                        }, (e)=>{
                            this.submit.fadeOut();
                            this.toast("Error logging you in!")
                        },'login')
                    }
                }
                catch (e){

                }
            }
            if(e.getSource() === this.inputPW && e.getWindowEvent().keyCode === 13){
                try {
                    if(!this.submit.isDisabled()){
                        this.submit.turnOff();
                        this.submit.fadeIn();
                        this.sendR(this.packageL(), (e)=>{
                            this.submit.fadeOut();
                            document.cookie = "sk="+e['sk'];
                            window.location.href = "/dashboard";

                        }, (e)=>{
                            this.submit.fadeOut();
                            this.toast("Error logging you in!")
                        },'login')
                    }
                }
                catch (e){

                }
            }
        }
        toastR(text){
            this.toastPR.setTextContent(text);
        }
        toast(text){
            this.toastP.setTextContent(text);
        }
        enableSubmitR(){
            if(this.inputsValidR()){
                this.submitR.turnOn();
            }
            else{
                this.submitR.turnOff();
            }
        }
        enableSubmit(){
            if(this.inputsValid()){
                this.submit.turnOn();
            }
            else{
                this.submit.turnOff();
            }
        }
        inputsValidR(){
            return this.fnValid &&this.lnValid &&this.phoneValid &&this.unValid && this.emailValid && this.passValid && this.bvnValid;
        }
        inputsValid(){
            return this.unLValid && this.passLValid;
        }
        documentChanged(e){
            if (e.getSource() === this.inputUN){
                this.checkUsernameL();
            }
            if (e.getSource() === this.inputPW){
                this.checkPWL();
            }
            if (e.getSource() === this.inputFNR){
                this.checkFN();
            }
            if (e.getSource() === this.inputLNR){
                this.checkLN();
            }
            if (e.getSource() === this.inputPhone){
                this.checkPhone();
            }
            if (e.getSource() === this.inputUNR){
                this.checkUsername();
            }
            if (e.getSource() === this.inputEmail){
                this.checkEmail()
            }
            if (e.getSource() === this.inputBVN){
                this.checkBVN()
            }
            if (e.getSource() === this.inputPWR){
                this.checkPWR();
            }
            if (e.getSource() === this.inputPWR2){
                this.checkPWR2();
            }

        }

        packageR(){
            let json = {};
            json['firstName']=this.inputFNR.getInputText();
            json['lastName']=this.inputLNR.getInputText();
            json['email']=this.inputEmail.getInputText();
            json['phone']=this.inputPhone.getInputText();
            json['bvn']=this.inputBVN.getInputText();
            json['username']=this.inputUNR.getInputText();
            json['password']=this.inputPWR.getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));
        }
        packageL(){
            let json = {};
            json['username']=this.inputUN.getInputText();
            json['password']=this.inputPW.getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('/core', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: "type="+type+"&content="+parameters
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }
        async checkUsername(){
            if(this.inputUNR.getInputText().length < 4){
                this.errUN.addCustomStyle(Width(12,'px'));
                this.unValid = false;
                this.enableSubmitR();
            }
            else{
                this.errUN.addCustomStyle(Width(0,'px'));
                let json = {};
                json['username']=this.inputUNR.getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.errUN.addCustomStyle(Width(0,'px'));
                    this.unValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errUN.addCustomStyle(Width(12,'px'));
                    this.unValid = false;
                    this.enableSubmitR();
                },'checkUsername');
            }
        }
        async checkEmail(){
            if(this.inputEmail.getInputText().length < 3){
                this.errEm.addCustomStyle(Width(12,'px'));
                this.emailValid = false;
                this.enableSubmitR();
            }

            else{
                this.errEm.addCustomStyle(Width(0,'px'));
                let json = {};
                json['email']=this.inputEmail.getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.errEm.addCustomStyle(Width(0,'px'));
                    this.emailValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errEm.addCustomStyle(Width(12,'px'));
                    this.emailValid = false;
                    this.enableSubmitR();
                },'checkEmail');
            }
        }
        async checkBVN(){
            if(this.inputBVN.getInputText().length < 3){
                this.errBVN.addCustomStyle(Width(12,'px'));
                this.bvnValid = false;
                this.enableSubmitR();
            }
            else{
                this.errBVN.addCustomStyle(Width(0,'px'));
                let json = {};
                json['bvn']=this.inputBVN.getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.errBVN.addCustomStyle(Width(0,'px'));
                    this.bvnValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errBVN.addCustomStyle(Width(12,'px'));
                    this.bvnValid = false;
                    this.enableSubmitR();
                },'checkBVN');
            }
        }
        checkPWR(){
            if(this.inputPWR.getInputText().length < 8){
                this.passValid = false;
                this.errPs.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.errPs.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
            if(this.checked){
                if(this.inputPWR.getInputText() !== this.inputPWR2.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmitR();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmitR();
                }
            }
        }
        checkPWR2(){
            if(!this.checked){
                this.checked = true;
            }
            if(this.inputPWR2.getInputText().length < 8){
                this.passValid = false;
                this.errPsC.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                if(this.inputPWR.getInputText() !== this.inputPWR2.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmitR();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmitR();
                }
            }
        }
        checkFN(){
            if(this.inputFNR.getInputText().length < 1){
                this.fnValid = false;
                this.errFN.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.fnValid = true;
                this.errFN.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        checkLN(){
            if(this.inputLNR.getInputText().length < 1){
                this.lnValid = false;
                this.errLN.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.lnValid = true;
                this.errLN.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        checkPhone(){
            if(this.inputPhone.getInputText().length < 11){
                this.phoneValid = false;
                this.errPhone.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.phoneValid = true;
                this.errPhone.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        checkUsernameL(){
            if(this.inputUN.getInputText().length < 1){
                this.unLValid = false;
                this.errUNL.addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.unLValid = true;
                this.errUNL.addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        checkPWL(){
            if(this.inputPW.getInputText().length < 1){
                this.passLValid = false;
                this.errPsL.addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.passLValid = true;
                this.errPsL.addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        clearInputFieldR(){
            this.inputFNR.clearField();
            this.inputLNR.clearField();
            this.inputPhone.clearField();
            this.inputUNR.clearField();
            this.inputEmail.clearField();
            this.inputBVN.clearField();
            this.inputPWR.clearField();
            this.inputPWR2.clearField();
            this.errUN.addCustomStyle(Width(0,'px'));
            this.errEm.addCustomStyle(Width(0,'px'));
            this.errBVN.addCustomStyle(Width(0,'px'));
            this.errPs.addCustomStyle(Width(0,'px'));
            this.errPsC.addCustomStyle(Width(0,'px'));
            this.errFN.addCustomStyle(Width(0,'px'));
            this.errLN.addCustomStyle(Width(0,'px'));
            this.errPhone.addCustomStyle(Width(0,'px'));
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    if (e.getSource()=== this.submit){
                        if(!this.submit.isDisabled()){
                            this.submit.turnOff();
                            this.submit.fadeIn();
                            this.sendR(this.packageL(), (e)=>{
                                this.submit.fadeOut();
                                document.cookie = "sk="+e['sk'];
                                window.location.href = "/dashboard";

                            }, (e)=>{
                                this.submit.fadeOut();
                                this.toast("Error logging you in!")
                            },'login')
                        }
                    }
                    if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                        this.addCustomStyle(
                            [
                                Height(0,'vh'),
                                ZIndex(0),
                                Opacity(0),
                            ]
                        );
                    }
                    if (e.getSource() === this.nay) {
                        this.body.addCustomStyle(Width(0));
                        this.bodyR.addCustomStyle(Width(450, 'px'));
                        this.image.addCustomStyle(Width(250, 'px'));
                    }
                    if (e.getSource() === this.nayR){
                        this.body.addCustomStyle(Width(350,'px'));
                        this.bodyR.addCustomStyle(Width(0));
                        this.image.addCustomStyle(Width(350,'px'));
                    }
                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)"))
            }
            if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                e.getSource().domElement.src = closeIcon2
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword || e.getSource() === this.nayR || e.getSource() === this.forgotPasswordR){
                e.getSource().addCustomStyle(Color(colorScheme.getPrimaryColor()))
            }

        }
        mouseOver(e){
            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "#"+colorScheme.getDenaryColor()))
            }
            if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                e.getSource().domElement.src = closeIcon
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword || e.getSource() === this.nayR || e.getSource() === this.forgotPasswordR){
                e.getSource().addCustomStyle(Color(colorScheme.getBlackColor()))
            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }


    class PButton extends HButton{
        constructor(id,alt= "", mouseListener){
            super("pButton_"+id);
            this.alt = alt;
            this.addCustomStyle(
                [
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Border("thin",'hidden'),
                    Margin(0, 'px').setTop(5).setRight(10),
                    Height(60, 'px'),
                    Width(60, 'px'),
                    FontSize(12,'px'),
                    FontWeight("bold"),
                    TextDecoration(),
                    BorderRadius(100,'px'),
                    Display("inline-block"),
                    Transition("all","500ms","ease")
                ]
            );
            this.paragraph = new HSpan("p_"+id).setTextContent(alt);
            this.paragraph.addCustomStyle(
                [
                    Display("inline-block"),
                    Color("FFFFFF"),
                    TextAlignment('center')
                ]
            );
            this.addComponent(this.paragraph);
            this.addMouseListener(mouseListener)
        }

    }
    class Home extends HDivision{
        constructor(frame) {
            super('homeP');
            this.frame = frame;
            this.loaded = false;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.initTopPanels();
            this.initCenterWS();
            window.addEventListener('scroll', () => {
                this.scrolled();
            });
            this.transition = false;
            this.componentResized();
            this.addComponentListener(this);
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){
                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){
                this.d768();
                return;
            }
            if (screen.width >= 540){
                this.d540();
                return;
            }
            if (screen.width >= 414){
                this.d414();
                return;
            }
            if (screen.width >= 375){
                this.d375();
                return;
            }
            if (screen.width >= 360){
                this.d360();
                return;
            }
            this.d320();
            return;
        };


        d1920(){
            this.d1366();


        }
        d1566(){

            this.d1366();
        }
        d1536(){

            this.d1366();
        }
        d1366(){
            this.transition = true;
            this.center.addCustomStyle([
                Height(screen.height-130-65, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                OverflowY("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(0,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Float("left"),
                Height(250, 'px'),
                Width(300,'px'),
                Margin(0,'px').setLeft(90).setTop(100),
                Color(colorScheme.getPrimaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('left'),
                FontWeight(700),
                FontFamily("montserrat",FONT["SANS-SERIF"]),
                FontSize(250, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(400, 'px'),
                Margin(0,'px').setTop(100).setRight(50),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                PositionRight(100, 'px'),
                PositionTop(0, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));

        }
        d1024(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(400, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Height(200, 'px'),
                Width(300,'px'),
                Margin(0,'px').setLeft(50).setTop(100),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(200, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(400, 'px'),
                Margin(0,'px').setTop(100).setRight(10),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionRight(100, 'px'),
                PositionTop(0, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));

        }
        d768(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(400, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Height(200, 'px'),
                Width(300,'px'),
                Margin(0,'px').setLeft(50).setTop(100),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(200, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(300, 'px'),
                Height(200,'px'),
                Margin(0,'px').setTop(0).setRight(10),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionTop(100,'px'),
                PositionRight(30, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));

        }
        d540(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Height(220, 'px'),
                Width(200,'px'),
                Margin(0,'px').setLeft(25).setTop(0),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(15,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(150, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(120*1.7, 'px'),
                Height(120,'px'),
                Margin(0,'px').setTop(20).setRight(10),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionRight(30, 'px'),
                PositionTop(0, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));

        }
        d414(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                Margin('auto',''),
                PositionTop(80,'px'),
                Height(200, 'px'),
                Width(screen.width-50,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Open Sans Condensed",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(18, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));


        }
        d375(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                PositionTop(80,'px'),
                Height(220, 'px'),
                Margin('auto',''),
                Width(screen.width-50,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Calibri",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(18, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));


        }
        d360(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                PositionTop(40,'px'),
                Height(220, 'px'),
                Margin('auto',''),
                Width(screen.width-50,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Open Sans Condensed",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(18, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));


        }
        d320(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(200, 'px'),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                PositionTop(40,'px'),
                Height(220, 'px'),
                Margin('auto',''),
                Width(screen.width,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Calibri",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(16, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));

        }
        initTopPanels(){
            this.imagebuffer = new HImage('buffer', '/getBackground.jpg',"null");
            this.imagebuffer.domElement.onload = ()=>{this.loaded = true;};
            this.center = Division('center');

            this.addComponent([this.center])
        }


        initCenterWS(){
            this.setUpTitleAreaWS();
            this.setUpInformationCenterWS();
        }
        setUpTitleAreaWS(){
            this.titleArea =Division('titleArea');
            this.image = new HImage(this.id+'bgc',"/getBackground.jpg","");
            this.image.addCustomStyle([
                    Width(100),
                    Position("absolute"),
                    PositionLeft(0,'px')
                ]
            );
            this.center.addComponent(this.image);
            this.center.addComponent(this.titleArea);


            this.titleDiv = Division('titleDiv');
            this.title1 = Paragraph("title1").setTextContent("Collaterals");
            this.buttonsDiv = Division('buttonsDiv');
            this.loginBtn = new PButton('loginBtn', "Start", this);
            this.buttonsDiv.addComponent([this.loginBtn]);
            this.titleDiv.addComponent(
                [
                    this.title1,
                    this.buttonsDiv
                ]
            );
            this.titleArea.addComponent(this.titleDiv);
        }
        setUpInformationCenterWS(){
            this.infoCenter = Division('infoCenter');
            this.center.addComponent(this.infoCenter);

            //this.infoCenter.addComponent(this.slideShow);


        }


        easeIn(el){
            console.log(this.transition);
            if (this.transition){
                if (elementInView(el.domElement, 80)) {
                    el.addCustomStyle(
                        Opacity(1)
                    )
                } else {
                    el.addCustomStyle(
                        Opacity(0)
                    )
                }
            }
        }
        scrolled(e){
        }


        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    if(e.getSource() === this.loginBtn){
                        this.frame.loginPage.addCustomStyle(
                            [
                                Height(100,'vh'),
                                ZIndex(10),
                                Opacity(1),
                            ]
                        );
                    }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    Opacity(0)
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    Opacity(0)
                )
            }
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]);
                e.getSource().getAnchor().addCustomStyle(
                    Color(colorScheme.getSecondaryColor())
                )
            }
            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(13,'pt')
                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())

                ])
            }
        }

        mouseOver(e){
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]);
                e.getSource().getAnchor().addCustomStyle(
                    Color(colorScheme.getPrimaryColor())
                )
            }
            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    Opacity(1)
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    Opacity(1)
                )
            }

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(14,'pt')

                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor())

                ])
            }


        }
        mouseUp(e){

        }

        mouseDown(e){

        }
    }
    class MainView extends HDivision{
        constructor() {
            super('mainView');
            WINDOW.addComponent(this);
            WINDOW.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Height(100, 'vh'),
                Width(100,'vw'),
                Padding(0),
                Margin(0),
                OverflowX('hidden')
            ]);
            this.addCustomStyle([
                    Height(100, 'vh'),
                    Width(100,'vw'),
                    Padding(0),
                    Margin(0)
                ]
            );
            window.addEventListener('scroll', () => {
                this.scrolled();
            });
            window.addEventListener('popstate', () => {
                this.switchToPage2(window.location.pathname)
            });
            this.current = null;
            this.start();
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){
                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
        };
        d1920(){

            this.d1366()
        }
        d1566(){
            this.d1366()

        }
        d1536(){
            this.d1366()

        }
        d1366(){
            this.header
                .addCustomStyle([
                    Height(50, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(50, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);

            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                Height(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(12).setLeft(10),
                Margin(0,'px').setTop(10).setLeft(100).setRight(18),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));


        }

        d1024(){
            this.header
                .addCustomStyle([
                    Height(130, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(130, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);


            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                Height(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(12).setLeft(10),
                Margin(0,'px').setTop(10).setLeft(100).setRight(18),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));


        }
        d768(){

            this.d1366()
        }
        d540(){

            this.header
                .addCustomStyle([
                    Height(130, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(130, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);

            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                Height(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(12).setLeft(10),
                Margin(0,'px').setTop(10).setLeft(20),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));

            this.loader.getLoader().addCustomStyle(
                PositionLeft(55,'vw')
            )
        }
        d414(){
            this.header
                .addCustomStyle([
                    Height(110, 'px'),
                    Width(screen.width,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(100, 'px'),
                Width(screen.width,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);

            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(window.innerWidth,'px'),
                BFVisibilty(),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(screen.width-50, 'px'),
                Padding(0,"px").setTop(12),
                Margin(0,'px').setTop(10).setLeft(15),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));

            this.loader.getLoader().addCustomStyle(
                PositionLeft(60,'vw')
            )

        }
        d375(){
            this.d414();

        }
        d360(){
            this.d414();

        }
        d320(){
            this.d414();
            this.loader.getLoader().addCustomStyle(
                PositionLeft(60,'vw'),
            )

        }


        start() {


            this.initTopPanelsWS();
            this.initHeaderWS();
            this.setUpFooterWS();
            this.initPagesWS();

            let path = window.location.pathname.toLowerCase();
            this.switchToPage(path);
        }
        initPagesWS(){

            this.homeP = new Home(this);
            /*this.servicesP = new Services(this);
            this.aboutUsP = new AboutUs(this);
            this.resourceCentreP = new ResourceCentre(this);
            this.contactUsP = new ContactUs(this);

            */
            this.body.addComponent([
                this.homeP,
                /*
                this.servicesP,
                this.aboutUsP,
                this.resourceCentreP,
                this.contactUsP*/
            ])
        }

        addToBody(panel){
            this.body.addComponent(panel)
        }
        switchToPage(path){
            path.replace("localhost","");
            path = path.toLowerCase().replace(/\s+/g,'');
            switch (path){
                case "":
                {
                    this.refreshBody(this.homeP,"/");
                    break;
                }
                case "/contactus":
                {
                    this.refreshBody(this.contactUsP,path);
                    break;
                }

                default:
                {
                    this.refreshBody(this.homeP,"/");
                    break;
                }
            }
        }
        switchToPage2(path){
            path.replace("localhost","");
            path = path.toLowerCase().replace(/\s+/g,'');
            switch (path){
                case "":
                {
                    this.refreshBody2(this.homeP,"/");
                    break;
                }
                case "/services":
                {
                    this.refreshBody2(this.servicesP,path);
                    break;
                }
                case "/services/overdrafts":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/agbajowo":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/agriculturallending":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/assetfinancing":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/basiri":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/kajolaloanscheme":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/dca":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/lpo(localpurchaseorder)financing":
                {
                    this.refreshBody2(pages[path.replace(/\s+/g,'')],path);
                    break;
                }
                case "/services/projectfinancing":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/stockfinance":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/termloans":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/aboutus":
                {
                    this.refreshBody2(this.aboutUsP,path);
                    break;
                }
                case "/resourcecentre":
                {
                    this.refreshBody2(this.resourceCentreP,path);
                    break;
                }
                case "/contactus":
                {
                    this.refreshBody2(this.contactUsP,path);
                    break;
                }

                default:
                {
                    if(path.substr(0,8) === "/profile"){
                        if (pages[path]){
                            this.refreshBody(pages[path],path);
                            break;
                        }
                    }
                    this.refreshBody2(this.homeP,"/");
                    break;
                }
            }
        }

        /**
         *
         * @param page
         * @param path
         * @param title
         */
        refreshBody(page,path,title) {
            if (this.current != null || this.current !== page) {
                try{
                    this.current.addCustomStyle(Display('none'));
                    window.clearInterval(this.interval);
                    window.clearTimeout(this.timeout);
                    loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path.replace(/\s+/g,''));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path.replace(/\s+/g,''));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)

                }
            }
        }

        /**
         *
         * @param page
         * @param path
         * @param title
         */
        refreshBody2(page,path,title) {
            if (this.current != null || this.current !== page) {
                try{
                    this.current.addCustomStyle(Display('none'));
                    window.clearInterval(this.interval);
                    window.clearTimeout(this.timeout);
                    loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, "http://ammilbank.com"+path.replace(/\s+/g,''));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)

                }
            }
        }

        initTopPanelsWS(){
            this.header = Division('header');
            this.header2 = Division('header2');
            this.body = Division('bodyP');

            this.footer3 = Division('footer3');
            this.footerPanel = Division('footerPanel');

            this.loginPage = new Login("login");
            this.addComponent([this.loginPage,this.header, this.header2, this.body,this.footer3,this.footerPanel])
        }
        initHeaderWS(){
            this.initLogoWS();
            this.initNavWS()
        }
        initLogoWS(){
            this.logoArea = Division('logoArea');
            this.logoText = Paragraph('logoText').setTextContent("AmmilMFI");
            this.logoImage= new HImage("image_"+this.id, "/getLogo","");

            this.logoArea.addComponent([this.logoText, this.logoImage]);
            this.header.addComponent(this.logoArea);


        }
        initNavWS(){
            this.navigation = Division('navigation');
            /*this.notice = new NoticeM('notice', "Loan made easy with AMMIL Microfinance Institution.     " +
                "At AMMIL Microfinance Institution, getting loan is very easy with low interest rates and affordable collateral.    " +
                "Subscribe to the Fixed Deposit Accounts with AMMIL Microfinance Institution and earn high interest rates.     " +
                "Sieze the opportunity to save funds that you do not need immediately and in addition, generate high interest on it.  "
                ,2720);
            this.notice2 = new NoticeM('notice2', "Please note that this website is under construction, our IT team are working tirelessly to build the best for you. Thank you."
                ,1000);
            */
            this.header.addComponent([this.navigation]);



        }
        setUpFooterWS(){
        }

        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    try{
                        e.getWindowEvent().preventDefault();
                        this.switchToPage(e.getSource().getLink())
                    }
                    catch(ex){

                    }
                }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    [
                        Height(0,'px'),
                        Padding(0,'px').setTop(0).setBottom(0),
                    ]
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    [
                        Height(0,'px'),
                        Padding(0,'px').setTop(0).setBottom(0),
                    ]
                )
            }
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    Color(colorScheme.getPrimaryColor())
                ]);
                e.getSource().domElement.style.boxShadow="0px 0px 0px 0 rgba(0, 0, 0, 0.25)," +
                    "0px 0px 0px 0 rgba(255, 255, 255, 0.3)";
            }
            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(13,'pt')
                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor())

                ])
            }
        }
        mouseOver(e){
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    Color(colorScheme.getDenaryColor())
                ]);
                e.getSource().domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                    "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            }
            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    [
                        Height(this.servicesDD.getHeight(),'px'),
                        Padding(0,'px').setTop(1).setBottom(0),
                    ]
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    [
                        Height(this.resourceCntDD.getHeight(),'px'),
                        Padding(0,'px').setTop(1).setBottom(0),
                    ]
                )
            }

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(14,'pt')

                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())

                ])
            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
        easeIn(el){
            if (elementInView(el.domElement, 80)) {
                el.addCustomStyle(
                    Opacity(1)
                )
            } else {
                el.addCustomStyle(
                    Opacity(0)
                )
            }
        }
        scrolled(e){
            this.easeIn(this.footer2);

        }
    }


    let mainView = new MainView();

})();
