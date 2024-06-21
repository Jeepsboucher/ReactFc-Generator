export class GenericFile {
    public static getGenericTsx(name: string, useCssModule = false): string {
        return `import React from "react";
import './${name}${useCssModule ? '.module' : ''}.css';

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