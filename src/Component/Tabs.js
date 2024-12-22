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
            <span className="text-red-500 mb-6">React</span><br />Making tons of project using react
            <br />such as building spotify,linkedIn <br /> and facebook <br />
          </p>
        </div>

        <div className="ml-8">
          <p>
            <span className="text-red-500">Javascript</span><br /><p>Studying until ECMAScript 6 modern<br />features
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
            <span className="text-red-500 mb-6">Fullstack Developer - OFO Tech</span>
            <br />Projects Highlighted :
            <br />- Automated Highway Asset Defect Detection (AHADD)
            <br />  Develop React , Node.js ,Material UI
            <br />
            <br />
          </p>
        </div>

        <div className="ml-8">
          <p>
            <span className="text-red-500">Front End Developer - LEON</span>
            <br /><p>Projects Highlighted :
              <br />- Supervision (JKR)
              <br /> Develop with React.
            </p>
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
            <span className="text-red-500 mb-6">UMP</span><br /> Graduated from UMP with
            bachelor <br /> honor in Industrial Technology <br /> Management  <br />
          </p>
        </div>

        <div className="ml-8">
          <p>
            <span className="text-red-500">KMPH</span><br /><p>Study computer science,biology,<br />chemistry</p>
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