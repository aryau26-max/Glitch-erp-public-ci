# Independent synthetic CI smoke test

This standalone project contains newly written generic text/array utilities and
synthetic tests only. It contains no private application source, history, data,
credentials, infrastructure configuration, or application dependencies.

Passing these checks does NOT certify any private ERP, its security, permissions,
database, financial correctness, deployment readiness, or business workflows.
Private application validation must continue separately.

Use Node.js 24.22.0 and run `node --test`. No package installation, environment
variables, database, token, external service, or private checkout is required.
The tests use only Node's built-in modules and local source files.

The workflow uses standard Ubuntu runners and two official actions pinned to
verified release commit hashes. It has read-only repository permissions, no
stored credentials, no artifact upload, no dependency cache, and no paid runner.
GitHub infrastructure and runtime downloads are still external dependencies.

This is a LOCAL STAGING PROPOSAL, not authorization to publish. Before publication,
the owner must review every file, approve the public scope and licensing, and
separately authorize an empty public repository and new history. The package is
private and unlicensed to avoid implying npm publication or a license grant.

Public standard runners are generally free, but an account restriction may still
prevent execution. A separately authorized public smoke run must establish actual
account feasibility. Never interpret blocked CI as passing or buy services to
work around it.
