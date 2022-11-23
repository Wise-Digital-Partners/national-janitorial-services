import S from "@sanity/desk-tool/structure-builder";
// https://react-icons.github.io/react-icons/icons?name=fc
import { FcDocument, FcRating, FcReading, FcList, FcGlobe, FcConferenceCall } from "react-icons/fc";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://darkhorsecpa.gtsb.io";
const localURL = "http://localhost:8000";
const previewURL = window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
   /**
    * Here you can define fallback views for document types without
    * a structure definition for the document node. If you want different
    * fallbacks for different types, or document values (e.g. if there is a slug present)
    * you can set up that logic in here too.
    * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
    */

   return S.document().views([S.view.form(), S.view.component(IframePreview).options({ previewURL }).title("Preview")]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
   S.list()
      .title("Content")
      .items([
         S.listItem().title("Blogs").icon(FcDocument).schemaType("blogs").child(S.documentTypeList("blogs").title("Blogs")),

         S.listItem().title("Blog Authors").icon(FcReading).schemaType("blogAuthors").child(S.documentTypeList("blogAuthors").title("Blog Authors")),

         S.listItem()
            .title("Blog Categories")
            .icon(FcList)
            .schemaType("blogCategories")
            .child(S.documentTypeList("blogCategories").title("Blog Categories")),

         S.listItem().title("Testimonials").icon(FcRating).schemaType("testimonials").child(S.documentTypeList("testimonials").title("Testimonials")),
      ]);
