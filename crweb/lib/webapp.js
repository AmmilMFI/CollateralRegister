
(() => {

    let pages ={};
    let user ="";

    let ntfBtn = " ";
    let ntfBtnC = " ";
    let notifications = [];
    let collaterals = {};
    let backgroundColors= [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(180, 159, 64, 0.2)',
        'rgba(180, 129, 64, 0.2)',
        'rgba(180, 129, 158, 0.2)',
        'rgba(180, 129, 255, 0.2)'
    ];

    let borderColors =  [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(180, 159, 64, 1)',
        'rgba(180, 129, 64, 1)',
        'rgba(180, 129, 158, 1)',
        'rgba(180, 129, 255, 1)'
    ];

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

    let colorScheme = new ColorScheme();

    let ECS = new EventColorScheme();
    colorScheme.setPrimaryColor('232f3e');
    colorScheme.setSecondaryColor('FFFFFF');
    colorScheme.setTertiaryColor('f2f7fb');
    colorScheme.setQuaternaryColor('dadcd5');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('98e2f7');
    colorScheme.setDenaryColor('808080');

    class User {
        $firstName;
        $lastName;
        $middleName;
        $userName;
        $email;
        $phoneNo;
        $bvn;

        constructor($firstName, $lastName, $middleName, $userName, $email, $phoneNo, $bvn, $role) {
            this.$firstName = $firstName;
            this.$lastName = $lastName;
            this.$middleName = $middleName;
            this.$userName = $userName;
            this.$email = $email;
            this.$phoneNo = $phoneNo;
            this.$bvn = $bvn;
            this.$role = $role;
        }


    }
    class NoticeM extends HDivision{
        constructor(id, message,textWidth) {
            super(id);
            this.addCustomStyle(
                [
                    Width(600,'px'),
                    Height(50,'px'),
                    Overflow("hidden"),
                    Position("fixed")
                ]
            );
            this.textWidth = textWidth;
            this.margin = 600;
            this.paragraph = Paragraph('noticeP'+id).setTextContent(message).addCustomStyle([
                FontSize(11,'pt'),
                FontFamily("calibri"),
                Color("FFFFFF"),
                Display("block"),
                Width(textWidth,'px'),
                Margin(0,'px').setLeft(this.margin),
            ]);
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

    class FancyInputSelect extends HDivision{
        constructor(id, placeholder,type) {
            super(id);
            this.addCustomStyle([
                Width(50),
                Float("left"),
                Position("relative")],
            );
            this.label = Label(this.id+"label",this.id+"input").setTextContent(placeholder+":").addCustomStyle([
                FontFamily("calibri"),
                Width(95),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.input= DropDown(this.id+"input",placeholder)
                .addCustomStyle([
                    Height(40,'px'),
                    FontFamily("calibri"),
                    Width(95),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.err = new HImage(this.id+"err",errorC).addCustomStyle([
                Position("absolute"),
                PositionTop(5,'px'),
                Transition(),
                PositionLeft(95,'%'),
                Width(0,'px'),
            ]);
            this.addComponent([
                this.label, this.input,this.err
            ])
        }
        getLabel(){
            return this.label;
        }
        getInput(){
            return this.input;
        }
        getError(){
            return this.err;
        }

    }
    class NavButton extends HDivision{
        constructor(id, text,icon,menu,href,mouseListener) {
            super(id);
            this.addCustomStyle([
                Width(250,'px'),
                Height(20,'px'),
                Padding(10,'px'),
                BorderRadius(10,'px'),
                Transition(),
                Position("relative")
            ]);
            this.addMouseListener(mouseListener);
            this.href = href;
            this.icon = new HImage(this.id+"icon",icon).addCustomStyle(
                [
                    Height(15,'px'),
                    Transition(),
                    Margin(0,'px').setRight(10),
                ]
            );
            this.paragraph = Paragraph(this.id+'_p').addCustomStyle(
                [
                    FontFamily("calibri"),
                    FontWeight(700),
                    FontSize(11,'pt'),
                    Height(20,'px'),
                    Color(colorScheme.getSecondaryColor()),
                    Cursor(),
                    Display("inline"),
                    Transition(),
                    Position("relative"),
                    PositionTop(-5,'px')

                ]
            ).setTextContent(text);
            this.addComponent([this.icon,this.paragraph]);
            this.addMouseListener(this);
            this.menu = menu;
            try{
                this.addComponent(menu)
            }
            catch (e){

            }
        }

        getLink(){
            return this.href;
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
            this.paragraph.addCustomStyle([
                FontSize(11,'pt'),
                Color(colorScheme.getSecondaryColor()),
            ]);
            this.icon.addCustomStyle(
                [
                    Height(15,'px'),
                    Margin(0,'px').setRight(10),


                ]
            );
            try{
                this.menu.addCustomStyle(
                    Height(0)
                )
            }
            catch (e){

            }

        }
        mouseOver(e){
            this.paragraph.addCustomStyle([
                FontSize(13,'pt'),
                Color(colorScheme.getDenaryColor())
            ]);
            this.icon.addCustomStyle(
                [
                    Height(22,'px'),
                    Margin(0,'px').setRight(10),


                ]
            );
            try{
                this.menu.addCustomStyle(
                    Height(this.menu.getHeight())
                )
            }
            catch (e){

            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class GenButton extends HDivision{
        constructor(id, text,width,color1,color2) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(15,'px'),
                Padding(5,'px').setTop(8),
                BorderRadius(2,'px'),
                BackgroundColor(color1),
                Transition(),
                Border("thin",BORDERSTYLE.INSET,colorScheme.getDenaryColor())
            ])
            this.color1=color1;
            this.color2=color2;
            this.paragraph = Paragraph(this.id+'_p').addCustomStyle(
                [
                    FontFamily("calibri"),
                    Width(width),
                    TextAlignment("center"),
                    FontWeight("bold"),
                    FontSize(10,'pt'),
                    Height(20,'px'),
                    Color(colorScheme.getSecondaryColor()),
                    Cursor(),
                    Display("inline"),
                    Transition(),
                    Position("relative"),
                    PositionTop(-5,'px')

                ]
            ).setTextContent(text);
            this.addComponent([this.paragraph])
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
            this.addCustomStyle(BorderRadius(20,'px'));
            this.addCustomStyle(TextAlignment("center"));

            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
        }
    }
    class BalanceBox extends HDivision{

        constructor(id) {
            super(id);
            this.addCustomStyle([
                Width(400,'px'),
                Height(80,'px'),
                FontFamily("calibri"),
                FontWeight(600)
            ]);
            this.sBal = Paragraph(this.id+"sBal").setTextContent("Savings:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ]);
            this.cBal = Paragraph(this.id+"cBal").setTextContent("Current:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ]);
            this.fBal = Paragraph(this.id+"fBal").setTextContent("Fixed Deposit:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ]);
            this.addComponent([
                this.sBal,this.cBal,this.fBal
            ])
        }

        setSavingsBalance(bal){
            this.sBal.setTextContent("Savings: "+bal)
        }
        setCurrentBalance(bal){
            this.cBal.setTextContent("Current: "+bal)
        }
        setFixedDepositBalance(bal){
            this.fBal.setTextContent("Fixed Deposit: "+bal)
        }
    }

    class Loader extends HDivision{
        constructor(id="loader-wrapper") {
            super(id);
            this.addCustomStyle([Opacity(1),
                Transition("opacity","1000ms")]);
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
    class Collaterals extends HDivision{

        constructor(frame) {
            super("collaterals");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
            ]);
            this.body = Division(this.id+"body");
            this.body.addCustomStyle([
                Width(95,'%'),
                Margin("auto","")
            ]);
            let allC= 0;
            let pendC= 0;
            let decC= 0;
            let relC= 0;
            JSON.parse(localStorage.getItem("collaterals")).forEach(
                (collateral,index)=> {
                    if (collateral['status'] == 1)
                        allC++;
                });
            this.all = new CBox(this.id+"all", ["fa", "fa-list-alt", "fa-5x"], "Active",allC);
            this.body.addComponent([
                this.all
            ]);
            if(user.$role === "Director" || user.$role === "Credit") {
                JSON.parse(localStorage.getItem("collaterals")).forEach(
                    (collateral,index)=> {
                        if (collateral['status'] == 0)
                            pendC++;
                        if (collateral['status'] == 2)
                            decC++;
                        if (collateral['status'] == 3)
                            relC++;
                    });
                this.pending = new CBox(this.id + "pend", ["fa", "fa-clock-o", "fa-5x"], "Pending", pendC);
                this.declined = new CBox(this.id + "dec", ["fa", "fa-minus-circle", "fa-5x"], "Declined", decC);
                this.released = new CBox(this.id + "rele", ["fa", "fa-recycle", "fa-5x"], "Released", relC);
                this.body.addComponent([
                    this.pending, this.declined, this.released
                ]);
            }
            this.addComponent(this.body);

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

    class FancyInput extends HDivision{
        constructor(id, placeholder,type) {
            super(id);
            this.addCustomStyle([
                Width(50),
                Float("left"),
                Position("relative")],
            );
            this.label = Label(this.id+"label",this.id+"input").setTextContent(placeholder+":").addCustomStyle([
                FontFamily("calibri"),
                Width(95),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.input= Input(this.id+"input",type,placeholder.toLowerCase().replace(" ",""),50,placeholder)
                .addCustomStyle([
                    Height(40,'px'),
                    FontFamily("calibri"),
                    Width(95),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.err = new HImage(this.id+"err",errorC).addCustomStyle([
                Position("absolute"),
                PositionTop(5,'px'),
                Transition(),
                PositionLeft(95,'%'),
                Width(0,'px'),
            ]);
            this.addComponent([
                this.label, this.input,this.err
            ])
        }
        getLabel(){
            return this.label;
        }
        getInput(){
            return this.input;
        }
        getError(){
            return this.err;
        }

    }
    class FancyView extends HDivision{
        constructor(id, label,textContent) {
            super(id);
            this.addCustomStyle([
                Width(95),
                Height(50,'px'),
                Display("block"),
                Position("relative")],
            );
            this.label = Label(this.id+"label").setTextContent(label+":").addCustomStyle([
                FontFamily("calibri"),
                Width(95),
                FontWeight("bold"),
                Margin(0,'px').setLeft(10).setTop(10),
                Color("337AB7"),
            ]);
            this.view= Paragraph(this.id+"textContent")
                .addCustomStyle([
                    Height(40,'px'),
                    FontFamily("calibri"),
                    Width(95),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(0),
                    Transition(),
                ]).setTextContent(textContent);
            this.addComponent([
                this.label, this.view
            ])
        }
    }
    class FancyInput3 extends HDivision{
        constructor(id, placeholder,type) {
            super(id);
            this.addCustomStyle([
                Width(50),
                Float("left"),
                Position("relative")],
            );

            this.input= Input(this.id+"input",type,placeholder.toLowerCase().replace(" ",""),50,placeholder)
                .addCustomStyle([
                    Height(25,'px'),
                    FontFamily("calibri"),
                    Width(95),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.err = new HImage(this.id+"err",errorC).addCustomStyle([
                Position("absolute"),
                PositionTop(5,'px'),
                Transition(),
                PositionLeft(95,'%'),
                Width(0,'px'),
            ]);
            this.suc = new HImage(this.id+"suc",tagIcon).addCustomStyle([
                Position("absolute"),
                PositionTop(5,'px'),
                Transition(),
                PositionLeft(95,'%'),
                Width(0,'px'),
            ]);
            this.addComponent([
                this.input,this.err, this.suc
            ])
        }
        getLabel(){
            return this.label;
        }
        getInput(){
            return this.input;
        }
        getError(){
            return this.err;
        }
        getSuccess(){
            return this.suc;
        }

    }
    class FancyInput2 extends HDivision{
        constructor(id, placeholder,type) {
            super(id);
            this.addCustomStyle([
                Width(100),
                Float("left"),
                Position("relative")],
            );
            this.label = Label(this.id+"label",this.id+"input").setTextContent(placeholder+":").addCustomStyle([
                FontFamily("calibri"),
                Width(95),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.input= TextArea(this.id+"input",placeholder.toLowerCase().replace(" ",""),4,4)
                .addCustomStyle([
                    Height(100,'px'),
                    FontFamily("calibri"),
                    Width(98),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.err = new HImage(this.id+"err",errorC).addCustomStyle([
                Position("absolute"),
                PositionTop(5,'px'),
                Transition(),
                PositionLeft(95,'%'),
                Width(0,'px'),
            ]);
            this.addComponent([
                this.label, this.input,this.err
            ])
        }
        getLabel(){
            return this.label;
        }
        getInput(){
            return this.input;
        }
        getError(){
            return this.err;
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
    class PButton2 extends HButton{
        constructor(id,icons, mouseListener){
            super("pButton_"+id);
            this.addCustomStyle(
                [
                    BackgroundColor(colorScheme.primaryColor),
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
            this.icon = new HIcon(this.id+ "i",icons);
            this.addComponent(this.icon);
            this.addMouseListener(mouseListener)
        }

    }
    class CollateralInput extends HDivision{
        constructor(id,parent) {
            super(id);
            this.parent = parent;
            this.addCustomStyle([
                Width(40,'%'),
                Margin(0,'px').setTop(3),
                Height(33,'px'),
                Display("block"),
                Overflow("hidden")

            ]);
            this.file = new FancyInput3(this.id+"drug", this.id+'drug', 'file',200,"File:");
            this.file.addCustomStyle([
                Height(25,'px'),
                FontFamily("calibri"),
                Width(70,'%'),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(0),
                Transition(),
            ]);
            this.deleteButton = new PButton2(this.id+"del",["fa","fa-trash", "fa-lg"],this);
            this.deleteButton.addCustomStyle([
                BackgroundColor("ff0000"),
                Color("FFFFFF"),
                Margin(0,'px').setLeft(4).setTop(5),
                Width(25,'px'),
                Height(25,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.addComponent([this.file, this.deleteButton])
        }

        mouseClicked(e){

            switch (e.getEvent()){
                case"click":{
                    this.parent.remove(this.file.input.domElement.name);
                    this.domElement.parentNode.removeChild(this.domElement);
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

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class CollateralAdd extends HDivision{
        constructor(id, parent) {
            super(id);
            this.count = 0;
            this.uploaded ={};
            this.ref ={};
            this.parent = parent;
            this.addCustomStyle([
                Position(),
                Width(80,''),
                Padding(0,'px').setLeft(3),
                Margin("auto",""),
                Height(380,'px'),
                Display("none")
            ]);
            this.t1 = Paragraph(this.id+'t1').addCustomStyle([
                Height(15,'px'),
                FontSize(13),
                FontWeight("bold"),
                FontFamily("Calibri"),
                Color(colorScheme.primaryColor)
            ]).setTextContent("Add Documents");
            this.addButton = new PButton2(this.id+'add', ["fa", "fa-plus", "fa-lg"], this).addCustomStyle(
                [
                    Width(30,'px'),
                    Height(30,'px'),
                    Position(),
                ]
            );
            this.container = Division(this.id+"con").addCustomStyle([
                Width(100,'%'),
                Margin(0).setLeft(5),
                Height(120,'px'),
                OverflowY("scroll"),
                OverflowX("hidden"),
            ]);
            this.addComponent([this.t1, this.container,this.addButton])
        }

        isUploaded(){
            for (const [key, value] of Object.entries(this.uploaded)) {
                if (!value){
                    return false;
                }
            }
            if(Object.keys(this.uploaded).length > 0)
                return true;
            else
                return false;


        }
        async documentChanged(e){
            switch (e.getEvent()) {
                case"change":
                    let file = e.getSource().domElement;
                    let myFormData = new FormData();
                    myFormData.append("colla", file.files[0]);
                    await fetch("/upload", {
                        method: 'POST',
                        body: myFormData,
                    }).
                    then(response => response.json()).
                    then(json =>{
                        if(json.status === 200){
                            this.uploaded[file.name] = json['file_name'];
                            this.ref[file.name].getError().addCustomStyle(Width(0,'px'));
                            this.ref[file.name].getSuccess().addCustomStyle(Width(12,'px'));
                        }
                        else
                        if(json.status === 500){
                            this.uploaded[file.name] = false;
                            this.ref[file.name].getSuccess().addCustomStyle(Width(0,'px'));
                            this.ref[file.name].getError().addCustomStyle(Width(12,'px'));
                        }

                    }).catch(e => {
                        this.uploaded[file.name] = false;
                        this.ref[file.name].getSuccess().addCustomStyle(Width(0,'px'));
                        this.ref[file.name].getError().addCustomStyle(Width(12,'px'));
                    });
                    this.parent.documentChanged(e);
                    break;
            }
        }
        remove(key){
            delete this.uploaded[key];
            delete this.ref[key];
            this.parent.enableSubmit();
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    let cI = new CollateralInput("pret"+this.count,this);
                    this.uploaded[cI.file.input.domElement.name] = false;
                    this.ref[cI.file.input.domElement.name] = cI.file;
                    this.container.addComponent(cI);
                    cI.file.input.addDocumentListener(this);
                    this.count++;
                    this.parent.enableSubmit();
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    class UserForm extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle(
                [
                    Width(80,'vw'),
                    Height(85,'vh'),
                    Position("fixed"),
                    Padding(0,'px').setTop(50),
                    PositionTop(40,'px'),
                    PositionLeft(10,'vw'),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BorderRadius(15,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]
            );
            this.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
            this.closeIcon = new HIcon(this.id+"_close",["fa","fa-times-circle", "fa-2x"]).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("fixed"),
                Color(ECS.getDanger()),
                PositionTop(4.5,'vh'),
                PositionRight(10.9,'vw'),
            ]);
            this.closeIcon.addMouseListener(this);
            this.formBox = Division(this.id+"formBox").addCustomStyle([
                Width(80),
                Overflow("hidden"),
                Margin("auto","")
            ]);

            this.titleP = Paragraph(this.id+'title').setTextContent("Upload New Collateral");
            this.titleP.addCustomStyle([
                Width(75,'vw'),
                FontSize(18),
                FontFamily("calibri"),
                BackgroundColor("337AB7"),
                Position("fixed"),
                PositionTop(-10,'px'),
                PositionLeft(12.5,'vw'),
                BorderRadius(5,'px'),
                Padding(0,'px').setTop(10).setBottom(10),
                TextAlignment("center"),
                Color("FFFFFF"),
                FontWeight("bold"),
                ZIndex(50000),
            ]);
            this.title = new FancyInput(this.id+"title87","Title","text");
            this.firstname = new FancyInput(this.id+"firstname","First Name","text");
            this.middlename = new FancyInput(this.id+"middlename","Middle Name","text");
            this.lastname = new FancyInput(this.id+"lastname","Last Name","text");
            this.loanAmount = new FancyInput(this.id+"loan_amount","Loan Amount","text");
            this.comments = new FancyInput2(this.id+"comments","Comments");
            this.branch = new FancyInputSelect(this.id+"branch","Branch","text");
            this.oyo = new DropDownOption(this.id+"oyo", "", "Head Office", true).setTextContent("Head Office");
            this.saki = new DropDownOption(this.id+"saki", "", "Saki", false).setTextContent("Saki");
            this.iwereIle = new DropDownOption(this.id+"iwereIle", "", "Iwere Ile", false).setTextContent("Iwere Ile");
            this.igbeti = new DropDownOption(this.id+"igbeti", "", "Igbeti", false).setTextContent("Igbeti");
            this.ogbomoso = new DropDownOption(this.id+"ogbomoso", "", "Ogbomoso", false).setTextContent("Ogbomoso");
            this.branch.input.addComponent([
                this.oyo,
                this.saki,
                this.iwereIle,
                this.igbeti,
                this.ogbomoso,
            ]);

            this.collAdd = new CollateralAdd(this.id+"cAdd", this).addCustomStyle([
                Height(200,'px'),
                Display("block"),
                Width(80)],
            );
            this.submit = new SubmitButton(this.id+"submit","Register", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Width(80),
                Height(40,'px'),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Position(),
                PositionTop(10,'px'),
                Margin("auto","")
            ]);

            this.toastP = Paragraph(this.id+"_toastP").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]);

            this.submit.addMouseListener(this);
            this.title.getInput().addDocumentListener(this);
            this.firstname.getInput().addDocumentListener(this);
            this.lastname.getInput().addDocumentListener(this);
            this.loanAmount.getInput().addDocumentListener(this);
            this.comments.getInput().addDocumentListener(this);

            this.fnValid= false;
            this.lnValid= false;
            this.titleValid= false;
            this.amountValid= false;

            this.formBox.addComponent([

                this.title,this.firstname,this.middlename,this.lastname, this.loanAmount,
                this.branch,this.comments, this.closeIcon
            ]);
            this.addComponent([
                this.titleP,
                this.formBox,this.collAdd,
                this.submit,
                this.toastP
            ])
        }
        static createForm(){
            return new UserForm('userRegForm');
        }
        show(){
            this.addCustomStyle(
                [
                    ZIndex(100000),
                    Opacity(1),
                ]
            );
        }
        closeForm(){
            this.domElement.parentElement.removeChild(this.domElement);

        }
        toast(message){

            this.toastP.setTextContent(message);
        }
        reset(){

        }

        checkFN(){
            if(this.firstname.getInput().getInputText().length < 1){
                this.fnValid = false;
                this.firstname.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.fnValid = true;
                this.firstname.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        checkLN(){
            if(this.lastname.getInput().getInputText().length < 1){
                this.lnValid = false;
                this.lastname.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.lnValid = true;
                this.lastname.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        checkTitle(){
            if(this.title.getInput().getInputText().length < 1){
                this.titleValid = false;
                this.title.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.titleValid = true;
                this.title.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        checkAmount(){
            if(isNaN(this.loanAmount.getInput().getInputText())){
                this.amountValid = false;
                this.loanAmount.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.amountValid = true;
                this.loanAmount.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        inputsValid(){
            return this.collAdd.isUploaded() && this.titleValid && this.fnValid && this.lnValid && this.amountValid;
        }
        documentChanged(e){
            if (e.getSource() === this.firstname.getInput()){
                this.checkFN();
            }
            if (e.getSource() === this.lastname.getInput()){
                this.checkLN();
            }
            if (e.getSource() === this.title.getInput()){
                this.checkTitle();
            }
            if (e.getSource() === this.loanAmount.getInput()){
                this.checkAmount();
            }
            if (e.getSource() instanceof HInput){
                this.enableSubmit();
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

        packageL(){
            let json = {};
            json['first_name']=this.firstname.getInput().getInputText();
            json['middle_name']=this.middlename.getInput().getInputText();
            json['last_name']=this.lastname.getInput().getInputText();
            json['title']=this.title.getInput().getInputText();
            json['loan_amount']= parseFloat(this.loanAmount.getInput().getInputText());
            json['comments']=this.comments.getInput().getInputText();
            json['uploader']= user.$firstName + " " + user.$lastName;
            json['username']= user.$userName;
            json['branch']=this.branch.input.getSelected();
            json['files'] = JSON.stringify(Object.values(this.collAdd.uploaded));
            return JSON.stringify(json);

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

        mouseClicked(e){
            switch (e.getEvent()) {
                case"click": {

                    if (e.getSource()=== this.submit){
                        if(!this.submit.isDisabled()){
                            this.submit.turnOff();
                            this.submit.fadeIn();
                            this.sendR(this.packageL(), (e)=>{
                                this.submit.fadeOut();
                                location.reload();

                            }, (e)=>{
                                this.submit.fadeOut();
                                console.log(e['message']);
                                this.toast("Error creating Account!")
                            },'createCollateral')
                        }
                    }
                    if (e.getSource() === this.closeIcon) {
                        this.closeForm();
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

            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword || e.getSource() === this.nayR || e.getSource() === this.forgotPasswordR){
                e.getSource().addCustomStyle(Color(colorScheme.getPrimaryColor()))
            }
        }
        mouseOver(e){
            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "#"+colorScheme.getDenaryColor()))
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
    class PDFViewer2 extends HEmbed{
        constructor(id,src) {
            super(id,src);
            this.addCustomStyle([
                Width(100),
                Height(800,'px'),
                Display("block"),
                Position("relative")],
            );

        }
    }
    class PDFViewer extends HDivision{
        constructor(id,src,title) {
            super(id);
            this.addCustomStyle([
                    Width(100),
                    Height(850,'px'),
                    Display("block"),
                    Margin("auto",""),
                    Padding(0,'px').setTop(),
                    Position("relative")],
                Border("thin","solid","#"+"D9EDF7")
            );
            this.title = Paragraph(this.id+"title").setTextContent(title).addCustomStyle([
                Width(100),
                Height(20,'px'),
                Margin(0),
                BackgroundColor("337AB7"),
                FontFamily("calibri"),
                Padding(0,'px').setTop(10).setBottom(10).setLeft(5),
                Color("FFFFFF"),
            ]);
            this.addComponent([this.title,new PDFViewer2(id+"a", src)])
        }
    }
    class IconButton extends HDivision {
        constructor(id, text, icons, mouseListener, color, color2,status,cId) {
            super(id);
            this.text = text;
            this.cId = cId;
            this.status = status;
            this.addCustomStyle([
                Width(50, 'px'),
                Height(60, 'px')
            ]);
            this.icon = new HIcon(id + "i", icons);
            this.paragraph = Paragraph(id + 'p').setTextContent(text);
            this.paragraph.addCustomStyle([
                Color(color),
                FontFamily("calibri"),
                FontSize(9),
                TextAlignment("center"),
                Margin(0)
            ]);
            this.color = color;
            this.color2 = color2;
            this.icon.addCustomStyle([
                Display("block"),
                Color(color)
            ]);
            this.addComponent([
                this.icon, this.paragraph
            ]);
            this.addMouseListener(mouseListener);
            this.addMouseListener(this);
        }

        async send(parameters, func1, func2, type) {
            let response = await fetch('/core', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: "type=" + type + "&content=" + JSON.stringify(parameters)
            });
            let result = await response.json();
            if (result['status'] !== 200) {
                func2(result);
            }
            else {
                func1(result);
            }
        }

        mouseClicked(e) {
            let a = confirm("Are you sure you want to " + this.text.toLowerCase() + " this collateral?");
            if (a === true)
                this.send({id:this.cId, status:this.status, username:user.$userName}, (e) => {
                    location.reload();

                }, (e) => {
                    //this.submit.fadeOut();
                    //this.toast("Error making the changes")
                }, "changeCollateralStatus")
        }

        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.icon.addCustomStyle([
                Color(this.color)
            ]);
            this.paragraph.addCustomStyle([
                Color(this.color)
            ]);

        }
        mouseOver(e){

            this.icon.addCustomStyle([
                Color(this.color2)
            ]);
            this.paragraph.addCustomStyle([
                Color(this.color2)
            ]);

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class CollateralView extends HDivision{
        constructor(id, collateral) {
            super(id);
            this.collateral = collateral;
            let cId = collateral['id'];
            let width = screen.width*0.95;
            let height = screen.width*0.95;
            this.addCustomStyle(
                [
                    Width(width,'px'),
                    Height(85,'vh'),
                    Position("fixed"),
                    PositionTop(40,'px'),
                    PositionLeft(2.5,'vw'),
                    Padding(0,'px').setTop(50),
                    OverflowY("scroll"),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BorderRadius(15,'px'),
                    Border("thin","solid","#"),
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]
            );
            this.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";


            this.titleP = Paragraph(this.id+'title').setTextContent(collateral['title']);
            this.titleP.addCustomStyle([
                Width(90,'vw'),
                FontSize(18),
                FontFamily("calibri"),
                BackgroundColor("337AB7"),
                Position("fixed"),
                PositionTop(-10,'px'),
                PositionLeft(5,'vw'),
                BorderRadius(5,'px'),
                Padding(0,'px').setTop(10).setBottom(10),
                TextAlignment("center"),
                Color("FFFFFF"),
                FontWeight("bold"),
                ZIndex(50000),
            ]);
            this.titleP.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
            this.collInfo = Division(this.id+"collInfo").addCustomStyle([
                Width(295,'px'),
                Display("inline"),
                Position("fixed"),
                PositionLeft(32,'px'),
                Margin(0,'px').setLeft(5).setRight(5),
                BorderRadius(5,'px'),
                Border("thin","solid","#"+"D9EDF7"),
                Height(380,'px'),
                ScrollBarWidth(),
                OverflowX("hidden"),
                ZIndex(50000)
            ]);
            this.collInfo2 = Division(this.id+"collInfo2").addCustomStyle([
                Width(290,'px'),
                Display("inline"),
                Margin(0,'px').setLeft(5).setRight(0),
                Position("fixed"),
                PositionRight(50,'px'),
                BorderRadius(5,'px'),
                Border("thin","solid","#"+"D9EDF7"),
                Height(380,'px'),
                ScrollBarWidth(),
                OverflowY("hidden"),
                OverflowX("hidden"),
                ZIndex(50002)
            ]);
            this.collITitle = Paragraph(this.id+'Ititle').setTextContent("COLLATERAL INFO").addCustomStyle([
                Width(100),
                Height(20,'px'),
                Margin(0),
                BackgroundColor("337AB7"),
                FontFamily("calibri"),
                FontWeight("bold"),
                Padding(0,'px').setTop(10).setBottom(10).setLeft(5),
                Color("FFFFFF"),
            ]);
            this.collITitle2 = Paragraph(this.id+'Ititle2').setTextContent("OTHER DETAILS").addCustomStyle([
                Width(100),
                Height(20,'px'),
                Margin(0),
                BackgroundColor("337AB7"),
                FontFamily("calibri"),
                FontWeight("bold"),
                Padding(0,'px').setTop(10).setBottom(10).setLeft(5),
                Color("337AB7"),
            ]);

            this.body = Division(this.id+"body").addCustomStyle([
                Width(width-624,'px'),
                Position(),
                PositionLeft(305,'px'),
                Display("inline"),
                Float("left"),
            ]);
            this.fN = new FancyView(this.id+"fN","First Name",collateral['first_name']);
            this.lN = new FancyView(this.id+"lN","Last Name",collateral['last_name']);
            this.mN = new FancyView(this.id+"mN","Middle Name",collateral['middle_name']);
            this.loanAmount = new FancyView(this.id+"loanAmount","Loan Amount",collateral['loan_amount']);
            this.uploader = new FancyView(this.id+"uploader","Handler",collateral['uploader']);
            this.branch = new FancyView(this.id+"branch","Branch",collateral['branch']);
            this.date = new FancyView(this.id+"date","Date",collateral['date']);
            this.comments = new FancyView(this.id+"comments","Comments",collateral['comments']);
            this.actions = Division(this.id+"_actions");
            this.decline = new IconButton(this.id+"dec","Decline", ["fa","fa-minus-circle", "fa-3x"], this, ECS.getDanger(),ECS.getDangerDark(),2,cId);
            this.approve = new IconButton(this.id+"app","Approve", ["fa","fa-check", "fa-3x"],this, ECS.getSuccess(),ECS.getSuccessDark(),1,cId);
            this.release = new IconButton(this.id+"rel","Release", ["fa","fa-mail-forward", "fa-3x"],this, ECS.getWarning(),ECS.getWarningDark(),3,cId);
            this.rrelease = new IconButton(this.id+"rrel","Request Release", ["fa","fa-mail-forward", "fa-3x"],this, ECS.getWarning(),ECS.getWarningDark(),5,cId);
            this.reenact = new IconButton(this.id+"ren","Reenact", ["fa","fa-mail-reply", "fa-3x"],this, ECS.getPrimary(),ECS.getPrimaryDark(),1,cId);
            this.rreenact = new IconButton(this.id+"rren","Request Reenact", ["fa","fa-mail-reply", "fa-3x"],this, ECS.getPrimary(),ECS.getPrimaryDark(),6,cId);

            if(user.$role === "Director"){
                if (collateral['status'] == 0)
                    this.actions.addComponent([
                        this.decline
                    ]);
                if (collateral['status'] == 0)
                    this.actions.addComponent([
                        this.approve,
                    ]);
                if (collateral['status'] == 1){

                    this.actions.addComponent([
                        this.release,
                    ]);
                }
                if (collateral['status'] == 3){
                    this.actions.addComponent([
                        this.reenact
                    ]);
                }
            }

            if(user.$role === "Credit"){
                if (collateral['status'] == 1){

                    this.actions.addComponent([
                        this.rrelease,
                    ]);
                }
                if (collateral['status'] == 3){
                    this.actions.addComponent([
                        this.rreenact
                    ]);
                }
            }

            this.actions.addCustomStyle([
                Position("fixed"),
                PositionLeft(60,'px'),
                PositionTop(500,'px'),
            ]);

            this.closeIcon = new HIcon(this.id+"_close", ["fa","fa-times-circle", "fa-2x"]).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("fixed"),
                Color(ECS.getDanger()),
                BackgroundColor("FFFFFF"),
                PositionTop(4.5,'vh'),
                PositionRight(2.5,'vw'),
            ]);
            this.closeIcon.addMouseListener(this);

            this.collInfo.addComponent([
                this.collITitle,this.fN, this.lN, this.mN, this.loanAmount, this.uploader, this.branch, this.date
            ]);
            this.collInfo2.addComponent([
                this.collITitle2,this.comments
            ]);
            this.addComponent([
                this.titleP, this.collInfo,this.body, this.collInfo2, this.closeIcon, this.actions
            ]);

            let count = 0;
            JSON.parse(collateral['files']).forEach((file,index)=>{
                count++;
                this.body.addComponent(new PDFViewer(this.id+"pdf"+index, "/"+file, "Document "+(index+1)))
            });
            this.body = Division(this.id+"body").addCustomStyle([
                Height(count*850,'px'),
            ]);
        }
        static display(collateral,id){
            WINDOW.addComponent(new CollateralView(id+"viewdre",collateral).show());
        }
        show(){
            this.addCustomStyle(
                [
                    ZIndex(100000),
                    Opacity(1),
                ]
            );
            return this;
        }
        closeForm(){
            this.domElement.parentElement.removeChild(this.domElement);

        }

        mouseClicked(e){
            switch (e.getEvent()) {
                case"click": {
                    if (e.getSource() === this.closeIcon) {
                        this.closeForm();
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
        }
        mouseOver(e){
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class CBox extends HDivision{
        constructor(id,icons,title,count) {
            super(id);
            this.addCustomStyle([
                Width(300,'px'),
                Height(300,'px'),
                Display("inline"),
                Margin(0,'px').setLeft(10).setRight(10).setTop(50),
                Float("left"),
                Border("thin", "solid", "#"+"339AB7"),
                BorderRadius(5,'px'),
                Overflow("hidden")
            ]);
            this.header = Paragraph(this.id+"h").setTextContent(title);
            this.icon = new HIcon(this.id+"i", icons);
            this.count = Paragraph(this.id+"c").setTextContent(count);
            this.header.addCustomStyle([
                Height(30,'px'),
                FontSize(15),
                Margin(0,'px'),
                FontWeight("bold"),
                FontFamily("Calibri"),
                Padding(10,'px'),
                BackgroundColor("337AB7"),
                Color("FFFFFF")
            ]);
            this.count.addCustomStyle([
                FontSize(50),
                FontWeight("bold"),
                Color("337AB7"),
                Margin(0,'px').setTop(25),
                FontFamily("Calibri"),
                TextAlignment("center")
            ]);
            this.icon.addCustomStyle([
                Padding(0,'px').setTop(20),
                Width(100),
                Color("337AB7"),
                TextAlignment("center")
            ]);
            this.addComponent([
                this.header,this.icon,this.count
            ])
        }
    }

    class DownloadRow extends HDivision{
        constructor(id,title,fn,ln,lAmount,branch,width, collateral,date) {
            super(id);
            this.collateral= collateral;
            this.addCustomStyle([
                Width(width,'px'),
                Height(40,'px'),
                FontFamily("segoe ui"),
                Overflow("hidden"),
                Padding(0,'px').setLeft(2).setTop(1),
                FontSize(11,'pt'),
                Transition("border-color", "400ms"),
                Color("337AB7")

            ]);
            this.title = Paragraph(this.id+"_title").addCustomStyle([
                Overflow("hidden"),
                Width(5),
                Padding(0,'px').setTop(6),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(title);
            this.fN = Paragraph(this.id+"_fN").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Padding(0,'px').setTop(6),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(fn);
            this.lN = Paragraph(this.id+"_lN").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Padding(0,'px').setTop(6),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(ln);

            this.loanAmount = Paragraph(this.id+"_lAmount").addCustomStyle([
                Overflow("hidden"),
                Width(15),
                Padding(0,'px').setTop(6),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(lAmount);
            this.branch = Paragraph(this.id+"_branch").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Padding(0,'px').setTop(6),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(branch);
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                Overflow("hidden"),
                Width(12),
                FontSize(9),
                Padding(0,'px').setTop(8),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(date);

            this.actions= Division(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]);
            this.view = new HIcon(this.id+'view', ["fa","fa-envelope-open", "fa-2x"]);

            this.view.addCustomStyle([
                Margin(0,'px').setTop(5),
                TextAlignment("center"),
                Display("block"),
            ]);
            this.view.addMouseListener(this);
            this.actions.addComponent([
                this.view
            ]);

            this.addComponent([this.title, this.fN,this.lN, this.loanAmount, this.branch,this.date, this.actions]);
        }

        getFN(){
            return this.fN.domElement.textContent;
        }
        getLN(){
            return this.lN.domElement.textContent;
        }
        getBranch(){
            return this.branch.domElement.textContent;
        }
        getTitle(){
            return this.title.domElement.textContent;
        }
        getDate(){
            return this.date.domElement.textContent;
        }

        mouseClicked(e){

            switch (e.getEvent()) {
                case"click": {

                    if (e.getSource()=== this.view){
                        CollateralView.display(this.collateral, this.id)

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

            if(e.getSource() === this.view){
                this.view.addCustomStyle(
                    Color("337AB7")
                )
            }
        }
        mouseOver(e){
            if(e.getSource() === this.view){
                this.view.addCustomStyle(
                    Color("12395A")
                )
            }

        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    class DownloadHeader extends HDivision{
        constructor(id,width) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(20,'px'),
                FontFamily("segoe ui"),
                FontWeight(500),
                FontSize(10,'pt'),
                Padding(0,'px').setLeft(5).setTop(3),
                BackgroundColor("337AB7"),
                Color("FFFFFF"),
                BorderRadius(5,'px'),

            ]);
            this.title = Paragraph(this.id+"_title").addCustomStyle([
                Overflow("hidden"),
                Width(5),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Title");
            this.fN = Paragraph(this.id+"_fN").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("First Name");
            this.lN = Paragraph(this.id+"_lN").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Last Name");
            this.branch = Paragraph(this.id+"_branch").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Branch");
            this.loanAmount = Paragraph(this.id+"_loanAmount").addCustomStyle([
                Overflow("hidden"),
                Width(15),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Loan Amount");
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                Overflow("hidden"),
                Width(12),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Date");
            this.actions= Paragraph(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]).setTextContent("Actions");
            this.addComponent([this.title,this.fN,this.lN,this.loanAmount, this.branch,this.date, this.actions])
        }
    }
    class Downloadables extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(560,'px'),
                Width(screen.width-260,'px'),
                Overflow("hidden"),
                Margin(0,'px').setLeft(15),
                Position("relative"),
                BorderRadius(5,'px'),
                Border("thin","solid","#"+"D9EDF7"),
            ]);
            this.items=[];
            this.current=0;
            this.position =0;
            this.max = 0;
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(screen.width-260-100,'px'),
                Height(43*18,'px'),
                Position(),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(screen.width-260-100,'px'),
                Height(43*9*5,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ]);
            this.center.addComponent(this.container);
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Height(80,'px'),
                BackgroundColor("337AB7"),
            ]);
            this.header= new DownloadHeader(this.id+"_hdr",screen.width-260-100).addCustomStyle([
                Position(),
                PositionLeft(43,'px'),
                PositionTop(40,'px'),
            ]);
            this.sInput =Input(this.id+"_searchBar","search","search",250,"Search").addCustomStyle([
                Width(150,'px'),
                Height(30,'px'),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
                BorderRadius(5,'px'),
                Position("absolute"),
                PositionRight(20,'px'),
                PositionTop(5,'px'),
            ]);
            this.sInput.addDocumentListener(this);
            this.top.addComponent([this.sInput,this.header]);
            this.bottom = Division(this.id+"_bottom").addCustomStyle([
                Width(100),
                Height(50,'px'),
                Position("absolute"),
                PositionBottom(0)
            ]);
            this.text1 = Paragraph(this.id+"t1").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("Page");
            this.textP = Paragraph(this.id+"tP").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent(this.current+1);
            this.textof = Paragraph(this.id+"tof").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("of");
            this.textM = Paragraph(this.id+"tM").addCustomStyle([
                Display("inline"),

            ]).setTextContent(this.max+1);
            this.pos = Division(this.id+"_posD").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Float("right"),
                Margin(0,'px').setRight(10).setTop(3),
                Display("inline")
            ]);
            this.pos.addComponent([this.text1,this.textP,this.textof,this.textM]);

            this.textI = TextInput(this.id+"textI","",3).addCustomStyle([
                Height(10,'px'),
                Width(15,'px'),
                Margin(0,'px').setRight(2),
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
                BorderRadius(5,'px'),
            ]);
            this.textI.addKeyListener(this);
            this.textDL = Paragraph(this.id+"tDL").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent("/");
            this.textM2 = Paragraph(this.id+"tM2").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent(this.max+1);
            this.go = new PButton(this.id+"_go","",this).addCustomStyle(
                [
                    Width(15,'px'),
                    Height(15,'px'),
                    Display("inline")
                ]
            );
            this.posS = Division(this.id+"_posDS").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Margin(0,'px').setRight(10),
                Float("right"),
                Display("inline")
            ]);
            this.posS.addComponent([this.textI,this.textDL,this.textM2, this.go]);
            this.bottom.addComponent([,this.posS,this.pos]);
            this.leftIcon = new HImage(this.id+"_lIcon", arrowLeftT).addCustomStyle([
                Height(30,'px'),
                Position(),
                PositionTop(185,'px'),
                PositionLeft(5,'px'),
            ]);
            this.rightIcon = new HImage(this.id+"_RIcon", arrowRightT).addCustomStyle([
                Height(30,'px'),
                Position(),
                PositionTop(185,'px'),
                PositionLeft(5,'px'),

            ]);

            this.leftIcon.domElement.addEventListener("click", (windowEvent) => {
                this.mouseClicked(new MouseEvent("click",this.leftIcon,windowEvent));
            });
            this.rightIcon.domElement.addEventListener("click", (windowEvent) => {
                this.mouseClicked(new MouseEvent("click",this.rightIcon,windowEvent));
            });
            this.go.domElement.addEventListener("click", (windowEvent)=>{
                this.mouseClicked(new MouseEvent("click",this.go,windowEvent));
            });
            this.left = Division(this.id+"_left").addCustomStyle([
                Width(40,'px'),
                Height(400,'px'),
                Position(),
                Float("left"),
            ]);
            this.left.addComponent(this.leftIcon);
            this.right = Division(this.id+"_right").addCustomStyle([
                Width(40,'px'),
                Height(400,'px'),
                Position("absolute"),
                PositionRight(10,'px')
            ]);
            this.right.addComponent(this.rightIcon);
            this.addComponent([
                this.top,this.left,this.center,this.right,this.bottom
            ])
        }

        search(pattern){
            let count = 0;
            let myFunction =(element, index ) =>{
                if(!this.check(pattern, element)){
                    element.setVisible(false);
                    count++;
                }
                else {
                    element.setVisible(true);
                }
            };
            this.items.forEach(myFunction);
            this.max = Math.trunc((this.items.length-count)/9) > 4 ? 4:Math.trunc((this.items.length-count)/9)
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
            this.position=0;
            this.current=0;
            this.container.addCustomStyle(PositionTop((this.position)));
            this.textP.setTextContent(this.current+1)
        }

        check(pattern,  item){
            if (pattern.length !== 0){
                if(Helper.KMPSearch(pattern,item.getFN()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getLN()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getTitle()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getBranch()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getDate()))
                    return true;
                return false;
            }
            else return  true;
        }
        documentChanged(e){
            if(e.getSource() === this.sInput)
                this.search(e.getSource().getInputText());
        }
        keyPressed(e){
            if(e.getSource() === this.textI && e.getWindowEvent().keyCode === 13){
                try {
                    this.goto(parseInt(e.getSource().getInputText()))
                }
                catch (e){

                }
            }
        }
        goto(index){
            if( index-1 <= this.max && Number.isInteger(index) && index > 0){
                this.current = index-1;
                this.position = -(9*43) * (index-1);
                this.container.addCustomStyle(PositionTop(this.position));
                this.textP.setTextContent(this.current+1)
            }
        }

        addDownloadable(downloadable){
            try{
                downloadable.forEach((item)=>{
                    this.paginate(item);
                })
            }
            catch(e){
                this.paginate(downloadable);
            }
        }

        paginate(item){
            if(this.items.length < 90){
                this.container.addComponent(item);
                this.adjustValues(item);
            }
        }
        adjustValues(item){
            this.max = Math.trunc((this.items.length+1)/9) > 4 ? 4:Math.trunc((this.items.length+1)/9);
            this.items.push(item);
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
        }

        switch(button){
            if(button === this.leftIcon && this.current > 0){
                this.container.addCustomStyle(PositionTop((this.position +(9*43))));
                this.current--;
                this.position = this.position +(9*43);
                this.textP.setTextContent(this.current+1);
            }
            if(button === this.rightIcon && this.current < this.max){
                this.container.addCustomStyle(PositionTop((this.position -(9*43))));
                this.current++;
                this.position = this.position -(9*43);
                this.textP.setTextContent(this.current+1);
            }

        }

        mouseOut(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }
        }

        mouseOver(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }
        }

        mouseClicked(e){
            if(e.getSource() === this.leftIcon || e.getSource() === this.rightIcon)
                this.switch(e.getSource());

            if(e.getSource() === this.go){
                try {
                    this.goto(parseInt(this.textI.getInputText()))
                }
                catch (e){

                }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){
        }
        mouseMoved(e){
        }
        mouseDown(e){
        }
        mouseUp(e){
        }

    }

    class Index extends HDivision{
        constructor(frame) {
            super("index");
            this.addCustomStyle([
                Display('none'),
            ]);
            this.pageTitle = Paragraph(this.id+'pT').setTextContent("COLLATERALS");
            this.pageTitle.addCustomStyle([
                FontSize(18),
                Height(40,'px'),
                FontFamily("Calibri"),
                FontWeight("bold"),
                Padding(0,'px').setLeft().setBottom(30),
                BottomBorder("thin","solid","#"+"337AB7"),
                Color("337AB7")

            ]);

            this.downloadables = new Downloadables(this.id+"_dds").addCustomStyle([

            ]);
            JSON.parse(localStorage.getItem("collaterals")).forEach(
                (collateral,index)=>{
                    if(collateral['status'] == 1)
                        this.downloadables.addDownloadable(
                            new DownloadRow(
                                "user"+index
                                ,collateral['title']
                                ,collateral['first_name']
                                ,collateral['last_name']
                                ,collateral['loan_amount']
                                ,collateral['branch'],
                                screen.width-260-100,
                                collateral,collateral['date'])
                        )
                });
            this.addComponent([this.pageTitle, this.downloadables]);
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
            if (screen.width >= 1280){


                this.d1280();
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

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Margin("auto",""),
                Height(screen.height-91,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
    }
    class Pending extends HDivision{
        constructor(frame, title) {
            super("pendcolla");
            pages["/collaterals/"+title.toLowerCase().replace(/\s+/g,'')] = this;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
                Height(1130,'px'),
            ]);
            try{

                frame.addToBody(this);
            }
            catch(e){

            }
            this.pageTitle = Paragraph(this.id+'pT').setTextContent(title+" Collaterals");
            this.pageTitle.addCustomStyle([
                FontSize(18),
                Height(40,'px'),
                FontFamily("Calibri"),
                FontWeight("bold"),
                Padding(0,'px').setLeft().setBottom(30),
                BottomBorder("thin","solid","#"+"337AB7"),
                Color("337AB7")

            ]);

            this.downloadables = new Downloadables(this.id+"_dds").addCustomStyle([

            ]);
            JSON.parse(localStorage.getItem("collaterals")).forEach(

                (collateral,index)=>{
                    if(collateral['status'] == 0)
                        this.downloadables.addDownloadable(
                            new DownloadRow(
                                "user"+index
                                ,collateral['title']
                                ,collateral['first_name']
                                ,collateral['last_name']
                                ,collateral['loan_amount']
                                ,collateral['branch'],
                                screen.width-260-100,
                                collateral,collateral['date'])
                        )
                });
            this.addComponent([this.pageTitle, this.downloadables]);
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
            if (screen.width >= 1280){


                this.d1280();
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

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Margin("auto",""),
                Height(800,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
    }
    class All extends HDivision{
        constructor(frame,title) {
            super("allcolla");
            pages["/collaterals/"+title.toLowerCase().replace(/\s+/g,'')] = this;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
                Height(1130,'px'),
            ]);
            try{
                frame.addToBody(this);
            }
            catch(e){

            }
            this.pageTitle = Paragraph(this.id+'pT').setTextContent(title+" Collaterals");
            this.pageTitle.addCustomStyle([
                FontSize(18),
                Height(40,'px'),
                FontFamily("Calibri"),
                FontWeight("bold"),
                Padding(0,'px').setLeft().setBottom(30),
                BottomBorder("thin","solid","#"+"337AB7"),
                Color("337AB7")

            ]);

            this.downloadables = new Downloadables(this.id+"_dds").addCustomStyle([

            ]);
            JSON.parse(localStorage.getItem("collaterals")).forEach(
                (collateral,index)=>{
                    if(collateral['status'] == 1)
                        this.downloadables.addDownloadable(
                            new DownloadRow(
                                "user"+index
                                ,collateral['title']
                                ,collateral['first_name']
                                ,collateral['last_name']
                                ,collateral['loan_amount']
                                ,collateral['branch'],
                                screen.width-260-100,
                                collateral,collateral['date'])
                        )
                });
            this.addComponent([this.pageTitle, this.downloadables]);
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
            if (screen.width >= 1280){


                this.d1280();
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

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Margin("auto",""),
                Height(800,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
    }
    class Declined extends HDivision{
        constructor(frame, title) {
            super("deccolla");
            pages["/collaterals/"+title.toLowerCase().replace(/\s+/g,'')] = this;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
                Height(1130,'px'),
            ]);
            try{

                frame.addToBody(this);
            }
            catch(e){

            }
            this.pageTitle = Paragraph(this.id+'pT').setTextContent(title+" Collaterals");
            this.pageTitle.addCustomStyle([
                FontSize(18),
                Height(40,'px'),
                FontFamily("Calibri"),
                FontWeight("bold"),
                Padding(0,'px').setLeft().setBottom(30),
                BottomBorder("thin","solid","#"+"337AB7"),
                Color("337AB7")

            ]);

            this.downloadables = new Downloadables(this.id+"_dds").addCustomStyle([

            ]);
            JSON.parse(localStorage.getItem("collaterals")).forEach(
                (collateral,index)=>{
                    if(collateral['status'] == 2)
                        this.downloadables.addDownloadable(
                            new DownloadRow(
                                "user"+index
                                ,collateral['title']
                                ,collateral['first_name']
                                ,collateral['last_name']
                                ,collateral['loan_amount']
                                ,collateral['branch'],
                                screen.width-260-100,
                                collateral,collateral['date'])
                        )
                });
            this.addComponent([this.pageTitle, this.downloadables]);
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
            if (screen.width >= 1280){


                this.d1280();
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

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Margin("auto",""),
                Height(800,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
    }
    class Released extends HDivision{
        constructor(frame, title) {
            super("relcolla");
            pages["/collaterals/"+title.toLowerCase().replace(/\s+/g,'')] = this;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
                Height(1130,'px'),
            ]);
            try{
                frame.addToBody(this);
            }
            catch(e){

            }
            this.pageTitle = Paragraph(this.id+'pT').setTextContent(title+" Collaterals");
            this.pageTitle.addCustomStyle([
                FontSize(18),
                Height(40,'px'),
                FontFamily("Calibri"),
                FontWeight("bold"),
                Padding(0,'px').setLeft().setBottom(30),
                BottomBorder("thin","solid","#"+"337AB7"),
                Color("337AB7")

            ]);

            this.downloadables = new Downloadables(this.id+"_dds").addCustomStyle([

            ]);
            JSON.parse(localStorage.getItem("collaterals")).forEach(
                (collateral,index)=>{
                    if(collateral['status'] == 3)
                        this.downloadables.addDownloadable(
                            new DownloadRow(
                                "user"+index
                                ,collateral['title']
                                ,collateral['first_name']
                                ,collateral['last_name']
                                ,collateral['loan_amount']
                                ,collateral['branch'],
                                screen.width-260-100,
                                collateral,collateral['date'])
                        )
                });
            this.addComponent([this.pageTitle, this.downloadables]);
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
            if (screen.width >= 1280){


                this.d1280();
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

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Margin("auto",""),
                Height(800,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
    }

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
                    Color("FFFFFF"),
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
    class NotificationItem extends HDivision{
        sender;
        receiver;
        body;
        date;
        message;
        collateral;
        parent;
        iconNew;
        constructor(id, message,parent) {
            super(id);
            this.addCustomStyle([
                Position(),
                Width(400,'px'),
                Height(60,'px'),
                Padding(0,'px').setTop(5).setBottom(5),
                BackgroundColor("337Ab7"),
                Margin(0,'px').setBottom(0.5)
            ]);

            this.parent =parent;
            this.message=message;
            this.collateral=collaterals[message['collateral']];
            console.log(this.collateral);
            console.log(this.message);
            this.addMouseListener(this);
            let iconP = Division(this.id+"iconP");
            let iconS = Division(this.id+"iconS");
            let iconR = Division(this.id+"iconR");
            let iconD = Division(this.id+"iconD");
            let icon = new HIcon(this.id+"icon", ["fa","fa-bell","fa-2x"]);
            let iconSS = new HIcon(this.id+"iconSS", ["fa","fa-share"]);
            let iconRR = new HIcon(this.id+"iconRR", ["fa","fa-bell"]);
            let iconDD = new HIcon(this.id+"iconDD", ["fa","fa-clock-o"]);
            let iconNew = new HParagraph(this.id+"iconNew").setTextContent("New");
            this.sender = Paragraph(this.id+"sender");
            this.receiver = Paragraph(this.id+"receiver");
            this.body = Paragraph(this.id+"body");
            this.date = Paragraph(this.id+"date");
            iconP.addCustomStyle([
                Width(30,'px'),
                Height(60,'px'),
                Float("left"),
                Color("FFFFFF"),
            ]);
            iconS.addCustomStyle([
                Width(120,'px'),
                Height(20,'px'),
                Float("left"),
                Overflow("hidden"),
                Color("FFFFFF"),
            ]);
            iconR.addCustomStyle([
                Width(120,'px'),
                Height(20,'px'),
                Float("left"),
                Overflow("hidden"),
                Color("FFFFFF"),
            ]);
            iconD.addCustomStyle([
                Width(120,'px'),
                Height(20,'px'),
                Float("left"),
                Overflow("hidden"),
                Color("FFFFFF"),
            ]);
            iconSS.addCustomStyle([
                Float("left")
            ]);
            iconRR.addCustomStyle([
                Float("left")
            ]);
            iconDD.addCustomStyle([
                Float("left")
            ]);
            iconNew.addCustomStyle([
                Width(40,'px'),
                Height(15,'px'),
                Position("absolute"),
                PositionRight(5,'px'),
                PositionTop(0,'px'),
                FontSize(9,'pt'),
                Margin(0,'px'),
                Padding(0,'px').setTop(2),
                BorderRadius(5,'px'),
                TextAlignment("center"),
                BackgroundColor("e1ad01"),
                Color("FFFFFF"),
                Display("none")
            ]);
            if(message['rread'] == 0)
                iconNew.addCustomStyle([
                    Display("block")
                ]);
            this.body.addCustomStyle([
                Width(360,'px'),
                FontSize(10,'pt'),
                Height(30,'px'),
                Padding(0,'px').setLeft(20),
                Margin(0,'px').setLeft(15).setBottom(10),
                Color("FFFFFF"),
            ]);
            icon.addCustomStyle([]);
            this.sender.addCustomStyle([
                Width(90,'px'),
                Height(20,'px'),
                FontSize(10,'pt'),
                Float("left"),
                Margin(0,'px').setLeft(5).setBottom(2),
                Color("FFFFFF"),
            ]);
            this.receiver.addCustomStyle([
                Width(90,'px'),
                Height(20,'px'),
                Float("left"),
                FontSize(10,'pt'),
                Margin(0,'px').setLeft(5).setBottom(2),
                Color("FFFFFF"),
            ]);
            this.date.addCustomStyle([
                Width(90,'px'),
                Height(20,'px'),
                FontSize(10,'pt'),
                Float("left"),
                Margin(0,'px').setLeft(5).setBottom(2),
                Color("FFFFFF"),
            ]);

            this.sender.setTextContent(message['sender']);
            this.receiver.setTextContent(message['receiver']);
            this.body.setTextContent(message['body']);
            this.date.setTextContent(message['date']);

            iconP.addComponent(icon);
            iconS.addComponent([iconSS, this.sender]);
            iconR.addComponent([iconRR, this.receiver]);
            iconD.addComponent([iconDD, this.date]);
            this.addComponent([
                iconP, this.body, iconS, iconR, iconD,iconNew
            ]);
            this.iconNew =iconNew;
        }
        markRead(){
            let json ={};
            json['id'] = this.message['id'];
            console.log("Id is "+json['id']);
            json =JSON.stringify(json);
            this.parent.addCustomStyle(Height(0,'px'));
            if(this.message['rread'] == 0){
                this.message['rread'] = 1;
                this.parent.decrease();
                this.iconNew.addCustomStyle(Display("none"));
                fetch("core", {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/x-www-form-urlencoded"
                    },
                    body: "type=changeMessageStatus"+"&content="+json
                }).
                then(response => response.json()).
                then((result)=>{
                        if(result['status'] !== 200){
                            console.log("OK")
                            //changeToRead();
                        }
                        else
                            console.log("OK")

                    }
                ).
                catch((e)=> console.error(e));
            }
            CollateralView.display(this.collateral, this.id);


        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    if(e.getSource() === this){
                        this.markRead();
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
            this.addCustomStyle([
                BackgroundColor("337AB7")
            ]);
        }
        mouseOver(e){
            this.addCustomStyle([
                BackgroundColor("193d5b")
            ]);
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }

    class Notifications extends HDivision{
        title;
        count;
        countN;
        clearAll;
        body;
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(400,'px'),
                Width(400,'px'),
                BackgroundColor("FFFFFF"),
                BorderRadius(8,'px'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                ScrollBarWidth()
            ]);
            this.countN = 0;
            notifications.forEach((not)=>{
                if(not['rread'] == 0)
                    this.countN++;
            });
            ntfBtnC.setTextContent(this.countN);
            this.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
            this.title = Paragraph(this.id+"title").setTextContent("Notifications");
            this.body= Division(this.id+'body');
            this.clearAll = Division(this.id+'clearALl');
            let iconCl = new HIcon(this.id+"clear", ["fa","fa-window-close"]);
            let pCL = new Paragraph(this.id+"pCl").setTextContent("Clear All");
            this.count = Paragraph(this.id+"count").setTextContent(this.countN+
                " New");

            this.title.addCustomStyle([
                Width(100),
                Margin(0),
                FontFamily("calibri"),
                Height(30,'px'),
                Padding(5,'px').setTop(10),
                FontSize(11),
                BackgroundColor("FFFFFF"),
                Color("337AB7"),
            ]);
            this.count.addCustomStyle([
                Width(50,'px'),
                Margin(0),
                Overflow("hidden"),
                FontFamily("calibri"),
                Position("absolute"),
                PositionRight(110,'px'),
                PositionTop(5,'px'),
                Height(18,'px'),
                Padding(5,'px').setTop(4),
                BorderRadius(5,'px'),
                FontSize(11),
                Color("FFFFFF"),
                BackgroundColor("337AB7"),
            ]);
            this.count.addMouseListener(this);
            iconCl.addCustomStyle([
                Width(20,'px'),
                Height(18,'px'),
                Margin(0),
                Float("left"),
            ]);
            pCL.addCustomStyle([
                Width(60,'px'),
                Margin(0),
                Overflow("hidden"),
                FontFamily("calibri"),
                Float("left"),
                Height(18,'px'),
                BorderRadius(5,'px'),
                FontSize(11),
                BackgroundColor("FFFFFF"),
                Color("337AB7"),
            ]);
            this.clearAll.addCustomStyle([
                Width(90,'px'),
                Margin(0,'px').setLeft(3),
                Overflow("hidden"),
                FontFamily("calibri"),
                Position("absolute"),
                PositionRight(5,'px'),
                PositionTop(5,'px'),
                Height(18,'px'),
                Padding(5,'px').setTop(6),
                BorderRadius(5,'px'),
                FontSize(11),
                Color("FFFFFF"),
                BackgroundColor("337AB7"),
            ]);
            this.clearAll.addComponent([iconCl,pCL]);
            this.clearAll.addMouseListener(this);
            notifications.forEach((not,index)=>{
                this.body.addComponent(new NotificationItem(this.id+index, not,this))

            });
            this.addComponent([this.title,this.count,this.clearAll, this.body])
        }
        decrease(){
            this.countN--;
            ntfBtnC.setTextContent(this.countN);
            this.count.setTextContent(this.countN+
                " New");
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    if(e.getSource() === this.clearAll){
                        let json ={};
                        json['username'] = user.$userName;
                        json =JSON.stringify(json);
                        fetch("core", {
                            method: 'POST',
                            headers: {
                                'Content-Type': "application/x-www-form-urlencoded"
                            },
                            body: "type=clearAll"+"&content="+json
                        }).
                        then(response => response.json()).
                        then((result)=>{
                                if(result['status'] !== 200){
                                    console.log("OK")
                                    //changeToRead();
                                }
                                else
                                    console.log("OK")

                            }
                        ).
                        catch((e)=> console.error(e));
                        while (this.body.domElement.firstChild) {
                            this.body.domElement.removeChild(this.body.domElement.firstChild);
                        }
                        this.countN--;
                        this.count.setTextContent(0+
                            " New");


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
            if(e.getSource() === this.clearAll){
                this.clearAll.addCustomStyle([
                    BackgroundColor("337AB7")
                ])
            }
            if(e.getSource() === this.count){
                this.count.addCustomStyle([
                    BackgroundColor("337AB7")
                ])
            }
        }
        mouseOver(e){
            if(e.getSource() === this.clearAll){
                this.clearAll.addCustomStyle([
                    BackgroundColor("193d5b")
                ])
            }
            if(e.getSource() === this.count){
                this.count.addCustomStyle([
                    BackgroundColor("193d5b")
                ])
            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class NotificationsPanel extends HDivision{
    }

    class Dashboard  extends HDivision{
        constructor() {
            super('app');
            WINDOW.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Height(100, 'vh'),
                Width(100,'vw'),
                Padding(0),
                Margin (0),
                Overflow('hidden')
            ]);
            this.addCustomStyle([
                Width(100,'vw'),
                Height(100,'vh'),
                Overflow("hidden")
            ]);
            WINDOW.addComponent(this);
            this.retrieveUser();
            window.addEventListener('popstate', () => {
                this.switchToPage2(window.location.pathname)
            });
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
            if (screen.width >= 1280){


                this.d1280();
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
            this.navPanel.addCustomStyle([
                Width(0,'px'),
                Height(100,'%'),
                BackgroundColor(colorScheme.getPrimaryColor()),
                //BackgroundImage("/getDashboardBG"),
                Display("inline"),
                Position(),
                Float("left")
            ]);
            this.mainPanel.addCustomStyle([
                Width(screen.width,'px'),
                Height(800,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Position(),
                Float("left")
            ]);
            //Nav Panel
            this.companyBar.addCustomStyle([
                Width(200,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10)
            ]);
            this.cLogo.addCustomStyle([
                Width(80,'px'),
                Height(80,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setRight(5)
            ]);
            this.cName.addCustomStyle([
                Width(100,'px'),
                Display("inline"),
                Float("left"),
                FontFamily("calibri"),
                FontWeight(700),
                FontSize(11),
                Color(colorScheme.getSecondaryColor())
            ]);

            this.navBar.addCustomStyle([
                Width(190,'px'),
            ]);

            //Main Panel
            this.header.addCustomStyle([
                Width(100),
                Height(90,'px'),
                Overflow("hidden"),
                BackgroundColor("337AB7"),
                BottomBorder("thin")
            ]);

            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Color("FFFFFF"),
                Margin(0, "px").setTop(5).setRight(5).setLeft(20)
            ]);
            this.profileBar.addCustomStyle([
                Width(260,'px'),
                Height(60,'px'),
                Position("fixed"),
                Margin(0,'px').setTop(10),
                Position("relative"),
                Float("right"),
                Color("FFFFFF"),
            ]);
            this.userPic.addCustomStyle([
                Width(70,'px'),
                Height(70,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Position(),
                Float('left')
            ]);
            this.userInfo.addCustomStyle([
                Height(50,'px'),
                Width(130, 'px'),
                FontFamily("calibri"),
                Display("inline"),
                FontWeight(FONTWEIGHT.BOLD),
                FontSize(11,'pt'),
                Position(),
                Float('left')
            ]);

            this.userName.addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()
            ]);
            this.setP.addCustomStyle([
                Margin(0,'px').setTop(2),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()

            ]);
            this.logOut.addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()
            ]);
            this.buttonsBar.addCustomStyle(
                [
                    Width(500,'px'),
                    Height(40,'px'),
                    Overflow("hidden"),
                    Margin(0,'px'),
                    Float("left"),
                ]
            );
            this.btnCreateColl.addCustomStyle([
                Position("fixed"),
                PositionTop(70,'px'),
                PositionRight(20,'px'),
                Float("left"),
                FontWeight("bold"),
                Margin(10,'px').setTop(40)
            ]);

            //Body
            this.body.addCustomStyle([
                Width(100),
                Height(screen.height-91,'px')
            ]);

            //Footer
            this.footer.addCustomStyle([
                Width(100),
                Height(80,'px'),
                Overflow("hidden"),
                Position("fixed"),
                PositionBottom(0,'px'),
            ]);
            this.balBox.addCustomStyle([
                Position("absolute"),
                PositionRight(500,'px'),
                PositionBottom(0)

            ]);
        }
        d1280(){

        }
        d1024(){

        }
        d768(){

        }
        d540(){

        }
        d414(){

        }
        d375(){

        }
        d360(){

        }
        d320(){

        }

        initNavWS(){
            this.navigation = Division('navigation');

            let home = new NavLink("home", "Dashboard","/dashboard",this, 80);
            this.servicesN = new NavLink("servicesN", "Collaterals","/collaterals",this, 160);
            let links = [];
            let w1 = 0;
            let h1 = 0;

            if(user.$role === "Director" || user.$role === "Credit"){
                links = [
                    new NavLinkDD("allNL", "Active","/collaterals/active",this, 140),
                    new NavLinkDD("pendNL", "Pending","/collaterals/pending",this, 140),
                    new NavLinkDD("relNL", "Released","/collaterals/released",this, 140),
                    new NavLinkDD("decNL", "Declined","/collaterals/declined",this, 140),
                ];
                w1 =180;
                h1=160;
            }
            else{
                links = [
                    new NavLinkDD("allNL", "Active","/collaterals/active",this, 140),
                ];
                w1 =180;
                h1=40;
            }
            this.servicesDD = new NavDropDown('servicesDrop',
                links,this,w1,h1);
            this.servicesDD.addCustomStyle(ZIndex(30000));
            this.servicesN.addMouseListener(this);
            this.servicesN.addComponent(this.servicesDD);

            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(0).setLeft(10),
                Margin(0,'px').setTop(0).setLeft(800).setRight(18),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.navigation.addComponent([home,this.servicesN])


        }
        init(){
            //Top Panels
            this.loader = new Loader();

            this.navPanel = Division('navPanel');
            this.mainPanel=Division("mainPanel");
            //Nav Panel
            this.companyBar = Division("cBar");
            this.cLogo = Division("cLogo");
            this.cName = Paragraph("cName").setTextContent("AMMIL Microfinance Bank");
            this.navBar= Division('navBar');

            this.navDashboard= new NavButton('navDashboard','Dashboard',accIcon,null, "/dashboard",this);
            this.navCollaterals = new NavButton('navColla','Collaterals',accIcon,null, "/dashboard/collaterals",this);
            this.navReleased = new NavButton('navBranches','Branches',loanIcon,null, "/dashboard/branches",this);
            this.navDeclined = new NavButton('navBranches','Branches',loanIcon,null, "/dashboard/branches",this);

            this.navBar.addComponent([
                this.navDashboard,this.navCollaterals,this.navReleased, this.navDeclined ]);


            this.navPanel.addComponent([
                this.companyBar, this.navBar]);

            //Main Panel
            this.header = Division("header");
            this.profileBar = Division("pBar");
            this.userPic = Division("userPic");
            this.userInfo = Division("userInfo");
            this.logoImage= new HImage("image_"+this.id, "/getLogo","");
            this.logoText = Paragraph('logoText').setTextContent("AmmilMFI");

            this.userName = Paragraph('userName').setTextContent(this.user.$lastName+" "+this.user.$firstName);
            this.setP = Paragraph('setP').setTextContent("Settings");
            this.logOut = Paragraph('logOut').setTextContent("Log Out");
            this.userInfo.addComponent([this.userName,this.setP,this.logOut]);
            this.profileBar.addComponent([this.userPic, this.userInfo]);

            this.initNavWS();
            this.buttonsBar = Division("bBar");
            this.btnCreateColl = new GenButtonRounded("btnCreateColl","New Collateral", 100,ECS.getSuccess(),
                ECS.getSuccessDark());
            this.btnCreateColl.addMouseListener(this);


            if(user.$role === "Director" || user.$role === "Credit") {
                this.buttonsBar.addComponent([
                    this.btnCreateColl
                ]);
            }
            this.notice = new NoticeM('notice', "Please note that only documents stored in the PDF format can be uploaded.",600);
            this.header.addComponent([
                this.logoText,this.buttonsBar,this.notice,this.profileBar, this.navigation
            ]);

            this.logOut.addMouseListener(this);
            //Body
            this.body = Division('bodyM').addCustomStyle(OverflowY("scroll"));

            //Footer
            this.footer = Division("footer").addCustomStyle([ZIndex(1000),
                BackgroundColor(colorScheme.getTertiaryColor()
                )]);
            this.navPanel.domElement.style.boxShadow="20px -1px 50px 0 rgba(255, 255, 255, 0.3)";
            this.header.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
            this.footer.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
            this.balBox = new BalanceBox("bBox");
            this.footer.addComponent(this.balBox);

            this.mainPanel.addComponent([
                this.loader,this.header,this.body
            ]);
            this.roleP = Paragraph(this.id+"roleP").setTextContent("Role: "+this.user.$role);
            this.roleP.addCustomStyle([
                FontFamily("calibri"),
                Position("fixed"),
                PositionBottom(-10,'px'),
                PositionRight(25,'px')
            ]);
            this.addComponent([
                this.navPanel,this.mainPanel,this.roleP
            ]);
            this.initPagesWS();
        }

        initPagesWS(){
            this.index = new Index(this);
            this.collaterals = new Collaterals(this);
            this.allCollaterals = new All(this,"Active");
            this.pendingCollaterals = new Pending(this,"Pending");
            this.declinedCollaterals = new Declined(this,"Declined");
            this.releasedCollaterals = new Released(this,"Released");
            this.isOpen = false;
            ntfBtn = new HIcon("ntfBtn", ["fa", "fa-bell","fa-lg"]);
            ntfBtnC = new HIcon("ntfBtnC", [], "0");
            this.notifications = new Notifications("ntfs");
            ntfBtn.addMouseListener(this);
            this.addMouseListener(this);

            this.notifications.addCustomStyle([
                Height(0,'px'),
                Transition(),
                Position("fixed"),
                PositionTop(25,'px'),
                PositionRight(320,'px'),
                ZIndex(888888888)
            ]);
            ntfBtn.addCustomStyle([
                Color(ECS.getDanger()),
                Position("fixed"),
                PositionRight(300,'px'),
                PositionTop(10,'px')
            ]);
            ntfBtnC.addCustomStyle([
                Color("FFFFFF"),
                Position("fixed"),
                Width(15,'px'),
                Height(15,'px'),
                TextAlignment("center"),
                BorderRadius(100),
                FontSize(9),
                FontFamily("calibri"),
                PositionTop(4,'px'),
                PositionRight(290,'px'),
                BackgroundColor(ECS.getWarning())
            ]);
            WINDOW.addComponent([ntfBtn, ntfBtnC,
                this.notifications]);
            this.body.addComponent([
                this.index, this.collaterals,
            ]);

        }

        addToBody(panel){
            this.body.addComponent(panel)
        }
        async retrieveUser(){
            await this.send({'sk': this.getCookie('sk')},
                async (e)=>{
                    localStorage.setItem("user",e['content']);
                    let content = JSON.parse(e['content']);
                    this.user = new User(
                        content['firstName'],
                        content['lastName'],
                        content['middleName'],
                        content['userName'],
                        content['email'],
                        content['phoneNo'],
                        content['bvn'],
                        content['role']);
                    user = new User(
                        content['firstName'],
                        content['lastName'],
                        content['middleName'],
                        content['userName'],
                        content['email'],
                        content['phoneNo'],
                        content['bvn'],
                        content['role']);
                    await this.send({'sk': this.getCookie('sk')},
                        (e)=>{
                            e['collaterals'].forEach((coll)=>{

                                collaterals[coll['cctimestamp']] =coll;

                            });
                            localStorage.setItem('collaterals',JSON.stringify(e['collaterals']));

                        },
                        (e)=>{
                            window.location.href = "/";
                        },'getCollaterals');

                    await this.send({'sk': this.getCookie('sk')},
                        (e)=>{
                            notifications = e['messages'];
                            localStorage.setItem('messages',JSON.stringify(e['messages']));
                            this.init();
                            let path = window.location.pathname.toLowerCase();
                            this.switchToPage(path);
                            this.componentResized();
                            this.addComponentListener(this);
                        },
                        (e)=>{
                            window.location.href = "/";
                        },'getMessagesR');
                },
                (e)=>{
                    window.location.href = "/";
                },'retrieveUser');
        }

        async send(parameters, func1,func2, type){
            let response = await fetch('/core', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: "type="+type+"&content="+JSON.stringify(parameters)
            });
            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }
        getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }


        switchToPage(path){
            path.replace("localhost","");
            switch (path.toLowerCase().replace(" ","")){
                case "/dashboard":
                {

                    this.refreshBody(this.index,path);
                    break;
                }
                case "/collaterals":
                {
                    this.refreshBody(this.collaterals,path);
                    break;
                }
                case "/collaterals/active":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/collaterals/pending":
                {
                    if(user.$role === "Director" || user.$role === "Credit")
                        this.refreshBody(pages[path],path);
                    else
                        this.refreshBody(this.index,"/dashboard");
                    break;
                }
                case "/collaterals/declined":
                {
                    if(user.$role === "Director" || user.$role === "Credit")
                        this.refreshBody(pages[path],path);
                    else
                        this.refreshBody(this.index,"/dashboard");
                    break;
                }
                case "/collaterals/released":
                {
                    if(user.$role === "Director" || user.$role === "Credit")
                        this.refreshBody(pages[path],path);
                    else
                        this.refreshBody(this.index,"/dashboard");
                    break;
                }

                default:
                {
                    this.refreshBody(this.index,"/dashboard");
                    break;
                }
            }
        }
        switchToPage2(path){
            path.replace("localhost","");
            console.log(path);
            switch (path){
                case "/dashboard":
                {
                    this.refreshBody2(this.index,path);
                    break;
                }
                case "/collaterals":
                {
                    this.refreshBody2(this.collaterals,path);
                    break;
                }
                case "/collaterals/active":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/collaterals/pending":
                {
                    if(user.$role === "Director" || user.$role === "Credit")
                        this.refreshBody2(pages[path],path);
                    else
                        this.refreshBody2(this.index,"/dashboard");
                    break;
                }
                case "/collaterals/declined":
                {
                    if(user.$role === "Director" || user.$role === "Credit")
                        this.refreshBody2(pages[path],path);
                    else
                        this.refreshBody2(this.index,"/dashboard");
                    break;
                }
                case "/collaterals/released":
                {
                    if(user.$role === "Director" || user.$role === "Credit")
                        this.refreshBody2(pages[path],path);
                    else
                        this.refreshBody2(this.index,"/dashboard");
                    break;
                }

                default:
                {
                    this.refreshBody2(this.index,"/dashboard");
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
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
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
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    //history.pushState({}, title, path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, "http://ammilbank.com"+path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)

                }
            }
        }

        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    if(e.getSource() === this){

                        this.notifications.addCustomStyle([
                            Height(0,'px')
                        ])
                    }
                    else
                    if(e.getSource() === ntfBtn){
                        if(!this.isOpen)
                        {
                            console.log("kfhks");
                            this.notifications.addCustomStyle([
                                Height(400,'px')
                            ]);
                            this.isOpen = true;

                        }
                        else
                        {
                            this.notifications.addCustomStyle([
                                Height(0,'px')
                            ]);
                            this.isOpen = false;
                        }

                    }
                    else
                    if (e.getSource() === this.logOut){
                        console.log(pages);
                        document.cookie = "sk=";
                        location.reload();
                    }
                    else
                        try{
                            e.getWindowEvent().preventDefault();
                            this.switchToPage(e.getSource().getLink())
                        }
                        catch(ex){

                        }

                    if (e.getSource() === this.btnCreateColl){
                        let userForm =UserForm.createForm();
                        this.addComponent(userForm);
                        userForm.show();
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
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    Color(colorScheme.getPrimaryColor())
                ]);
                e.getSource().domElement.style.boxShadow="0px 0px 0px 0 rgba(0, 0, 0, 0.25)," +
                    "0px 0px 0px 0 rgba(255, 255, 255, 0.3)";
            }
        }
        mouseOver(e){

            if(e.getSource() instanceof NavLinkDD){
                e.getSource().domElement.style.boxShadow="0px 0px 0px 0 rgba(0, 0, 0, 0.25)," +
                    "0px 0px 0px 0 rgba(255, 255, 255, 0.3)";
            }
            if(e.getSource() instanceof NavLinkDD){
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

        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    new Dashboard();

})();