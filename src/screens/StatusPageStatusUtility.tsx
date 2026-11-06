// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="flex-1 flex flex-col justify-between p-6 md:p-10 max-w-5xl mx-auto w-full" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_OBS_REMAINING_ROUTE OBS_REFRESH_STATUS_OBS_STATUS_TEXT OBS_REFRESH_STATUS_OBS_STATUS_VALUE">
          {/* Header chrome (purely decorative, no links or buttons) */}
          <header className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                SU
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900 tracking-tight">Status Utility</h1>
                <p className="text-xs text-slate-500 font-mono">/status</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500"></span>
              Operational
            </div>
          </header>
      
          {/* Main Card Body */}
          <main className="my-auto py-12 flex flex-col items-center">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
              {/* Visual Badge */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
      
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Service Status Overview</h2>
              <p className="text-sm text-slate-500 mb-8">Real-time status indicators and system health synchronization.</p>
      
              {/* Status Readout Details */}
              <div className="bg-slate-50 rounded-xl border border-slate-100 divide-y divide-slate-100 text-left mb-8 overflow-hidden">
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Route</span>
                  <span className="text-sm font-mono text-slate-700">/status</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Status message</span>
                  <span className="text-sm font-semibold text-slate-800">Status refreshed</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">State value</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-100 text-emerald-800">refreshed</span>
                </div>
              </div>
      
              {/* Single declared physical control slot */}
              <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_OBS_REFRESH_BUTTON_STATE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                Refresh status
              </button>
            </div>
          </main>
      
          {/* Footer chrome (non-actionable text) */}
          <footer className="pt-6 border-t border-slate-200 text-xs text-slate-400 flex items-center justify-between">
            <span>Status Utility © 2025</span>
            <span className="font-mono">Route: /status</span>
          </footer>
        </div>
    </>
  );
}
