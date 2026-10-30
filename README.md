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

This repository is already public. Review future changes before publishing.
The package is marked private and unlicensed to avoid npm publication or an
implied license grant.

Public standard runners are generally free, but an account restriction may still
prevent execution. A separately authorized public smoke run must establish actual
account feasibility. Never interpret blocked CI as passing or buy services to
work around it.

## Private/public CI boundary

The main Glitch ERP repository remains private. This public repository runs
independent synthetic tests only. Never mirror private source or Git history,
retrieve private build artifacts, copy ERP logs or data, or put private
credentials or privileged cross-repository tokens in public workflows.

A green public smoke run validates only the public runner and synthetic tests.
It does not validate the ERP build, database migrations, authorization, API,
Playwright regressions, PR #98, or deployment readiness. Those require separate
approved private CI or disposable local validation.
