export class GenericFile {
    public static getGenericTsx(name: string): string {
        return `import React from "react";
import './${name}.css';

interface ContainerProps {
}

const ${name} : React.FC<ContainerProps> = props => {

    return (
    <div>
    </div>
    )
}
export default ${name};`;
    }
}