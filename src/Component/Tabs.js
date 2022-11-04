import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
  export default function Example() {
    const data = [
      {
        label: "Skills",
        value: "html",
        desc: <section className="flex">
        <div>
          <p>
            <span className="text-red-500 mb-6">React</span><br/>Making tons of project using react
            <br/>such as building spotify,linkedIn <br/> and facebook <br/>
          </p>
       </div>

       <div className="ml-8">
         <p>
          <span className="text-red-500">Javascript</span><br/><p>Studying until ECMAScript 6 modern<br/>features 
          such as arrow function</p> 
         </p>
       </div>
     </section>
    },
      {
        label: "Experience",
        value: "react",
        desc: <section className="flex">
        <div>
          <p>
            <span className="text-red-500 mb-6">Quality Engineer - ZF</span><br/>Manage with teams to succeed<br/>company
             planning to install<br/> mercedes new model <br/> (W206,S580,GLCX200)  <br/>
          </p>
       </div>

       <div className="ml-8">
         <p>
          <span className="text-red-500">Production Engineer - Isuzu</span><br/><p>Assists project planning on changing<br/>
          new version model of D-max from<br/>arriving 16 new jig until to the final <br/> testing line</p> 
         </p>
       </div>
     </section>
    },
   
      {
        label: "Education",
        value: "vue",
        desc: <section className="flex">
          <div>
            <p>
              <span className="text-red-500 mb-6">UMP</span><br/> Graduated from UMP with
             bachelor <br/> honor in Industrial Technology <br/> Management  <br/>
            </p>
         </div>

         <div className="ml-8">
           <p>
            <span className="text-red-500">KMPH</span><br/><p>Study computer science,biology,<br/>chemistry</p> 
           </p>
         </div>
       </section>
      },
   
    //   {
    //     label: "Angular",
    //     value: "angular",
    //     desc: `Because it's about motivating the doers. Because I'm here
    //     to follow my dreams and inspire other people to follow their dreams, too.`,
    //   },
   
    //   {
    //     label: "Svelte",
    //     value: "svelte",
    //     desc: `We're not always in the position that we want to be at.
    //     We're constantly growing. We're constantly making mistakes. We're 
    //     constantly trying to express ourselves and actualize our dreams.`,
    //   },
    ];
   
    return (
      <Tabs value="html" >
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody 
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }} >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} >
              {desc}
            </TabPanel>
            ))}
        </TabsBody>
      </Tabs>
    );
  }