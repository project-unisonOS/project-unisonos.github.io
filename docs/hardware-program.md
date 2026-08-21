# Hardware program

<section class="story-hero" aria-labelledby="hardware-introduction">
  <p class="story-kicker">Electricity into useful private intelligence</p>
  <h2 id="hardware-introduction">A modular household system that can evolve with compute</h2>
  <p class="story-lead">Unison's hardware pathway connects today's developer systems to an open, serviceable personal node and a possible household rack built from components available in the 2027 and 2028 horizon.</p>
</section>

The hardware program treats compute, memory, storage, networking, radios,
sensors, security, power, cooling, enclosure, installation, and lifecycle
support as one integrated design problem. Stable software contracts allow each
physical implementation to evolve while local identity, context, policy, and
recovery remain continuous.

## Product tiers under evaluation

These tiers are design hypotheses that allow evidence to guide the eventual
product family.

| Tier | Purpose | Physical hypothesis | Qualification focus |
| --- | --- | --- | --- |
| Developer node | Software and adapter development | Existing PC or NUC | Reproducible setup, contract tests, and declared limits |
| Household node | Continuous private services and moderate local inference | Quiet single node or short-depth enclosure on ordinary household power | Sustained workload, reliability, energy, acoustics, thermals, and journeys |
| Household rack | Whole-house inference, resilient storage, networking, radios, and sensors | Modular rack or cabinet with installation requirements derived from measured load | Electrical, structural, ventilation, service, safety, and installer review |
| Lab and reference rack | Contributor development and qualification | Multiple accelerators, instrumentation, and hardware-in-the-loop fixtures | Repeatable configuration and revision-bound evidence capture |

The household rack may require a dedicated circuit, planned ventilation, heat
rejection, or professional installation. Measurements, electrical-code review,
and user research will determine which tier needs those provisions.

## Modular system boundaries

<div class="story-grid boundary-grid">
  <section><h3>Compute and memory</h3><p>Replaceable blades can combine general compute, accelerators, and memory profiles selected for qualified workloads and open driver support.</p></section>
  <section><h3>Resilient storage</h3><p>Redundant local media carries authoritative and derived data with independent backup, restore, replacement, and lifecycle policies.</p></section>
  <section><h3>Network and security</h3><p>Management, trusted service, guest, sensor, and external traffic receive explicit boundaries alongside firewall and hardware-root-of-trust services.</p></section>
  <section><h3>Radios and sensors</h3><p>Regionally appropriate, replaceable modules connect through a governed gateway with device identity, provenance, permissions, and revocation.</p></section>
  <section><h3>Power and cooling</h3><p>Metered distribution, protection, graceful shutdown, acoustics, directed airflow, and heat rejection are sized from idle, typical, burst, and sustained evidence.</p></section>
  <section><h3>Enclosure and service</h3><p>A distinct Unison enclosure supports accessible status, keyed replacement, independent isolation, front service, physical security, and safe installation.</p></section>
</div>

## Current concept envelope

The first architecture envelope models 180 watts at standby, 900 watts during
typical household operation, 1,800 watts during sustained inference, and a
2,400-watt 15-minute peak. Every watt entering the system eventually becomes
heat in the installation space. These values are planning inputs for circuit,
cooling, acoustic, and heat-reuse studies. They are not measurements or product
ratings.

The concept sets a provisional 45 dBA acoustic target and requires dedicated
circuit, professional installation, and heat rejection assessments. Incremental
nodes may operate in much smaller envelopes.

## Budgetary concept BOM

The hardware repository records a dated, machine-readable BOM. Its first
snapshot is an architecture budget rather than a vendor or component selection.

| Concept group | Quantity | Unit estimate | Extended estimate |
| --- | ---: | ---: | ---: |
| Branded chassis and enclosure | 1 | $900 | $900 |
| Compute and memory blade envelope | 2 | $3,500 | $7,000 |
| Redundant storage set | 1 | $2,200 | $2,200 |
| Network, security, and radio group | 1 | $1,200 | $1,200 |
| Power and cooling system | 1 | $1,800 | $1,800 |
| **Concept total** |  |  | **$13,100** |

The snapshot is dated August 15, 2026, in US dollars. It excludes installation,
tooling, certification, taxes, shipping, spares, and design labor. Future
snapshots will identify manufacturer part numbers, quantities, alternates,
lifecycle state, source, currency, price basis, date, lead time, region,
license constraints, and power and thermal contribution.

## Open design pathway

Custom electronics, PCBs, mechanical parts, and enclosure sources are intended
for publication in editable formats whenever licensing, safety, and third-party
rights permit. The planned source structure includes:

- system architecture, interface registry, and power and thermal budgets;
- normalized BOM sources, dated price snapshots, alternates, and lifecycle risk;
- KiCad electronics with generated fabrication outputs;
- editable mechanical and enclosure sources with neutral STEP exchange files;
- assembly, service, calibration, and qualification procedures; and
- revision-specific evidence indexes.

Hardware licensing remains an open project decision. The current repository
materials are governed by their license-status file. Open source availability
provides inspectability and collaboration while safety, RF, EMC, electrical,
and installation claims continue to require revision-specific evidence.

## How contributors can engage

Contributors can begin with requirements and interfaces before target component
selection. Useful paths include workload characterization, blade interfaces,
storage resilience, network segmentation, sensor gateways, hardware security,
power measurement, thermal modeling, acoustic design, enclosure ergonomics,
BOM automation, compliance planning, and accessible service interaction.

The [unison-hardware repository](https://github.com/project-unisonOS/unison-hardware)
contains the current system requirements, interfaces, BOM schema, enclosure
pathway, validation script, and qualification plans. Run its structural
validator before proposing interface or BOM changes.

<aside class="evidence-band" aria-label="Hardware program evidence boundary">
  <p><strong>Implemented:</strong> The hardware repository and hosted CI validate the requirements framework, interface registry, budgetary BOM structure, concept power and thermal envelope, enclosure requirements, and deferred qualification plan.</p>
  <p><strong>Being proven:</strong> Interim workstation inventory, sustained workloads, resilience, energy, thermal, acoustic, storage, networking, and representative journey measurements require physical evidence.</p>
  <p><strong>Envisioned:</strong> The branded modular household node and rack, custom open designs, hardware-rooted security, and professional installation pathway remain future product work.</p>
</aside>

<nav class="next-path" aria-label="Continue exploring Unison hardware">
  <a href="../developers/hardware/"><strong>Review hardware qualification</strong><span>See the first candidate boundary and physical evidence requirements.</span></a>
  <a href="../reference/compatibility/"><strong>Review compatibility tiers</strong><span>Understand reference, compatible, community-tested, and unsupported states.</span></a>
</nav>
