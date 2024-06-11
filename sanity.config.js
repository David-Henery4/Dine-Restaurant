/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

import "./src/custom-studio-css/custom-styles.css";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
  sanityTutorialsWidget,
} from "@sanity/dashboard";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import StudioLogo from "/public/assets/studio-logo.svg";
import CustomNavbar from "@/custom-studio-components/CustomNavbar";
import CustomToolMenu from "@/custom-studio-components/CustomToolMenu";
// import { theme } from "https://themer.sanity.build/api/hues?default=9e7f66;lightest:e7e7ee&primary=9e7f66&transparent=9e7f66&positive=lightest:fff;darkest:101112&caution=lightest:fff;darkest:101112&critical=lightest:fff;darkest:101112&lightest=e7e7e7&darkest=111111";
import { theme } from "./sanity/theme";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  theme,
  icon: StudioLogo,
  // title: "dine",
  studio: {
    components: {
      // navbar: CustomNavbar,
      toolMenu: CustomToolMenu,
    },
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Base")
          .items([
            S.listItem()
              .title("Bookings by Date")
              .child(
                S.documentTypeList("bookings")
                  .title("Bookings by Date")
                  .child((bookingId) =>
                    S.documentList()
                      .title("Bookings")
                      .filter("_type == 'bookings' | order(date)")
                  )
              ),
            ...S.documentTypeListItems().reverse(),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    dashboardTool({
      widgets: [
        documentListWidget({
          types: ["bookings"],
          title: "Bookings",
          order: "date",
          layout: { width: "full" },
        }),
        projectInfoWidget(),
        projectUsersWidget(),
        sanityTutorialsWidget(),
      ],
    }),
  ],
});
