export class Admin {
    private name = "Ahesh A";
    private email = "aheshalagu@gmail.com";
    private password = "ahesh 123";
    private static instance: Admin | null = null;

    isAdmin(name: string, email: string, password: string): boolean {
        if (name === this.name && email === this.email && password === this.password) return true;
        else return false;
    }

    static getInstance() {
        if(this.instance) return this.instance;
        else {
            this.instance = new Admin();
            return this.instance;
        }
    }
}