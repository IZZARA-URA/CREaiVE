




// Header
export interface HeaderProps {
    children?: React.ReactNode;
    topic?: string;
    tagline?: string;
}



//  Buttons
export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: any;
    text?: string;
    type?: string;
    props?: any;
}


// Crads
interface Bodies {
    body: string[];
}

export interface CardProps {
    children?: React.ReactNode;
    type?: string;
    topic?: string;
    tagline?: string;
    body?: string[];
    props?: any;
}