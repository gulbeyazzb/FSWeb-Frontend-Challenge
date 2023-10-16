import { TR } from "../actions/languageAction";
import { EN } from "../actions/languageAction";
import { TrHeroData } from "../mocks/TrHeroData";
import { TrProfileData } from "../mocks/TrProfileData";
import { TrProjectsData } from "../mocks/TrProjectsData";
import { TrSkillsData } from "../mocks/TrSkillsData";
import { TrNavBarData } from "../mocks/TrNavBarData";
import { TrFooterData } from "../mocks/TrFooterData";
import { SkillsData } from "../mocks/SkillsData";
import { HeroData } from "../mocks/HeroData";
import { ProfileData } from "../mocks/ProfileData";
import { ProjectsData } from "../mocks/ProjectsData";
import { NavBarData } from "../mocks/NavBarData";
import { FooterData } from "../mocks/FooterData";

const stateInitial = {
  heroData: HeroData,
  profileData: ProfileData,
  projectsData: ProjectsData,
  skillsData: SkillsData,
  navBarData: NavBarData,
  footerData: FooterData,
};

const languageReducer = (state = stateInitial, action) => {
  const { type } = action;
  switch (type) {
    case TR:
      return {
        ...state,
        heroData: TrHeroData,
        profileData: TrProfileData,
        projectsData: TrProjectsData,
        skillsData: TrSkillsData,
        navBarData: TrNavBarData,
        footerData: TrFooterData,
      };

    case EN:
      return {
        ...state,
        heroData: HeroData,
        profileData: ProfileData,
        projectsData: ProjectsData,
        skillsData: SkillsData,
        navBarData: NavBarData,
        footerData: FooterData,
      };
    default:
      return state;
  }
};
export default languageReducer;
