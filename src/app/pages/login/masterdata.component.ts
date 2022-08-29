const MASTER_DATA: any = [
  {
    skillset: 'Data Science and Machine Learning',
    competence: 'Computer Vision, Natural Language Processing',
  },
  {
    skillset: 'Web Application Development',
    competence:
      'Core Java, Java, Java Script, Leadership, Project Management, Python, Web Development - Python, ASP.NET, Java Spring, Angular, ASP.NET Core, React JS, .NET Core, Azure',
  },
  {
    skillset: 'Mobile Apps Development',
    competence: 'Android App Development, Java, Java Spring, iOS',
  },
  {
    skillset: 'Java Application Development',
    competence:
      'Java, Java Script, Java Spring, Core Java, Calibration - Vehicle Functions, Angular, MySQL, SpringBoot, AI, React JS, Tacton CPQ Technical, ITIL Service Management, SAP Fiori, SAP UI5, Requirements Engineering, Hadoop, Project Management, Elastic Search, SAP Netweaver, Testing and Automation',
  },
  {
    skillset: 'IT Validation & Verification',
    competence:
      'Testing and Automation, Testing and Validation, Automation Anywhere, Cucumber test automation, HP UFT / QTB - Automation Tool, Robot test automation, Robotic Process Automation, System Testing, Project Management, Performance Testing',
  },
  {
    skillset: 'Microsoft Application Development',
    competence:
      'Angular, ASP.NET, ASP.NET Core, HTML5, React JS, SQL & PL/SQL, Java Script, Cyber Security - non-HW based, Oracle SQL Programming, Web Services, Sharepoint, Sharepoint /Office 365, AI, Visual Basic, Sharepoint/O365 Migration, Core Java, Java, Java Spring, SQLite, Windows Communication Foundation (WCF), Windows IIS, Windows Presentation Foundation (WPF), Windows Server Administration, SCCM, ASP.NET MVC, Oracle (11g and above), Oracle DB, IT Service Management, ITIL Service Management, .NET Framework, REST API - Web App and Web API, Restful web Services like Springboot, WebMethods',
  },
  {
    skillset: 'Project Management',
    competence:
      'Core Java, DC / CC / IT PEP Process, iOS, Java, Java Script, Java Spring, Oracle SQL Programming, Project Management, Restful web Services like Springboot, SQL & PL/SQL, Angular, ASP.NET, ASP.NET Core, Agile PEP, Agile-SAFe, D2K, Visual Basic, Visual Studio, ITIL Service Management, Android App Development, Sharepoint, SAP Fiori, SAP UI5, Microsoft .Net (RFID Application), PostGreSQL, Postman, SCCM, SQLite, Windows 10 Administration, Windows IIS, Windows Presentation Foundation (WPF), Windows Server Administration',
  },
  {
    skillset: 'Microsoft ERP',
    competence:
      'Microsoft T&L D365-FO, Microsoft ( M&P)¸ D365-FO, Microsoft CRM Online Technical, Microsoft D365 FO - Technical',
  },
  {
    skillset: 'Data Engineering',
    competence:
      'Data Vault, Oracle DB, Oracle SQL Programming, SQL & PL/SQL, ITIL Service Management, Power BI_Obsolete, SQLServer, SSAS, SSIS, Angular, Hadoop, Computer Vision, Natural Language Processing, Tableau',
  },
  {
    skillset: 'IT - Service Management Tools',
    competence: 'ITIL Service Management, Oracle SQL Programming, SQL & PL/SQL',
  },
  {
    skillset: 'Management and Support',
    competence: 'ASP.NET, Project Management, SQL & PL/SQL',
  },
  {
    skillset: 'IT Infrastructure',
    competence: 'Networking, Windows/Linux Server OS',
  },
];

export default MASTER_DATA;

export interface SkillObj {
  skillset: string;
  competence: string;
}
export interface SkillObj2 {
  skillset: string;
  competence: string[];
}

export const filterMasterData2 = (raw: SkillObj[] = []) => {
  const temp: SkillObj2[] = [];

  raw.forEach((a) => {
    const temArr: string[] = [];
    a.competence.split(', ').forEach((element) => {
      if (!temArr.includes(element)) {
        temArr.push(element);
      }
    });
    temp.push({ skillset: a.skillset, competence: temArr });
  });

  return temp;
};

export const filterMasterData1 = (raw: SkillObj[] = []) => {
  const temp: SkillObj[] = [];

  for (let i = 0; i < raw.length - 1; i++) {
    for (let u = i + 1; u < raw.length; u++) {
      if (raw[i]?.skillset === raw[u]?.skillset) {
        const newCom = raw[i]?.competence + ', ' + raw[u]?.competence;
        Object.assign(raw[i], { competence: newCom });
      }
    }
  }
  raw.forEach((obj) => {
    const item = temp.find((x) => x.skillset === obj.skillset);
    if (!item) {
      temp.push(obj);
    }
  });
  const temp2 = filterMasterData2(temp);

  // console.log({ temp2 });
  return temp;
};
