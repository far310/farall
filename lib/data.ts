import React from "react";
import { FaBuilding } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aiImage from "@/public/ai.jpg";
import htImage from "@/public/ht.jpg";
import yxtImage from "@/public/yxt.jpg";
import yxxImage from "@/public/yxx.jpg";
import sljcImage from "@/public/sljc.jpg";
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        "title": "Full Stack Developer",
        "location":  React.createElement("a", {
            href: "https://i-cloudy.cn",
            style: { textDecoration: 'underline' },
            target: "_blank"
        }, "Beijing Taiji Rule of Law Easy Technology Co., Ltd.China"),
        "description": "The company's product lines include contracts, legal affairs, and approval workflow; mainly responsible for writing front-end and back-end code (single sign-on, third-party integration, asynchronous orchestration, scheduled tasks, data import/export, secondary development, performance optimization), also learned Docker, SpringCloud, various middleware, and other related technologies.",
        "icon": React.createElement(FaBuilding),
        "date": "October 2021 - April 2024"
    },
    {
        "title": "Full Stack Developer",
        "location":  React.createElement("a", {
            href: "https://i-cloudy.cn",
            style: { textDecoration: 'underline' },
            target: "_blank"
        }, "Shenzhen Cloud Fusion Technology Co., Ltd.China"),
        "description": "As a full-stack developer, participated in projects from 0 to 1, including requirements analysis, database design, technology selection, document management, document writing, knowledge base writing, local project version repository deployment (GitLab and SVN), project framework construction (Vue front-end, SpringBoot+Dubbo back-end, MySQL data, Redis cache, Echarts chart data analysis), participated in backend development, frontend page development, as well as mini-program and Android APP development.",
        "icon": React.createElement(FaBuilding),
        "date": "November 2018 - October 2021"
    },
    {
        "title": "Computer Science and Technology",
        "location": "Hunan University of Arts and Science.China",
        "description": "Self-study undergraduate, obtained graduation certificate and bachelor's degree.",
        "icon": React.createElement(LuGraduationCap),
        "date": "March 2019 - March 2024"
    },
    {
        "title": "Computer Programming",
        "location": "Beijing Institute of Technology Qingniao.China",
        "description": "Studied JAVA, C# and other development languages, obtained computer level certificates high, medium, and low.",
        "icon": React.createElement(LuGraduationCap),
        "date": "June 2017 - November 2018"
    },
    {
        "title": "Computer Application.HuNa, China",
        "location": "Chenzhou Vocational College",
        "description": "Obtained Computer Operator Level 4 Certificate\nWon the first prize in the school's web page competition\nWon the second prize in the school's computer maintenance competition",
        "icon": React.createElement(LuGraduationCap),
        "date": "September 2015 - June 2018"
    }
]


export const experiencesDataZn = [
    {
        "title": "全栈开发工程师",
        "location":  React.createElement("a", {
            href: "https://i-cloudy.cn",
            style: { textDecoration: 'underline' },
            target: "_blank"
        }, "北京太极法治易科技有限公司"),
        "description": "公司以合同，法务，审批流工作流作为产品线；在公司主要编写前后端代码（单点登录，第三方集成，异步编排，定时任务，数据导入导出，二次开发，性能优化），在公司也学习了Docker、SpringCloud、各种中间件等相关技术。",
        "icon": React.createElement(FaBuilding),
        "date": "2021年10月 - 2024年4月"
    },
    {
        "title": "全栈开发工程师",
        "location":  React.createElement("a", {
            href: "https://i-cloudy.cn",
            style: { textDecoration: 'underline' },
            target: "_blank"
        }, "深圳云合科技有限公司"),
        "description": "作为全栈开发从0-1参与项目，需求分析、数据库设计、技术选型、文档管理、文档编写、知识库编写、本地项目版本仓库部署（GitLab和SVN）、项目框架搭建（Vue前端、SpringBoot+Dubbo后端、MySQL数据、Redis缓存、Echarts图表分析数据）、参与后台编写，前端页面编写以及小程序和安卓APP开发。",
        "icon": React.createElement(FaBuilding),
        "date": "2018年11月 - 2021年10月"
    },
    {
        "title": "计算机科学与技术",
        "location": "湖南文理学院",
        "description": "自考本科，获得毕业证、学士学位。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2019年03月 - 2024年03月"
    },
    {
        "title": "计算机编程",
        "location": "北大青鸟",
        "description": "学习了JAVA，C#等开发语言，获得计算机等级证书高、中、低。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2017年06月 - 2018年11月"
    },
    {
        "title": "计算机应用",
        "location": "郴州职业学院",
        "description": "获得计算机操作员四级证书\n获得校比赛网页大赛一等奖\n获得校比赛计算机维护大赛二等奖教育经历",
        "icon": React.createElement(LuGraduationCap),
        "date": "2015年09月 - 2018年06月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "LawEasy Contract Management System",
        title_zh: "法智易合同管理系统",
        description:
            `The system aims to solve the company's contract data standardization, achieve full lifecycle management of group and company contract data, and promote digital control in enterprises. It enhances contract data asset management, strengthens contract risk prevention and control, and achieves vertical penetration of contract risk across the company. Using AI technology, it aggregates the group's contract digital assets and establishes a hierarchical sharing mechanism. The system associates contract data with finance, investment, projects, and procurement to drive data-driven business decisions. It solves pain points such as contract archiving, department collaboration, and approvals, and is developed using distributed, containerized, multi-platform, and front-end-back-end separation methods with multiple versions and technologies.`,
        desc_zh: 
            `该系统是为了解决公司建立合同数据标准，实现集团、公司合同数据的全生命周期管理，推动企业的数字化管控等；加强合同数据资产管理、强化合同风险的防控水平，实现全公司合同风险的垂直贯穿；运用人工智能技术，归集集团的合同数字资产，建立分级的共享机制；以合同数据为核心，关联财务、投资、项目、采购等业务，实现数据驱动经营决策等；解决合同归档存档等痛点，部门协同审批等事务、使用分布式、容器化、多平台，前后端分离等方式开发，多版本，不同版本采用不同的技术方案实现。`,
        tags: ["SpringCloud", "Docker", "Activity", "Mybatis-Plus", "Spring JPA", "Spring Cloud Gateway", "MQ", "Nacos", "Vue3", "QuasarUI", "ELK/EFK", "SkyWalking"],
        imageUrl: htImage,// 请替换为实际图片路径
        projectUrl: '',
        demoUrl: 'https://fzyapp.legait.com/#/login',
    },
    {
        title: "E Patrol School",
        title_zh: "E 巡校",
        description: "A DingTalk mini program for school attendance and teacher patrols. It integrates with DingTalk hardware (B1) for location binding and Bluetooth scanning for clock-in patrols. It supports multi-scenario, multi-task, and multi-time combinations for seamless patrols, duty, scheduling, clock-in, and feedback submission, along with summary analysis. The app enhances transparency in management, visualizes complex school tasks, and mobilizes management services. It is available on the DingTalk App Market.",
        desc_zh: "本小程序是用于学校考勤老师巡检使用，对接钉钉硬件(B1)进行绑定地点手机蓝牙扫描进行打卡巡检；多场景，多任务，多时段任意组合无感巡查，值班，排班，打卡及反馈一键提交、汇总分析。助力学校实现管理过程透明化，繁杂校务任务质量可视化、管理服务移动化，已上架钉钉应用市场。",
        tags: ["DingTalk Mini Program UI", "Alibaba Cloud OSS", "dingtalk-jsapi"],
        imageUrl: yxxImage, // Replace with actual image URL or import
        projectUrl: '',
        demoUrl: '',
      },
    {
        title: "Yi Xue Tong Interactive Classroom",
        title_zh: "一学通互动课堂",
        description:
            `This system is a classroom and after-class service product produced by the company's series of products, mainly applied in schools. It integrates various classroom activities such as answering, attendance, raising hands, voting, and more, all of which are collected and stored in the backend. The system includes user basic data, after-class services, homework management, exam publishing, question bank, wrong question book, lesson preparation management, student analysis, etc. The APP is mainly used on tablets, featuring functions such as after-class homework, interactive classroom, exams, learning management, self-study materials, wrong question book, and more. Teachers and parents can log in with their respective roles.`,
        desc_zh: 
            `本系统是公司一系列产品所产出的整套课堂课后服务产品主要应用于学校、一学通互动课堂对接公司硬件(学生卡+采集器)学生卡产生答题、考勤、举手、投票等互动课堂产生的数据会存入后台，后台存有用户基础数据、课后服务等功能；如课后作业、发布考试、组卷、题库、错题本、备课管理、学生分析等。APP 主要应用于平板、有课后作业、互动课堂、考试、学情管理、自学资料、错题本等功能；老师家长均可登录有其角色对应功能。`,
        tags: ["SpringBoot", "Dubbo", "Mybatis", "ElementUI", "Vue.js", "Echarts","MySQL","APP","mini App"],
        imageUrl: yxtImage, // 请替换为实际图片路径
        projectUrl: '',
        demoUrl: 'https://zhktedu.i-cloudy.cn',
    },
   
      {
        title: "Vision Monitoring and Analysis Platform",
        title_zh: "云合视力监测分析平台",
        description: "A system developed to work with the company's hardware product, primarily for school information management. It supports large-scale, repeated vision monitoring of students. The main features include the entry of basic student information, the analysis of vision test data, and the generation of reports for educational research institutions.",
        desc_zh: "该系统是配合公司硬件产品而研发，主要适用于学校信息化管理，规模化、多次重复监测学生视力，主要功能有学校学生基本信息的录入，对产生的视力检测数据进行分析，通过数据产生报表提供教科院研究。",
        tags: ["SpringBoot", "MybatisPlus", "Vue2", "ElementUI", "Echarts"],
        imageUrl: sljcImage, // Replace with actual image URL or import
        projectUrl: '',
        demoUrl: 'http://eyesight.i-cloudy.cn:8038',
      },
      {
        title: "AI Wuyo",
        title_zh: "AI 无忧",
        description: "This project integrates with natural language models to provide users with AI chat, AI creation, AI conversation functions, AI-generated images, and subscription memberships.",
        desc_zh: "该项目对接自然语言模型，为用户提供 AI 聊天，AI 创作，AI 对话功能，AI 生成图像，订阅会员等。",
        tags: ["Vue", "ElementUI", "Markdown", "Axios", "Sass", "Less", "qrcode", "SocketIO", "Koa2", "Agently AI", "highlight"],
        imageUrl: aiImage, // Replace with actual image URL or import
        projectUrl: '',
        demoUrl: 'https://www.wuyai.com/chat',
      }
]

export const skillsData = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "SASS",
    "LESS",
    "Vue2",
    "Vue3",
    "Node",
    "Express",
    "Git",
    "Github",
    "SNV",
    "UI/UX",
    "Boostrap",
    "Android",
    "MongoDB",
    "JAVA",
    "UI/UX",
    "SSM",
    "SSH",
    "Spring",
    "Spring MVC",
    "Spring Boot",
    "Spring Cloud",
    "ElementUI",
    "AntUI",
    "QuasarUI",
    "ECharts",
    "Tomcat",
    "Jetty",
    "Nginx",
    "Linux",
    "JQuery",
    "Spring",
    "Dubbo",
    "Docker",
    "Redis",
    "GieFlow",
    "MySQL",
    "Oracle",
    "SQL Server",
    "Activity",
    "Shell",
    "Hexo",
] 
