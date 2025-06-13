export const submitNewOwnerCode = `
\\begin{array}{ll}
1. & \\textbf{if } \\_tempNewOwner = \\text{zero-address} \\textbf{ then} \\\\
2. & \\quad \\textbf{if } \\_newOwner \\ne \\text{owner} \\textbf{ then} \\\\
3. & \\quad\\quad \\_address \\gets \\text{accountFactory.getAddress}(\\_newOwner, \\text{salt}) \\\\
4. & \\quad\\quad \\textbf{if } \\text{isDeploy}(\\_address) = \\text{False} \\textbf{ then} \\\\
5. & \\quad\\quad\\quad \\_tempNewOwner \\gets \\_newOwner \\\\
6. & \\quad\\quad \\textbf{end if} \\\\
7. & \\quad \\textbf{end if} \\\\
8. & \\textbf{end if}
\\end{array}`;
