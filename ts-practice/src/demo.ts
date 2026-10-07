class Contact {
    name: string | undefined;
    email: string | undefined;
    phone!: string;
}

const userProfile = new Contact();
userProfile.name = "John Doe";
userProfile.email = "john.doe@example.com";
userProfile.phone = "123-456-7890"; 