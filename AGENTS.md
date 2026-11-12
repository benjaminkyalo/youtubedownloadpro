<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Application structure
- Keep the creator tool catalog in a browser-safe shared module and use the shared site shell for content routes, so tool names and navigation remain consistent.
- Tool selection must not fabricate analytics or download progress; unconnected tools show an explicit unavailable state, while browser-safe thumbnail and link utilities can resolve public video IDs.
- Keep input parsing and calculator formulas in the shared, tested tool engine; render tool workflows in a reusable inline workspace below the action form, so reports follow the screenshot layout.
- Retrieve public YouTube records through server functions using the linked connector gateway; deliver image downloads through validated, host-allowlisted same-origin server routes.

- Derive report averages and earnings scenarios in the tested shared engine using elapsed channel age; never infer actual monetization or current revenue from lifetime totals.
- Every catalog tool has its own page at /tools/<slug> (slug derived by toolSlug in the shared catalog) reusing the shared ToolAction form, so each tool is indexable and linkable.
