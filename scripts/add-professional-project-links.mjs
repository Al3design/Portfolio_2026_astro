import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';
const links={
 gitcron:{href:'https://github.com/Al3design/gitcron',es:['Repositorio del proyecto','El código del proyecto se puede consultar en GitHub.','Ver GitCron en GitHub'],en:['Project repository','The project code can be explored on GitHub.','View GitCron on GitHub']},
 odontopau:{href:'https://paulagualtieri.com/',es:['Sitio del proyecto','Sitio web de Paula Gualtieri Odontología.','Visitar el sitio de Paula Gualtieri'],en:['Project website','Paula Gualtieri Odontología website.','Visit Paula Gualtieri’s website']},
 useodontopro:{href:'https://use-odonto-pro.vercel.app/',es:['Sitio del proyecto','Preview del portal público de UseOdontoPro. Las imágenes de esta ficha corresponden a una versión histórica.','Visitar UseOdontoPro (preview)'],en:['Project website','Preview of the UseOdontoPro public portal. Images in this article show a historical version.','Visit UseOdontoPro (preview)']},
};
for(const [slug,link] of Object.entries(links)) {
 const path=`src/content/projects/${slug}.mdx`;
 const raw=await readFile(path,'utf8');
 await writeFile(`.e2e/content-intake/${slug}-before-reference-link-${Date.now()}.mdx`,raw,{flag:'wx'});
 const doc=matter(raw);
 for(const language of ['es','en']) {
  const [title,text,linkLabel]=link[language];
  const blocks=doc.data.locales[language].contentBlocks;
  const section={_template:'section',title,text,href:link.href,linkLabel};
  const existing=blocks.findIndex(block=>block._template==='section' && block.href===link.href);
  if(existing>=0) blocks[existing]=section; else blocks.splice(1,0,section);
 }
 await writeFile(path,matter.stringify(doc.content,doc.data));
 console.log(`Added project reference: ${slug}`);
}
