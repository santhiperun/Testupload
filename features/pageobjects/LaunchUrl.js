class LaunchUrl {

    constructor(page) {
        this.page = page;


    }

    async goTo(url) {
        await this.page.goto(url);
    }
}

module.exports = { LaunchUrl };
