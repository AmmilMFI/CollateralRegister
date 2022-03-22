
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
    let ref = {};
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
                    FontWeight(500),
                    FontSize(10,'pt'),
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
                    BackgroundColor(colorScheme.getSecondaryColor())
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

            this.container.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.image = Division(this.id+"_Idiv").addCustomStyle([
                    Position("relative"),
                    Width(350,'px'),
                    Height(400,'px'),
                    BackgroundImage("/getBackground3.jpg",true),
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

            ]).setTextContent("Log in");
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
            this.submit = new SubmitButton("btnLogin","Log In", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submit.addMouseListener(this);



            this.toastP = Paragraph(this.id+"_toastP").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");


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



            this.body.addComponent([this.formBox]);
            this.header.addComponent(this.headerTxt);
            this.formBox.addComponent([this.header,this.content]);
            this.content.addComponent([this.labelUN,this.inputUN,this.labelPW,this.inputPW,this.submit]);

            this.container.addComponent([this.image,this.body]);
            this.addComponent(this.container);

            this.inputUN.addDocumentListener(this);
            this.inputPW.addDocumentListener(this);

            this.unLValid= false;
            this.passLValid= false;
            this.checked =false;
        }


        toast(text){
            this.toastP.setTextContent(text);
        }

        enableSubmit(){
            if(this.inputsValid()){
                this.submit.turnOn();
            }
            else{
                this.submit.turnOff();
            }
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

        }

        packageL(){
            let json = {};
            json['username']=this.inputUN.getInputText();
            json['password']=this.inputPW.getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('/usermanager', {
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
                                document.cookie = "lk="+e['lk'];
                                location.reload();

                            }, (e)=>{
                                this.submit.fadeOut();
                                console.error(e);
                                this.addCustomStyle(Display("none"));
                                location.reload();
                                this.toast("Error in Login!")
                            },'login')
                        }
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
    class Register extends HDivision{
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
                    BackgroundColor(colorScheme.getSecondaryColor())
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

            this.container.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.image = Division(this.id+"_Idiv").addCustomStyle([
                    Position("relative"),
                    Width(350,'px'),
                    Height(400,'px'),
                    BackgroundImage("/getBackground3.jpg",true),
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
                Width(330,'px'),
                Height(350,'px'),
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

            ]).setTextContent("Create Admin Account");
            this.content = Division(this.id+"content").addCustomStyle([
                Width(330,'px'),
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
                    Display("inline"),
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
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);

            this.labelPW2 = Label(this.id+"_passwordLR2",this.id+"_passwordR2").setTextContent(" Confirm Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5),
            ]);
            this.inputPW2= Input(this.id+"_passwordR2","password","password2",50,"Confirm Password")
                .addCustomStyle([
                    Height(45,'px'),
                    Width(90),
                    FontFamily("calibri"),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.inputUN.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPW.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPW2.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputUN.addMouseListener(this);
            this.inputPW.addMouseListener(this);
            this.inputPW2.addMouseListener(this);
            this.submit = new SubmitButton("btnRegister","Create Account", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submit.addMouseListener(this);



            this.toastP = Paragraph(this.id+"_toastP").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");


            this.errUN = new HImage("errUNR",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(314,'px'),
                Width(0,'px'),
            ]);
            this.errPs = new HImage("errPsR",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(314,'px'),
                Width(0,'px'),
            ]);
            this.errPsC = new HImage("errPsCR",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(314,'px'),
                Width(0,'px'),
            ]);



            this.body.addComponent([this.formBox]);
            this.header.addComponent(this.headerTxt);
            this.formBox.addComponent([this.header,this.content]);
            this.content.addComponent([
                this.labelUN,this.inputUN,this.errUN,
                this.labelPW,this.inputPW,this.errPs,
                this.labelPW2,this.inputPW2,this.errPsC,
                this.submit]);

            this.container.addComponent([this.image,this.body]);
            this.addComponent(this.container);

            this.inputUN.addDocumentListener(this);
            this.inputPW.addDocumentListener(this);
            this.inputPW2.addDocumentListener(this);

            this.unValid= false;
            this.passValid= false;
            this.checked =false;
        }


        toast(text){
            this.toastP.setTextContent(text);
        }

        enableSubmit(){
            if(this.inputsValid()){
                this.submit.turnOn();
            }
            else{
                this.submit.turnOff();
            }
        }

        async checkUsername(){
            if(this.inputUN.getInputText().length < 4){
                this.errUN.addCustomStyle(Width(12,'px'));
                this.unValid = false;
                this.enableSubmit();
            }
            else{
                this.errUN.addCustomStyle(Width(0,'px'));
                let json = {};
                json['username']=this.inputUN.getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.errUN.addCustomStyle(Width(0,'px'));
                    this.unValid = true;
                    this.enableSubmit();
                }, ()=>{
                    this.errUN.addCustomStyle(Width(12,'px'));
                    this.unValid = false;
                    this.enableSubmit();
                },'checkUsername');
            }
        }
        checkPW(){
            if(this.inputPW.getInputText().length < 8){
                this.passValid = false;
                console.log("hej");
                this.errPs.addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.errPs.addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
            if(this.checked){
                if(this.inputPW.getInputText() !== this.inputPW2.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        checkPW2(){
            if(!this.checked){
                this.checked = true;
            }
            if(this.inputPW2.getInputText().length < 8){
                this.passValid = false;
                this.errPsC.addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                if(this.inputPW.getInputText() !== this.inputPW2.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        inputsValid(){
            return this.unValid && this.passValid;
        }
        documentChanged(e){
            if (e.getSource() === this.inputUN){
                this.checkUsername();
            }
            if (e.getSource() === this.inputPW){
                this.checkPW();
            }
            if (e.getSource() === this.inputPW2){
                this.checkPW2();
            }

        }

        clearInputFieldR(){
            this.inputUN.clearField();
            this.inputPW.clearField();
            this.inputPW2.clearField();
            this.errUN.addCustomStyle(Width(0,'px'));
            this.errPs.addCustomStyle(Width(0,'px'));
            this.errPsC.addCustomStyle(Width(0,'px'));
        }
        packageL(){
            let json = {};
            json['username']=this.inputUN.getInputText();
            json['password']=this.inputPW.getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('/usermanager', {
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
            switch (e.getEvent()){
                case"click":
                {
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
                            },'register')
                        }
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

    let dfhi = arrowRightH.substring(arrowRightH.length-10, arrowRightH.length-2);
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
    class Transfers extends HDivision{

        constructor(frame) {
            super("transfers");
            this.frame = frame;

        }
    }

    class MyAccounts extends HDivision{

        constructor(frame) {
            super("myAccounts");
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
    class DownloadRow extends HDivision{
        constructor(id,fn,ln,branch,position,dept,width,user) {
            super(id);
            this.user=user;
            this.addCustomStyle([
                Width(width,'px'),
                Height(20,'px'),
                FontFamily("segoe ui"),
                Overflow("hidden"),
                FontSize(10,'pt'),
                FontWeight(400),
                Padding(0,'px').setLeft(2).setTop(1),
                FontSize(10,'pt'),
                Transition("border-color", "400ms"),
                Border("thick","solid","#"+colorScheme.getSecondaryColor())

            ]);
            this.fN = Paragraph(this.id+"_fN").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(fn);
            this.lN = Paragraph(this.id+"_lN").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(ln);
            this.branch = Paragraph(this.id+"_branch").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(branch);
            this.position = Paragraph(this.id+"_position").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(position);
            this.dept= Paragraph(this.id+"_dept").addCustomStyle([
                Overflow("hidden"),
                Width(15),
                Margin(0),
                Float("left")
            ]).setTextContent(dept);

            this.actions= Division(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]);
            this.view = new HIcon(this.id+'view', ["fa", "fa-external-link"]);
            this.view.addCustomStyle([
                BackgroundColor(ECS.getPrimary()),
                Padding(0,'px').setTop(3).setLeft(5),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("FFFFFF"),
                Width(20,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.remove = new HIcon(this.id+'remove', ["fa","fa-trash", "fa-lg"]);
            this.remove.addCustomStyle([
                Padding(0,'px').setTop(3).setLeft(5),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("ff0000"),
                Width(20,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.revoke = new HIcon(this.id+'revoke', ["fa", "fa-pencil-square-o"]);
            this.revoke.addCustomStyle([
                BackgroundColor(ECS.getWarningDark()),
                Padding(0,'px').setTop(3).setLeft(5),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("FFFFFF"),
                Width(20,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.actions.addComponent([
                /*this.view,*/this.revoke,this.remove,
            ]);

            this.remove.addMouseListener(this);
            this.revoke.addMouseListener(this);
            this.addComponent([this.fN,this.lN, this.branch, this.position, this.dept, this.actions])
            this.addMouseListener(this);
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
        getPos(){
            return this.position.domElement.textContent;
        }
        getDept(){
            return this.dept.domElement.textContent;
        }

        async send(parameters, func1, func2, type) {
            let response = await fetch('/usermanager', {
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
        mouseClicked(e){
            if (e.getSource() === this.remove)
            {
                let a = confirm("Are you sure you want to delete this user?");
                {}
                if (a === true)
                    this.send({'lk': this.getCookie('lk'),username:this.user['username']}, (e) => {
                        location.reload();

                    }, (e) => {
                        //this.submit.fadeOut();
                        //this.toast("Error making the changes")
                    }, "delUser")

            }
            if (e.getSource() === this.revoke)
            {
                console.log(this.user)
                let modifyForm =UserModifyForm.createForm(this.user["username"], "changeUserPass");
                ref.addComponent(modifyForm);
                modifyForm.show();

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
    class DownloadRow2 extends HDivision{
        constructor(id,fn,ln,width,user) {
            super(id);
            this.user=user;
            this.addCustomStyle([
                Width(width,'px'),
                Height(20,'px'),
                FontFamily("segoe ui"),
                Overflow("hidden"),
                FontSize(10,'pt'),
                FontWeight(400),
                Padding(0,'px').setLeft(2).setTop(1),
                FontSize(10,'pt'),
                Transition("border-color", "400ms"),
                Border("thick","solid","#"+colorScheme.getSecondaryColor())

            ]);
            this.fN = Paragraph(this.id+"_fN").addCustomStyle([
                Overflow("hidden"),
                Width(40),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(fn);
            this.lN = Paragraph(this.id+"_lN").addCustomStyle([
                Overflow("hidden"),
                Width(40),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent(ln);

            this.actions= Division(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]);
            this.view = new HIcon(this.id+'view', ["fa", "fa-external-link"]);
            this.view.addCustomStyle([
                BackgroundColor(ECS.getPrimary()),
                Padding(0,'px').setTop(3).setLeft(5),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("FFFFFF"),
                Width(20,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.remove = new HIcon(this.id+'remove', ["fa","fa-trash", "fa-lg"]);
            this.remove.addCustomStyle([
                Padding(0,'px').setTop(3).setLeft(5),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("ff0000"),
                Width(20,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.revoke = new HIcon(this.id+'revoke', ["fa", "fa-pencil-square-o"]);
            this.revoke.addCustomStyle([
                BackgroundColor(ECS.getWarningDark()),
                Padding(0,'px').setTop(3).setLeft(5),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("FFFFFF"),
                Width(20,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.actions.addComponent([
                /*this.view,this.revoke,*/this.remove,
            ]);

            this.remove.addMouseListener(this);
            this.addComponent([this.fN,this.lN, this.actions]);
            this.addMouseListener(this);
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
        getPos(){
            return this.position.domElement.textContent;
        }
        getDept(){
            return this.dept.domElement.textContent;
        }

        async send(parameters, func1, func2, type) {
            let response = await fetch('/usermanager', {
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
        mouseClicked(e){
            if (e.getSource() === this.remove)
            {
                let a = confirm("Are you sure you want to delete this user?");
                {}
                if (a === true)
                    this.send({'lk': this.getCookie('lk'), staffCode:this.user['staffCode']}, (e) => {
                        location.reload();

                    }, (e) => {
                        //this.submit.fadeOut();
                        //this.toast("Error making the changes")
                    }, "delStaff")

            }``

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
                BackgroundColor(colorScheme.getDenaryColor()),
                Color(colorScheme.getSecondaryColor()),
                BorderRadius(5,'px'),

            ]);
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
            this.position = Paragraph(this.id+"_position").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Position");
            this.dept= Paragraph(this.id+"_dept").addCustomStyle([
                Overflow("hidden"),
                Width(15),
                Margin(0),
                Float("left")
            ]).setTextContent("Department");
            this.actions= Paragraph(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]).setTextContent("Actions");
            this.addComponent([this.fN,this.lN, this.branch, this.position, this.dept, this.actions])
        }
    }
    class DownloadHeader2 extends HDivision{
        constructor(id,width) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(20,'px'),
                FontFamily("segoe ui"),
                FontWeight(500),
                FontSize(10,'pt'),
                Padding(0,'px').setLeft(5).setTop(3),
                BackgroundColor(colorScheme.getDenaryColor()),
                Color(colorScheme.getSecondaryColor()),
                BorderRadius(5,'px'),

            ]);
            this.staffCode = Paragraph(this.id+"_staffCode").addCustomStyle([
                Overflow("hidden"),
                Width(40),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Staff Code");
            this.lN = Paragraph(this.id+"_lN").addCustomStyle([
                Overflow("hidden"),
                Width(42),
                Position(),
                Margin(0),
                Float("left")

            ]).setTextContent("Name");
            this.actions= Paragraph(this.id+"_actions").addCustomStyle([
                Overflow("hidden"),
                Width(17),
                Margin(0),
                Float("left")
            ]).setTextContent("Actions");
            this.addComponent([this.staffCode,this.lN,this.actions])
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
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
            ]);
            this.items=[];
            this.current=0;
            this.position =0;
            this.max = 0;
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(screen.width-260-100,'px'),
                Height(23*18,'px'),
                Position(),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(screen.width-260-100,'px'),
                Height(23*18*5,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ]);
            this.center.addComponent(this.container);
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Height(80,'px')
            ]);
            this.header= new DownloadHeader(this.id+"_hdr",screen.width-260-100).addCustomStyle([
                Position(),
                PositionLeft(50,'px'),
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
            this.max = Math.trunc((this.items.length-count)/18) > 4 ? 4:Math.trunc((this.items.length-count)/18)
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
                if(Helper.KMPSearch(pattern,item.getPos()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getDept()))
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
                this.position = -(18*23) * (index-1);
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
            this.max = Math.trunc((this.items.length+1)/18) > 4 ? 4:Math.trunc((this.items.length+1)/18);
            this.items.push(item);
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
        }

        switch(button){
            if(button === this.leftIcon && this.current > 0){
                this.container.addCustomStyle(PositionTop((this.position +(18*23))));
                this.current--;
                this.position = this.position +(18*23);
                this.textP.setTextContent(this.current+1);
            }
            if(button === this.rightIcon && this.current < this.max){
                this.container.addCustomStyle(PositionTop((this.position -(18*23))));
                this.current++;
                this.position = this.position -(18*23);
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
    class Downloadables2 extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(560,'px'),
                Width(screen.width-260,'px'),
                Overflow("hidden"),
                Margin(0,'px').setLeft(15),
                Position("relative"),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
            ]);
            this.items=[];
            this.current=0;
            this.position =0;
            this.max = 0;
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(screen.width-260-100,'px'),
                Height(23*18,'px'),
                Position(),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(screen.width-260-100,'px'),
                Height(23*18*5,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ]);
            this.center.addComponent(this.container);
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Height(80,'px')
            ]);
            this.header= new DownloadHeader2(this.id+"_hdr",screen.width-260-100).addCustomStyle([
                Position(),
                PositionLeft(50,'px'),
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
            this.max = Math.trunc((this.items.length-count)/18) > 4 ? 4:Math.trunc((this.items.length-count)/18)
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
                this.position = -(18*23) * (index-1);
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
            this.max = Math.trunc((this.items.length+1)/18) > 4 ? 4:Math.trunc((this.items.length+1)/18);
            this.items.push(item);
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
        }

        switch(button){
            if(button === this.leftIcon && this.current > 0){
                this.container.addCustomStyle(PositionTop((this.position +(18*23))));
                this.current--;
                this.position = this.position +(18*23);
                this.textP.setTextContent(this.current+1);
            }
            if(button === this.rightIcon && this.current < this.max){
                this.container.addCustomStyle(PositionTop((this.position -(18*23))));
                this.current++;
                this.position = this.position -(18*23);
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
    class UserForm extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle(
                [
                    Width(80,'vw'),
                    Height(80,'vh'),
                    Position("fixed"),
                    PositionTop(10,'vh'),
                    PositionLeft(10,'vw'),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BorderRadius(15,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]
            );
            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.closeIcon = new HImage(this.id+"_close", closeIcon2).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("fixed"),
                PositionTop(9.5,'vh'),
                PositionLeft(89.3,'vw'),
            ]);
            this.closeIcon.addMouseListener(this);
            this.formBox = Division(this.id+"formBox").addCustomStyle([
                Width(80),
                Overflow("hidden"),
                Margin("auto","")
            ]);

            this.title = Paragraph(this.id+'title').setTextContent("Create New User");
            this.title.addCustomStyle([
                FontSize(18),
                FontFamily("calibri"),
                Padding(0,'px').setLeft(20)
            ]);
            this.firstname = new FancyInput(this.id+"firstname","First Name","text");
            this.middlename = new FancyInput(this.id+"middlename","Middle Name","text");
            this.lastname = new FancyInput(this.id+"lastname","Last Name","text");
            this.username = new FancyInput(this.id+"username","Username","text");
            this.email = new FancyInput(this.id+"email","Email","text");
            this.password = new FancyInput(this.id+"password","Password","password");
            this.password2 = new FancyInput(this.id+"password2","Confirm Password","password");
            this.position = new FancyInput(this.id+"position","Position","text");
            this.dept = new FancyInput(this.id+"dept","Department","text");
            this.branch = new FancyInputSelect(this.id+"branch","Branch","text").addCustomStyle(
                PositionRight(50,"%")
            );
            this.roles = new FancyInputSelect(this.id+"roles","Role","text");
            this.oyo = new DropDownOption(this.id+"oyo", "", "Head Office", true).setTextContent("Head Office");
            this.saki = new DropDownOption(this.id+"saki", "", "Saki", false).setTextContent("Saki");
            this.iwereIle = new DropDownOption(this.id+"iwereIle", "", "Iwere Ile", false).setTextContent("Iwere Ile");
            this.igbeti = new DropDownOption(this.id+"igbeti", "", "Igbeti", false).setTextContent("Igbeti");
            this.ogbomoso = new DropDownOption(this.id+"ogbomoso", "", "Ogbomoso", false).setTextContent("Ogbomoso");
            this.director = new DropDownOption(this.id+"director", "", "Director", false).setTextContent("Director");
            this.credit = new DropDownOption(this.id+"credit", "", "Credit", false).setTextContent("Credit");
            this.basic = new DropDownOption(this.id+"basic", "", "Basic", false).setTextContent("Basic");
            this.branch.input.addComponent([
                this.oyo,
                this.saki,
                this.iwereIle,
                this.igbeti,
                this.ogbomoso,
            ]);
            this.roles.input.addComponent([
                this.basic,
                this.credit,
                this.director,
            ]);

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
            this.username.getInput().addDocumentListener(this);
            this.firstname.getInput().addDocumentListener(this);
            this.lastname.getInput().addDocumentListener(this);
            this.email.getInput().addDocumentListener(this);
            this.position.getInput().addDocumentListener(this);
            this.dept.getInput().addDocumentListener(this);
            this.password.getInput().addDocumentListener(this);
            this.password2.getInput().addDocumentListener(this);

            this.unValid= false;
            this.passValid= false;
            this.fnValid= false;
            this.lnValid= false;
            this.emailValid= false;
            this.posValid= false;
            this.deptValid= false;

            this.formBox.addComponent([
                this.firstname,this.middlename,this.lastname,
                this.username, this.email, this.password,this.password2,
                this.position, this.position,
                this.dept, this.roles,this.branch, this.closeIcon
            ]);
            this.addComponent([
                this.title,
                this.formBox,
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
        checkEmail(){
            if(this.email.getInput().getInputText().length < 1){
                this.emailValid = false;
                this.email.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.emailValid = true;
                this.email.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        checkPosition(){
            if(this.position.getInput().getInputText().length < 1){
                this.posValid = false;
                this.position.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.posValid = true;
                this.position.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        checkDept(){
            if(this.dept.getInput().getInputText().length < 1){
                this.deptValid = false;
                this.dept.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.deptValid = true;
                this.dept.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        async checkUsername(){
            if(this.username.getInput().getInputText().length < 4){
                this.username.getError().addCustomStyle(Width(12,'px'));
                this.unValid = false;
                this.enableSubmit();
            }
            else{
                this.username.getError().addCustomStyle(Width(0,'px'));
                let json = {};
                json['username']=this.username.getInput().getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.username.getError().addCustomStyle(Width(0,'px'));
                    this.unValid = true;
                    this.enableSubmit();
                }, ()=>{
                    this.username.getError().addCustomStyle(Width(12,'px'));
                    this.unValid = false;
                    this.enableSubmit();
                },'checkUsername2');
            }
        }
        checkPW(){
            if(this.password.getInput().getInputText().length < 8){
                this.passValid = false;
                console.log("hej");
                this.password.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.password.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
            if(this.checked){
                if(this.password.getInput().getInputText() !== this.password2.getInput().getInputText()){
                    this.password2.getError().addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.password2.getError().addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        checkPW2(){
            if(!this.checked){
                this.checked = true;
            }
            if(this.password2.getInput().getInputText().length < 8){
                this.passValid = false;
                this.password2.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                if(this.password.getInput().getInputText() !== this.password2.getInput().getInputText()){
                    this.password2.getError().addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.password2.getError().addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        inputsValid(){
            return this.unValid && this.passValid && this.emailValid && this.fnValid && this.lnValid && this.posValid && this.deptValid;
        }
        documentChanged(e){
            if (e.getSource() === this.username.getInput()){
                this.checkUsername();
            }
            if (e.getSource() === this.firstname.getInput()){
                this.checkFN();
            }
            if (e.getSource() === this.lastname.getInput()){
                this.checkLN();
            }
            if (e.getSource() === this.email.getInput()){
                this.checkEmail();
            }
            if (e.getSource() === this.position.getInput()){
                this.checkPosition();
            }
            if (e.getSource() === this.dept.getInput()){
                this.checkDept();
            }
            if (e.getSource() === this.password.getInput()){
                this.checkPW();
            }
            if (e.getSource() === this.password2.getInput()){
                this.checkPW2();
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
            json['username']=this.username.getInput().getInputText();
            json['password']=this.password.getInput().getInputText();
            json['first_name']=this.firstname.getInput().getInputText();
            json['middle_name']=this.middlename.getInput().getInputText();
            json['last_name']=this.lastname.getInput().getInputText();
            json['email']=this.email.getInput().getInputText();
            json['position']=this.position.getInput().getInputText();
            json['dept']=this.dept.getInput().getInputText();
            json['branch']=this.branch.input.getSelected();
            json['role']=this.roles.input.getSelected();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('/usermanager', {
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
                            },'createUser')
                        }
                    }
                    else
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
    class UserModifyForm extends HDivision{
        constructor(id, username, changeType) {
            super(id);
            this.username = username;
            this.changeType = changeType;
            this.addCustomStyle(
                [
                    Width(80,'vw'),
                    Height(80,'vh'),
                    Position("fixed"),
                    PositionTop(10,'vh'),
                    PositionLeft(10,'vw'),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BorderRadius(15,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]
            );
            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.closeIcon = new HImage(this.id+"_close", closeIcon2).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("fixed"),
                PositionTop(9.5,'vh'),
                PositionLeft(89.3,'vw'),
            ]);
            this.closeIcon.addMouseListener(this);
            this.formBox = Division(this.id+"formBox").addCustomStyle([
                Width(80),
                Overflow("hidden"),
                Margin("auto","")
            ]);

            this.title = Paragraph(this.id+'title').setTextContent("Create New User");
            this.title.addCustomStyle([
                FontSize(18),
                FontFamily("calibri"),
                Padding(0,'px').setLeft(20)
            ]);
            this.password = new FancyInput(this.id+"password","Password","password");
            this.password2 = new FancyInput(this.id+"password2","Confirm Password","password");
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
            this.password.getInput().addDocumentListener(this);
            this.password2.getInput().addDocumentListener(this);

            this.passValid= false;

            this.formBox.addComponent([
             this.password,this.password2, this.closeIcon
            ]);
            this.addComponent([
                this.title,
                this.formBox,
                this.submit,
                this.toastP
            ])
        }
        static createForm(){
            return new UserModifyForm('userModifyForm');
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

        checkPW(){
            if(this.password.getInput().getInputText().length < 8){
                this.passValid = false;
                console.log("hej");
                this.password.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.password.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
            if(this.checked){
                if(this.password.getInput().getInputText() !== this.password2.getInput().getInputText()){
                    this.password2.getError().addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.password2.getError().addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        checkPW2(){
            if(!this.checked){
                this.checked = true;
            }
            if(this.password2.getInput().getInputText().length < 8){
                this.passValid = false;
                this.password2.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                if(this.password.getInput().getInputText() !== this.password2.getInput().getInputText()){
                    this.password2.getError().addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.password2.getError().addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        inputsValid(){
            return this.passValid;
        }
        documentChanged(e){
            if (e.getSource() === this.password.getInput()){
                this.checkPW();
            }
            if (e.getSource() === this.password2.getInput()){
                this.checkPW2();
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
            json['username']= this.username;
            json['password']=this.password.getInput().getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('/usermanager', {
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
                                this.toast("Error modifying Account!")
                            },this.changeType)
                        }
                    }
                    else
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
    class StaffTokenForm extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle(
                [
                    Width(80,'vw'),
                    Height(80,'vh'),
                    Position("fixed"),
                    PositionTop(10,'vh'),
                    PositionLeft(10,'vw'),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BorderRadius(15,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]
            );
            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.closeIcon = new HImage(this.id+"_close", closeIcon2).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("fixed"),
                PositionTop(9.5,'vh'),
                PositionLeft(89.3,'vw'),
            ]);
            this.closeIcon.addMouseListener(this);
            this.formBox = Division(this.id+"formBox").addCustomStyle([
                Width(80),
                Overflow("hidden"),
                Margin("auto","")
            ]);

            this.title = Paragraph(this.id+'title').setTextContent("Create New Staff Token");
            this.title.addCustomStyle([
                FontSize(18),
                FontFamily("calibri"),
                Padding(0,'px').setLeft(20)
            ]);
            this.lastname = new FancyInput(this.id+"lastname","Staff Code","text");
            this.username = new FancyInput(this.id+"username","Name","text");
            this.password = new FancyInput(this.id+"password","Password","password");
            this.password2 = new FancyInput(this.id+"password2","Confirm Password","password");

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
            this.username.getInput().addDocumentListener(this);
            this.lastname.getInput().addDocumentListener(this);
            this.password.getInput().addDocumentListener(this);
            this.password2.getInput().addDocumentListener(this);

            this.unValid= false;
            this.passValid= false;
            this.lnValid= false;

            this.formBox.addComponent([
                this.lastname,
                this.username,this.password,this.password2,
                this.closeIcon
            ]);
            this.addComponent([
                this.title,
                this.formBox,
                this.submit,
                this.toastP
            ])
        }
        static createForm(){
            return new StaffTokenForm('staffTokenForm');
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
        checkUsername(){
            if(this.username.getInput().getInputText().length < 4){
                this.username.getError().addCustomStyle(Width(12,'px'));
                this.unValid = false;
                this.enableSubmit();
            }
            else{
                this.username.getError().addCustomStyle(Width(0,'px'));
                let json = {};
                json['username']=this.username.getInput().getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.username.getError().addCustomStyle(Width(0,'px'));
                    this.unValid = true;
                    this.enableSubmit();
                }, ()=>{
                    this.username.getError().addCustomStyle(Width(12,'px'));
                    this.unValid = false;
                    this.enableSubmit();
                },'checkUsername2');
            }
        }
        checkPW(){
            if(this.password.getInput().getInputText().length < 8){
                this.passValid = false;
                console.log("hej");
                this.password.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.password.getError().addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
            if(this.checked){
                if(this.password.getInput().getInputText() !== this.password2.getInput().getInputText()){
                    this.password2.getError().addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.password2.getError().addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        checkPW2(){
            if(!this.checked){
                this.checked = true;
            }
            if(this.password2.getInput().getInputText().length < 8){
                this.passValid = false;
                this.password2.getError().addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                if(this.password.getInput().getInputText() !== this.password2.getInput().getInputText()){
                    this.password2.getError().addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmit();
                }
                else{
                    this.password2.getError().addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmit();
                }
            }
        }
        inputsValid(){
            return this.unValid && this.passValid && this.lnValid;
        }
        documentChanged(e){
            if (e.getSource() === this.username.getInput()){
                this.checkUsername();
            }
            if (e.getSource() === this.lastname.getInput()){
                this.checkLN();
            }
            if (e.getSource() === this.password.getInput()){
                this.checkPW();
            }
            if (e.getSource() === this.password2.getInput()){
                this.checkPW2();
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
            json['username']=this.username.getInput().getInputText();
            json['password']=this.password.getInput().getInputText();
            json['staffCode']=this.lastname.getInput().getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('/usermanager', {
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
                                console.log(e['message']);
                                this.submit.fadeOut();
                                this.toast("Error creating Account!")
                            },'createStaff')
                        }
                    }
                    else
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
    class Index extends HDivision{
        constructor(frame) {
            super("index");
            this.addCustomStyle([
                Display('none'),
            ]);
            this.pageTitle = Paragraph(this.id+'pT').setTextContent("Users");
            this.pageTitle.addCustomStyle([
                FontSize(20),
                FontFamily("Calibri"),
                Padding(0,'px').setLeft(20),
                Display("none")
            ]);

            this.downloadables = new Downloadables(this.id+"_dds").addCustomStyle([

            ]);
            JSON.parse(localStorage.getItem("users")).forEach(
                (user,index)=>{
                    this.downloadables.addDownloadable(
                        new DownloadRow(
                            "user"+index
                            ,user['first_name']
                            ,user['last_name']
                            ,user['branch']
                            ,user['designation']
                            ,user['department'],
                            screen.width-260-100,user)
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
            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1566(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1536(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1366(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
    }
    class Staff extends HDivision{
        constructor(frame) {
            super("staff");
            this.addCustomStyle([
                Display('none'),
            ]);
            this.pageTitle = Paragraph(this.id+'pT').setTextContent("Users");
            this.pageTitle.addCustomStyle([
                FontSize(20),
                FontFamily("Calibri"),
                Padding(0,'px').setLeft(20),
                Display("none")
            ]);

            this.downloadables = new Downloadables2(this.id+"_dds").addCustomStyle([

            ]);
            JSON.parse(localStorage.getItem("staff")).forEach(
                (staff,index)=>{
                    this.downloadables.addDownloadable(
                        new DownloadRow2(
                            "staff"+index
                            ,staff['staffCode']
                            ,staff['username'],
                            screen.width-260-100,staff)
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
            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1566(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1536(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1366(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-300,'px'),
                Height(screen.height-90,'px')
            ]);
        }
    }

    class Userman  extends HDivision{
        constructor() {
            super('app');
            this.registerPage = new Register("register");
            this.loginPage = new Login("login");
            WINDOW.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Height(100, 'vh'),
                Width(100,'vw'),
                Padding(0),
                Margin (0),
                Overflow('scroll')
            ]);
            this.addCustomStyle([
                Width(100,'vw'),
                Height(100,'vh'),
                Overflow("hidden")
            ]);
            WINDOW.addComponent(this);
            this.addComponent([this.registerPage,this.loginPage]);
            this.retrieveUser();
            window.addEventListener('popstate', () => {
                this.switchToPage2(window.location.pathname)
            });
        }
        componentResized(e){
            if (screen.width >= 1920){
                this.d1366();
                return;
            }
            if (screen.width >= 1566){
                this.d1366();
                return;
            }
            if (screen.width >= 1536){
                this.d1366();
                return;
            }
            if (screen.width >= 1366){
                this.d1366();
                return;
            }
            if (screen.width >= 1280){
                this.d1366();
                return;
            }
            if (screen.width >= 1024){

                this.d1366();
                return;
            }
            if (screen.width >= 768){
                this.d1366();
                return;
            }
            if (screen.width >= 540){
                this.d1366();
                return;
            }
            if (screen.width >= 414){
                this.d1366();
                return;
            }
            if (screen.width >= 375){
                this.d1366();
                return;
            }
            if (screen.width >= 360){
                this.d1366();
                return;
            }
            this.d320();
            return;
        };

        d1366(){
            this.navPanel.addCustomStyle([
                Width(220,'px'),
                Height(100,'%'),
                BackgroundColor(colorScheme.getPrimaryColor()),
                //BackgroundImage("/getusermanBG"),
                Display("inline"),
                Position(),
                Float("left")
            ]);
            this.mainPanel.addCustomStyle([
                Width(screen.width-220,'px'),
                Height(800,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Position("fixed"),
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
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
            this.profileBar.addCustomStyle([
                Width(260,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10),
                Position("relative"),
                Float("right"),
                Color(colorScheme.getDenaryColor())
            ]);
            this.userPic.addCustomStyle([
                Width(70,'px'),
                Height(70,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getDenaryColor()),
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
            this.btnCreateAcc.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(5)
            ]);
            this.btnCreateStaffToken.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(5)
            ]);
            //Body
            this.body.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

            //Footer
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

            this.navUsers= new NavButton('navUsers','Users',accIcon,null, "/userman",this);
            this.navStaff= new NavButton('navStaff','Staff Codes',accIcon,null, "/userman/staffCode",this);
            this.navTransfers = new NavButton('navTransfers','Transfers',accIcon,null, "/userman/transfers",this);
            this.navMyAccounts = new NavButton('navMyAccounts','My Accounts',loanIcon,null, "/userman/myaccounts",this);
            this.navPayBillsAirtime = new NavButton('navPayBills','Pay Bills/Buy Airtime',rfqIcon,null, "/userman/paybillsairtime",this);
            this.navLoans = new NavButton('navLoans','My Loans',cAwardIcon,null, "/userman/myloans",this);
            this.navSettings = new NavButton('navSettings','Settings',cAwardIcon,null, "/userman/settings",this);

            this.navBar.addComponent([
                this.navUsers, this.navStaff
            ]);

            this.companyBar.addComponent([
                this.cLogo,this.cName
            ]);

            this.navPanel.addComponent([
                this.companyBar, this.navBar]);

            //Main Panel
            this.header = Division("header");
            this.profileBar = Division("pBar");
            this.userPic = Division("userPic");
            this.userInfo = Division("userInfo");

            this.userName = Paragraph('userName').setTextContent(this.user.$firstName);
            this.setP = Paragraph('setP').setTextContent("Settings");
            this.logOut = Paragraph('logOut').setTextContent("Log Out");
            this.userInfo.addComponent([this.userName,this.logOut]);
            this.profileBar.addComponent([this.userPic, this.userInfo]);

            this.buttonsBar = Division("bBar");
            this.btnCreateAcc = new GenButtonRounded("btnCreateAcc","Create New User", 100,ECS.getPrimary(),
                ECS.getPrimaryDark());
            this.btnCreateAcc.addMouseListener(this);
            this.btnCreateStaffToken = new GenButtonRounded("btnCreateStaffToken","New Token", 100,ECS.getWarning(),
                ECS.getWarningDark());
            this.btnCreateStaffToken.addMouseListener(this);
            this.logOut.addMouseListener(this);

            this.buttonsBar.addComponent([
                this.btnCreateStaffToken,this.btnCreateAcc
            ]);

            this.header.addComponent([
                this.buttonsBar,this.profileBar
            ]);
            //Body
            this.body = Division('bodyM').addCustomStyle(OverflowY());

            //this.navPanel.domElement.style.boxShadow="20px -1px 50px 0 rgba(255, 255, 255, 0.3)";
            //this.header.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
            //   "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
            //this.footer.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
            //    "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";

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
            this.staff = new Staff(this);

            this.body.addComponent([
                this.index, this.staff
            ]);

        }

        async retrieveUser(){
            await this.send({'lk': this.getCookie('lk')},
                async (e)=>{
                    let content = JSON.parse(e['content']);
                    this.user = new User(
                        content['userName']
                    );

                    await this.send
                    ({'lk': this.getCookie('lk')},
                        (e)=>{

                            localStorage.setItem('users',JSON.stringify(e['users']));
                        },
                        (e)=>{
                            console.log(e)
                        },
                        (e)=>{
                            console.log(e)
                        },'getUsers');
                    await this.send
                    ({'lk': this.getCookie('lk')},
                        (e)=>{

                            localStorage.setItem('staff',JSON.stringify(e['staff']));
                            this.init();
                            let path = window.location.pathname.toLowerCase();
                            this.switchToPage(path);
                            this.componentResized();
                            this.addComponentListener(this);
                        },
                        (e)=>{
                            console.log(e)
                        },
                        (e)=>{
                            console.log(e)
                        },'getStaff');
                },
                (e)=>{
                    this.loginPage.addCustomStyle(
                        [
                            Height(100,'vh'),
                            ZIndex(10),
                            Opacity(1),
                        ]
                    );
                },
                (e)=>{
                    this.registerPage.addCustomStyle(
                        [
                            Height(100,'vh'),
                            ZIndex(10),
                            Opacity(1),
                        ]
                    );
                },'retrieveUser');
        }

        async send(parameters, func1,func2,func3, type){
            await fetch('/usermanager', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: "type="+type+"&content="+JSON.stringify(parameters)
            }).then(
                res => res.json()
            ).then(
                result => {
                    if(result['status'] === 200){
                        func1(result);
                    }
                    else
                    if(result['status'] === 1000){
                        func3(result);
                    }
                    else{
                        func2(result);
                    }
                }
            )

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
            console.log(path.toLowerCase().replace(" ",""));
            switch (path.toLowerCase().replace(" ","")){
                case "/userman":
                {
                    this.refreshBody(this.index,path);
                    break;
                }
                case "/userman/staffcode":
                {
                    this.refreshBody(this.staff,path);
                    break;
                }
                case "/userman/settings":
                {
                    this.refreshBody(this.settingsP,path);
                    break;
                }

                default:
                {
                    this.refreshBody(this.index,"/userman");
                    break;
                }
            }
        }
        switchToPage2(path){
            path.replace("localhost","");
            switch (path){
                case "/userman":
                {
                    this.refreshBody2(this.index,path);
                    break;
                }
                case "/userman/staffcode":
                {
                    this.refreshBody2(this.staff,path);
                    break;
                }

                default:
                {
                    this.refreshBody2(this.index,"/userman");
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
                        document.cookie = "lk=";
                        location.reload();
                    }
                    else
                    if (e.getSource() === this.btnCreateAcc){
                        let userForm =UserForm.createForm();
                        this.addComponent(userForm);
                        userForm.show();
                    }
                    if (e.getSource() === this.btnCreateStaffToken){
                        let userForm =StaffTokenForm.createForm();
                        this.addComponent(userForm);
                        userForm.show();
                    }
                    else
                    {
                        try{
                            this.switchToPage(e.getSource().getLink())
                        }
                        catch(ex){

                        }
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
    ref = new Userman();

})();