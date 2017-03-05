class website { 
    url: string;
    fbLikes: number;
    constructor(url:string, fbLikes:number) { 
        this.fbLikes = fbLikes;
        this.url = url;
    }
    linkText(): string { 
        return (this.fbLikes/12)+" likes";
    }
    get area() { 
        return this.url;
    }

    set fbLikess(lenth: number) { 
        this.fbLikes = lenth;
    }
}

var google = new website("http://google.com", 22);
google.fbLikess = 1000;
alert(google.linkText());
alert(JSON.stringify(google));
