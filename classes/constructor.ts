class website { 
    url: string;
    fbLikes: number;
    constructor(url:string, fbLikes:number) { 
        this.fbLikes = fbLikes;
        this.url = url;
    }
}

var google = new website("http://google.com", 22);
alert(JSON.stringify(google));
