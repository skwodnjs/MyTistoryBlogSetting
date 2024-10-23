class ImageInfo {
    constructor(url, offset) {
        this.url = url;
        this.offset = offset;
    }

    getUrl() {
        return this.url;
    }

    getOffset() {
        return this.offset;
    }
}

const imageList = [
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZ1g1y%2FbtsJdAQljTF%2FKbojzsTVzCx1lifWu9PrZK%2Fimg.jpg", "50%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FldZeX%2FbtsJdlME4vC%2FQ825JfTRVYeuaVJKOZG0gK%2Fimg.jpg", "50%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FG2UKX%2FbtsJc6a8hif%2Fkgrg5crb9sMo8RfDjkNO1K%2Fimg.jpg", "40%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPz9yh%2FbtsJbrATmmI%2Fihq9WTKxf8pOhLYpgdgnE1%2Fimg.jpg", "40%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYXl0Y%2FbtsJbvKeN4K%2FyQ61I2BtzKJTkTxQg5Zly1%2Fimg.jpg", "35%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGnt2l%2FbtsJcmy2hwJ%2FmYv0Uv9fY7SaQwOtSgPZH0%2Fimg.jpg", "40%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FysGvh%2FbtsJdqmLCVe%2FWDJUR59mV8XrM04vyFBrx0%2Fimg.jpg", "50%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1S4d8%2FbtsJcAqg3Dv%2FzYg6AdxhDLPm6HLuVytKFK%2Fimg.jpg", "35%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtkUSB%2FbtsJcMxmg2p%2FvqWGJRt8IoOKch0ZRZKuk0%2Fimg.jpg", "35%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FW94fb%2FbtsJdxMQZjL%2FA0KPKAEqZOOwZfoYhKBqJ0%2Fimg.jpg", "30%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb93ZHx%2FbtsJcWfmLhR%2F21nffoyhMEha7YTKyBENm1%2Fimg.jpg", "60%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNa3l7%2FbtsJc3ZNyYJ%2FkKmdR6826ALON75oaRWk8k%2Fimg.jpg", "30%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeeK7yv%2FbtsJbIWK41l%2FKZum0PJMUQCftHieT7oJJ1%2Fimg.jpg", "70%"),
    new ImageInfo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAO833%2FbtsJcP1MmL9%2FPrnD5JoyMVFJ8xxRnuCwnk%2Fimg.jpg", "45%"),
]

const image = imageList[(Math.floor(Math.random() * imageList.length))];

const element = document.getElementById('article-header-noimg');
element.style.setProperty("background-image", "url(" + image.getUrl() + ")", "important");
element.style.setProperty("background-position", "center " + image.getOffset(), "important");
element.style.setProperty("background-size", "cover", "important");
element.style.setProperty("background-repeat", "no-repeat", "important");