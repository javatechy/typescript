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
}

var google = new website("http://google.com", 22);
alert(google.linkText());