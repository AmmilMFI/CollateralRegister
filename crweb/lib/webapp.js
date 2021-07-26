
(() => {

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

        constructor($firstName, $lastName, $middleName, $userName, $email, $phoneNo, $bvn) {
            this.$firstName = $firstName;
            this.$lastName = $lastName;
            this.$middleName = $middleName;
            this.$userName = $userName;
            this.$email = $email;
            this.$phoneNo = $phoneNo;
            this.$bvn = $bvn;
        }


    }

    class BarChart extends HDivision{
        constructor(id,width,height, title="", labels=[], values=[], borderWidth=1) {
            super(id);
            this.canvas = new HCanvas(this.id+"_cvs");
            this.addComponent(this.canvas);
            this.addCustomStyle([
                Display("inline"),
                Float("left"),
                Margin(0,'px').setTop(10)
            ]);
            this.canvas.addCustomStyle([
                Display("block")
            ]);
            this.chart = new Chart(this.canvas.get2DContext(),
                {
                    type: 'bar',
                    data: {},
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: title
                            }
                        }
                    }
                }
            );
            this.chart.render();
            this.set(title,labels,values,borderWidth);
            //this.setDimensions(width,height);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(){
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
            this.addCustomStyle([
                Width((screen.width-260)/2,'px'),
                Height((screen.width-260)/4,'px'),
            ]);

        }
        d1566(){

            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1536(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);


        }
        d1366(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d1024(){
            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);

        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        setDimensions(width, height){
            this.canvas.width=width;
            this.canvas.height=height;
            this.chart.resize(width,height);
            this.repaint();
        }
        set(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                this.chart.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                this.chart.data.datasets=datasets;
                this.revalidate();
            }
            else throw new Error("Object not of type Array")
        }
        formDataSet(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                let data = {
                    type: 'bar',

                    data:{


                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: title
                            }
                        },
                    }};
                data.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                data.data.datasets = datasets;
                return data;
            }
            else throw new Error("Object not of type Array")
        }

        revalidate(){
            this.chart.update('active');
        }
        repaint(){
            this.chart.render();
        }
        stop(){
            this.chart.stop()
        }
        clear(){
            this.chart.clear();
        }
        getImage(){
            this.chart.toBase64Image();
        }
        setVisibility(index, visibility){
            this.chart.setDatasetVisibility(index, visibility);
            this.chart.update();
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
                Color(ECS.getDangerDark()),
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
    class LineChart extends HDivision{
        constructor(id,width,height, title="", labels=[], values=[], borderWidth=1) {
            super(id);
            this.canvas = new HCanvas(this.id+"_cvs");
            this.addCustomStyle([
                Display("inline"),
                Float("left"),
                Margin(0,'px').setTop(10)
            ]);
            this.addComponent(this.canvas);
            this.canvas.addCustomStyle([
                Display("block")
            ]);
            this.chart = new Chart(this.canvas.get2DContext(),
                {
                    type: 'line',
                    data: {},
                    options: {
                        responsive: true,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        stacked: false,
                        plugins: {
                            title: {
                                display: true,
                                text: title
                            }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',

                                // grid line settings
                                grid: {
                                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                                },
                            },
                        }
                    }
                }
            );
            this.chart.render();
            this.set(title,labels,values,borderWidth);
            //this.setDimensions(width,height);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(){
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
            this.addCustomStyle([
                Width((screen.width-260)/2,'px'),
                Height((screen.width-260)/4,'px'),
            ]);

        }
        d1566(){

            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1536(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);


        }
        d1366(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d1024(){
            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);

        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        setDimensions(width, height){
            this.canvas.width=width;
            this.canvas.height=height;
            this.chart.resize(width,height);
            this.repaint();
        }
        set(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                this.chart.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                this.chart.data.datasets=datasets;
                this.revalidate();
            }
            else throw new Error("Object not of type Array")
        }
        formDataSet(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                let data = {
                    type: 'bar',

                    data:{


                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }};
                data.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                data.data.datasets = datasets;
                return data;
            }
            else throw new Error("Object not of type Array")
        }

        revalidate(){
            this.chart.update('active');
        }
        repaint(){
            this.chart.render();
        }
        stop(){
            this.chart.stop()
        }
        clear(){
            this.chart.clear();
        }
        getImage(){
            this.chart.toBase64Image();
        }
        setVisibility(index, visibility){
            this.chart.setDatasetVisibility(index, visibility);
            this.chart.update();
        }
    }
    class PieChart extends HDivision{

        constructor(id,width,height, title="", labels=[], values=[], borderWidth=1) {
            super(id);
            this.canvas = new HCanvas(this.id+"_cvs");
            this.addCustomStyle([
                Display("inline"),
                Float("left"),
                Margin(0,'px').setTop(15)
            ]);
            this.addComponent(this.canvas);
            this.canvas.addCustomStyle([
                Display("block")
            ]);
            this.chart = new Chart(this.canvas.get2DContext(),
                {
                    type: 'polarArea',
                    data: {},
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: title
                            }
                        }
                    }
                }
            );
            this.chart.render();
            this.set(title,labels,values,borderWidth);
            //this.setDimensions(width,height);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(){
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
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);

        }
        d1566(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);

        }
        d1536(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);


        }
        d1366(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);

        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d1024(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);

        }
        d768(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d540(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d414(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d375(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d360(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d320(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        setDimensions(width, height){
            this.canvas.width=width;
            this.canvas.height=height;
            this.chart.resize(width,height);
            this.repaint();
        }
        set(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                this.chart.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                this.chart.data.datasets=datasets;
                this.revalidate();
            }
            else throw new Error("Object not of type Array")
        }
        formDataSet(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                let data = {
                    type: 'bar',

                    data:{


                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }};
                data.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                data.data.datasets = datasets;
                return data;
            }
            else throw new Error("Object not of type Array")
        }

        revalidate(){
            this.chart.update('active');
        }
        repaint(){
            this.chart.render();
        }
        stop(){
            this.chart.stop()
        }
        clear(){
            this.chart.clear();
        }
        getImage(){
            this.chart.toBase64Image();
        }
        setVisibility(index, visibility){
            this.chart.setDatasetVisibility(index, visibility);
            this.chart.update();
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
    class ListItem extends HDivision{
        constructor(id,title, bal) {
            super(id);
            this.addCustomStyle(
                [
                    Width(100),
                    Height(40,'px'),
                    FontFamily("calibri"),
                    Overflow("hidden"),
                    Margin(0,'px').setBottom(5).setLeft(20)
                ]
            );
            this.addMouseListener(this);
            this.item = Paragraph(this.id+"_item").addCustomStyle([
                FontWeight(500),
                Margin(0,'px').setTop(5),
                FontSize(10,'pt'),
                Height(20,'px'),
                Overflow("hidden")

            ]).setTextContent(title);
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                FontWeight(300),
                Margin(0,'px'),
                FontStyle("italic"),
                FontSize(9,'pt'),
            ]).setTextContent(bal);

            this.addComponent([
                this.item,this.date
            ])
        }

        getItem(){
            return this.item.getTextContent();
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
            this.item.addCustomStyle([
                Color("000000")
            ])
            this.date.addCustomStyle([
                Color("000000")
            ])
        }
        mouseOver(e){
            this.item.addCustomStyle([
                Color(colorScheme.getPrimaryColor())
            ])
            this.date.addCustomStyle([
                Color(colorScheme.getPrimaryColor())
            ])
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class ListBox extends HDivision{
        constructor(id,title="Loans") {
            super(id);
            this.addCustomStyle([
                Height(250,'px'),
                Width(300,'px'),
                Overflow("hidden"),
                Margin(0,'px').setLeft(30).setTop(20),
                Float("left"),
                Position("relative"),
                Border("thin","solid","#"+colorScheme.getQuaternaryColor()),
                BorderRadius(5,'px')
            ])
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(300,'px'),
                Height(40*8,'px'),
                Position(),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ])
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(300,'px'),
                Height(180,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ])
            this.center.addComponent(this.container)
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Height(40,'px'),
            ]);
            this.title =Paragraph(this.id+"_title").setTextContent(title).addCustomStyle(
                [
                    Position(),
                    PositionTop(10,'px'),
                    Display("inline"),
                    FontFamily("calibri"),
                    FontSize(14,'pt'),
                    Padding(0,'px').setLeft(15).setRight(15),
                ]
            )
            this.top.addComponent([this.title]);
            this.bottom = Division(this.id+"_bottom").addCustomStyle([
                Width(100),
                Height(30,'px'),
                Position("absolute"),
                PositionBottom(0)
            ]);
            this.text1 = Paragraph(this.id+"t1").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(10),
                Float("right")

            ]).setTextContent("More...")
            this.pos = Division(this.id+"_posD").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Margin(0,'px').setLeft(200),
                Display("inline")
            ])
            this.pos.addComponent([this.text1])

            this.bottom.addComponent([this.pos])

            this.addComponent([
                this.top,this.center,this.bottom
            ])
        }

        addItem(item){
            this.container.addComponent(item)
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
    class Collaterals extends HDivision{

        constructor(frame) {
            super("collaterals");
            this.frame = frame;

        }
    }

    class Branches extends HDivision{

        constructor(frame) {
            super("branches");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

        }
    }

    class PayBillsAirtime extends HDivision{

        constructor(frame) {
            super("payBillsAirtime");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

        }
    }

    class MyLoans extends HDivision{

        constructor(frame) {
            super("myLoans");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

        }
    }

    class Settings extends HDivision {

        constructor(frame) {
            super("settings");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

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
                    await fetch("upload", {
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
                    PositionTop(10,'vh'),
                    PositionLeft(10,'vw'),
                    OverflowY("scroll"),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BorderRadius(15,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]
            );
            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.closeIcon = new HIcon(this.id+"_close",["fa","fa-times-circle", "fa-lg"]).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("fixed"),
                Color(ECS.getDanger()),
                PositionTop(9.5,'vh'),
                PositionLeft(89.3,'vw'),
            ]);
            this.closeIcon.addMouseListener(this);
            this.formBox = Division(this.id+"formBox").addCustomStyle([
                Width(80),
                Overflow("hidden"),
                Margin("auto","")
            ]);

            this.titleP = Paragraph(this.id+'title').setTextContent("Upload New Collateral");
            this.titleP.addCustomStyle([
                FontSize(18),
                FontFamily("calibri"),
                Padding(0,'px').setLeft(20),
                BackgroundColor("D9EDF7"),
                Margin(0,'px').setBottom(10),
                Color("337AB7"),
                FontWeight("bold"),
                Padding(0,'px').setLeft(20).setBottom(10).setTop(8),
                BorderRadius(5,'px')
            ]);
            this.title = new FancyInput(this.id+"title87","Title","text");
            this.firstname = new FancyInput(this.id+"firstname","First Name","text");
            this.middlename = new FancyInput(this.id+"middlename","Middle Name","text");
            this.lastname = new FancyInput(this.id+"lastname","Last Name","text");
            this.comments = new FancyInput2(this.id+"comments","Comments");
            this.branch = new FancyInput(this.id+"branch","Branch","text");

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
            this.comments.getInput().addDocumentListener(this);

            this.fnValid= false;
            this.lnValid= false;
            this.titleValid= false;

            this.formBox.addComponent([

                this.title,this.firstname,this.middlename,this.lastname,
                this.comments, this.closeIcon
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
        inputsValid(){
            return this.collAdd.isUploaded() && this.titleValid && this.fnValid && this.lnValid ;
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
            let user =JSON.parse(localStorage.getItem('user'));
            json['first_name']=this.firstname.getInput().getInputText();
            json['middle_name']=this.middlename.getInput().getInputText();
            json['last_name']=this.lastname.getInput().getInputText();
            json['title']=this.title.getInput().getInputText();
            json['comments']=this.comments.getInput().getInputText();
            json['uploader']= user['firstName'] + " " + user['lastName'];
            json['branch'] = user['branch'];
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
                    Width(80),
                    Height(850,'px'),
                    Display("block"),
                    Margin("auto",""),
                    Padding(0,'px').setTop(50),
                    Position("relative")],
                Border("thin","solid","#"+"D9EDF7")
            );
            this.title = Paragraph(this.id+"title").setTextContent(title).addCustomStyle([
                Width(100),
                Height(20,'px'),
                Margin(0),
                BackgroundColor("D9EDF7"),
                FontFamily("calibri"),
                Padding(0,'px').setTop(10).setBottom(10).setLeft(5),
                Color("337AB7"),
            ]);
            this.addComponent([this.title,new PDFViewer2(id+"a", src)])
        }
    }
    class CollateralView extends HDivision{
        constructor(id, collateral) {
            super(id);
            this.addCustomStyle(
                [
                    Width(90,'vw'),
                    Height(90,'vh'),
                    Position("fixed"),
                    PositionTop(5,'vh'),
                    PositionLeft(5,'vw'),
                    OverflowY("scroll"),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BorderRadius(15,'px'),
                    Border("thin","solid","#"+"D9EDF7"),
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]
            );
            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.titleP = Paragraph(this.id+'title').setTextContent(collateral['title']);
            this.titleP.addCustomStyle([
                FontSize(18),
                FontFamily("calibri"),
                BackgroundColor("D9EDF7"),
                Margin(0,'px').setBottom(10),
                Color("337AB7"),
                FontWeight("bold"),
                Padding(0,'px').setLeft(20).setBottom(10).setTop(8),
                BorderRadius(5,'px'),
                BackgroundColor("D9EDF7"),
                Margin(0,'px').setBottom(10),
                Color("337AB7"),
                FontWeight("bold"),
                Padding(0,'px').setLeft(20).setBottom(10).setTop(8),
                BorderRadius(5,'px')
            ]);
            this.collInfo = Division(this.id+"collInfo").addCustomStyle([
                Width(80),
                Margin("auto",""),
                BorderRadius(5,'px'),
                Border("thin","solid","#"+"D9EDF7"),
                Height(380,'px'),
                ScrollBarWidth(),
                OverflowY("scroll"),
                OverflowX("hidden"),
            ]);
            this.collITitle = Paragraph(this.id+'Ititle').setTextContent("COLLATERAL INFO").addCustomStyle([
                Width(100),
                Height(20,'px'),
                Margin(0),
                BackgroundColor("D9EDF7"),
                FontFamily("calibri"),
                FontWeight("bold"),
                Padding(0,'px').setTop(10).setBottom(10).setLeft(5),
                Color("337AB7"),
            ]);
            this.fN = new FancyView(this.id+"fN","First Name",collateral['first_name']);
            this.lN = new FancyView(this.id+"lN","Last Name",collateral['last_name']);
            this.mN = new FancyView(this.id+"mN","Middle Name",collateral['middle_name']);
            this.uploader = new FancyView(this.id+"uploader","Handler",collateral['uploader']);
            this.branch = new FancyView(this.id+"branch","Branch",collateral['branch']);
            this.date = new FancyView(this.id+"date","Date",collateral['date']);
            this.comments = new FancyView(this.id+"comments","Comments",collateral['comments']);

            this.closeIcon = new HIcon(this.id+"_close", ["fa","fa-times-circle", "fa-lg"]).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("fixed"),
                Color(ECS.getDanger()),
                BackgroundColor("FFFFFF"),
                PositionTop(4.5,'vh'),
                PositionLeft(94.5,'vw'),
            ]);
            this.closeIcon.addMouseListener(this);

            this.collInfo.addComponent([
                this.collITitle,this.fN, this.lN, this.mN, this.uploader, this.branch, this.date, this.comments
            ]);
            this.addComponent([
                this.titleP, this.collInfo,this.closeIcon
            ]);

            JSON.parse(collateral['files']).forEach((file,index)=>{
                console.log(file);
                this.addComponent(new PDFViewer(this.id+"pdf"+index, "/"+file, "Document "+(index+1)))
            });
        }
        static display(collateral){
            WINDOW.addComponent(new CollateralView(this.id+"view",collateral).show());
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

    class DownloadRow extends HDivision{
        constructor(id,title,fn,ln,branch,width, collateral) {
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
                Width(32),
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
            this.branch = Paragraph(this.id+"_branch").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Padding(0,'px').setTop(6),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(branch);

            this.actions= Division(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]);
            this.view = new HAnchor(this.id+'view', "#").setTextContent("View");
            this.view.addCustomStyle([
                BackgroundColor("5CB85C"),
                Border("thin", "solid", "#"+"4cae4c"),
                BorderRadius(4,'px'),
                Padding(0,'px').setTop(6).setLeft(12).setBottom(12).setRight(12),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("FFFFFF"),
                Width(80,'px'),
                TextDecoration("none"),
                FontFamily("calibri"),
                TextAlignment("center"),
                Height(12,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.view.addMouseListener(this);
            this.actions.addComponent([
                this.view
            ]);

            this.addComponent([this.title, this.fN,this.lN, this.branch, this.actions]);
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

        mouseClicked(e){

            switch (e.getEvent()) {
                case"click": {

                    if (e.getSource()=== this.view){
                        CollateralView.display(this.collateral)

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
                BackgroundColor(colorScheme.getSecondaryColor()),
                Color("337AB7"),
                BorderRadius(5,'px'),

            ]);
            this.title = Paragraph(this.id+"_title").addCustomStyle([
                Overflow("hidden"),
                Width(32),
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
            this.actions= Paragraph(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]).setTextContent("Actions");
            this.addComponent([this.title,this.fN,this.lN, this.branch, this.actions])
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
                BackgroundColor("D9EDF7")
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
                    this.downloadables.addDownloadable(
                        new DownloadRow(
                            "user"+index
                            ,collateral['title']
                            ,collateral['first_name']
                            ,collateral['last_name']
                            ,collateral['branch'],
                            screen.width-260-100,
                            collateral)
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
                BackgroundColor("FFFFFF"),
                BottomBorder("thin")
            ]);

            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Color("337AB7"),
                Margin(0, "px").setTop(5).setRight(5).setLeft(20)
            ]);
            this.profileBar.addCustomStyle([
                Width(260,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10),
                Position("relative"),
                Float("right"),
                Color("337AB7"),
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
                    Height(100,'px'),
                    Overflow("hidden"),
                    Margin(0,'px'),
                    Position("relative"),
                    Float("left"),
                ]
            );
            this.btnCreateColl.addCustomStyle([
                Position(),
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
            this.navBranches = new NavButton('navBranches','Branches',loanIcon,null, "/dashboard/branches",this);

            this.navBar.addComponent([
                this.navDashboard,this.navCollaterals,this.navBranches ]);


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

            this.buttonsBar = Division("bBar");
            this.btnCreateColl = new GenButtonRounded("btnCreateColl","New Collateral", 100,ECS.getSuccess(),
                ECS.getSuccessDark());
            this.btnCreateColl.addMouseListener(this);

            this.buttonsBar.addComponent([
                this.btnCreateColl
            ]);
            this.notice = new NoticeM('notice', "Please note that only documents stored in the PDF format can be uploaded.",600);
            this.header.addComponent([
                this.logoText,this.buttonsBar,this.notice,this.profileBar
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

            this.addComponent([
                this.navPanel,this.mainPanel
            ]);
            this.initPagesWS();
        }

        initPagesWS(){
            this.index = new Index(this);
            this.collateralsP = new Collaterals(this);
            this.branchesP = new Branches(this);
            this.payBillsAirtimeP = new PayBillsAirtime(this);
            this.myLoansP = new MyLoans(this);
            this.settingsP = new Settings(this);

            this.body.addComponent([
                this.index,
            ]);

        }

        async retrieveUser(){
            await this.send({'sk': this.getCookie('sk')},
                async (e)=>{
                    let content = JSON.parse(e['content']);
                    this.user = new User(
                        content['firstName'],
                        content['lastName'],
                        content['middleName'],
                        content['userName'],
                        content['email'],
                        content['phoneNo'],
                        content['bvn']);
                    await this.send({'sk': this.getCookie('sk')},
                        (e)=>{
                            localStorage.setItem('collaterals',JSON.stringify(e['collaterals']));this.init();
                            let path = window.location.pathname.toLowerCase();
                            this.switchToPage(path);
                            this.componentResized();
                            this.addComponentListener(this);
                        },
                        (e)=>{
                            console.log(e)
                        },'getCollaterals');



                    localStorage.setItem("user",e['content']);

                },
                (e)=>{
                    //window.close();
                    this.addComponent(Paragraph('fdf').setTextContent("HTTP Error 403 – Forbidden"));
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
                case "/dashboard/collaterals":
                {
                    this.refreshBody(this.collateralsP,path);
                    break;
                }
                case "/dashboard/branches":
                {
                    this.refreshBody(this.branchesP,path);
                    break;
                }
                case "/dashboard/paybillsairtime":
                {
                    this.refreshBody(this.payBillsAirtimeP,path);
                    break;
                }
                case "/dashboard/myloans":
                {
                    this.refreshBody(this.myLoansP,path);
                    break;
                }
                case "/dashboard/settings":
                {
                    this.refreshBody(this.settingsP,path);
                    break;
                }

                default:
                {
                    this.refreshBody(this.dashboardP,"/dashboard");
                    break;
                }
            }
        }
        switchToPage2(path){
            path.replace("localhost","");
            switch (path){
                case "/dashboard":
                {
                    this.refreshBody2(this.index,path);
                    break;
                }
                case "/dashboard/collaterals":
                {
                    this.refreshBody2(this.collateralsP,path);
                    break;
                }
                case "/dashboard/branches":
                {
                    this.refreshBody2(this.branchesP,path);
                    break;
                }
                case "/dashboard/paybillsairtime":
                {
                    this.refreshBody2(this.payBillsAirtimeP,path);
                    break;
                }
                case "/dashboard/myloans":
                {
                    this.refreshBody2(this.myLoansP,path);
                    break;
                }
                case "/dashboard/settings":
                {
                    this.refreshBody2(this.settingsP,path);
                    break;
                }

                default:
                {
                    this.refreshBody2(this.dashboardP,"/dashboard");
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

                    if (e.getSource() === this.logOut){
                        document.cookie = "sk=";
                        location.reload();
                    }
                    else
                        try{
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

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    new Dashboard();

})();