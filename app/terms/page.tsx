import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 prose dark:prose-invert prose-h3:mt-0">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1>TERMS OF USAGE</h1>
          <h6 className="italic text-subtle">
            Last updated: November 20, 2026
          </h6>

          <Separator />

          <p>
            AS USED IN THESE TERMS OF USE, "PROJECT", "WE", "US", "OUR" REFER TO
            THE PROJECT AND THE PEOPLE BEHIND IT.
          </p>
          <p>
            AS USED IN THESE TERMS OF USE, "YOU" REFERS TO THE INDIVIDUAL OR
            ENTITY ACCESSING OR USING THE PROJECT.
          </p>

          <h2>ACCEPTANCE OF TERMS</h2>
          <p>
            BY ACCESSING AND USING THIS PROJECT, YOU ACCEPT AND AGREE TO BE
            BOUND BY THE TERMS AND CONDITIONS OUTLINED HEREIN. IF YOU DO NOT
            AGREE TO THESE TERMS, YOU SHOULD NOT USE THIS PROJECT.
          </p>

          <h2>DISCLAIMER</h2>
          <p>
            THE INFORMATION PROVIDED BY THIS PROJECT IS FOR GENERAL
            INFORMATIONAL PURPOSES ONLY. THE PROJECT MAKES NO REPRESENTATIONS OR
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, ABOUT THE COMPLETENESS,
            ACCURACY, RELIABILITY, SUITABILITY, OR AVAILABILITY WITH RESPECT TO
            THE PROJECT OR THE INFORMATION, PRODUCTS, SERVICES, OR RELATED
            GRAPHICS CONTAINED IN THE PROJECT FOR ANY PURPOSE. ANY RELIANCE YOU
            PLACE ON SUCH INFORMATION IS THEREFORE STRICTLY AT YOUR OWN RISK.
          </p>

          <p>
            IN NO EVENT WILL THE PROJECT BE LIABLE TO YOU OR ANY THIRD PARTY FOR
            ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE
            OF, OR YOUR INABILITY TO ACCESS OR USE, THE WEBSITES AND ONLINE
            SERVICES OR ANY MATERIALS OR CONTENT ON THE WEBSITES AND ONLINE
            SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
            NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, WHETHER OR NOT THE
            PROJECT HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>
        </div>
      </div>
    </div>
  );
}
