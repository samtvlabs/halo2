(function() {var implementors = {
"halo2_gadgets":[["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + CurveAffine, SinsemillaChip, const K: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MAX_WORDS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/struct.MessagePiece.html\" title=\"struct halo2_gadgets::sinsemilla::MessagePiece\">MessagePiece</a>&lt;C, SinsemillaChip, K, MAX_WORDS&gt;<span class=\"where fmt-newline\">where\n    SinsemillaChip: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.SinsemillaInstructions.html\" title=\"trait halo2_gadgets::sinsemilla::SinsemillaInstructions\">SinsemillaInstructions</a>&lt;C, K, MAX_WORDS&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    SinsemillaChip::<a class=\"associatedtype\" href=\"halo2_gadgets/sinsemilla/trait.SinsemillaInstructions.html#associatedtype.MessagePiece\" title=\"type halo2_gadgets::sinsemilla::SinsemillaInstructions::MessagePiece\">MessagePiece</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + Field, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"halo2_gadgets/utilities/trait.FieldValue.html\" title=\"trait halo2_gadgets::utilities::FieldValue\">FieldValue</a>&lt;F&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/utilities/struct.RangeConstrained.html\" title=\"struct halo2_gadgets::utilities::RangeConstrained\">RangeConstrained</a>&lt;F, T&gt;"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + CurveAffine, EccChip: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.EccInstructions.html\" title=\"trait halo2_gadgets::ecc::EccInstructions\">EccInstructions</a>&lt;C&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/ecc/struct.NonIdentityPoint.html\" title=\"struct halo2_gadgets::ecc::NonIdentityPoint\">NonIdentityPoint</a>&lt;C, EccChip&gt;<span class=\"where fmt-newline\">where\n    EccChip::<a class=\"associatedtype\" href=\"halo2_gadgets/ecc/trait.EccInstructions.html#associatedtype.NonIdentityPoint\" title=\"type halo2_gadgets::ecc::EccInstructions::NonIdentityPoint\">NonIdentityPoint</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + CurveAffine, EccChip: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.EccInstructions.html\" title=\"trait halo2_gadgets::ecc::EccInstructions\">EccInstructions</a>&lt;C&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/ecc/struct.Point.html\" title=\"struct halo2_gadgets::ecc::Point\">Point</a>&lt;C, EccChip&gt;<span class=\"where fmt-newline\">where\n    EccChip::<a class=\"associatedtype\" href=\"halo2_gadgets/ecc/trait.EccInstructions.html#associatedtype.Point\" title=\"type halo2_gadgets::ecc::EccInstructions::Point\">Point</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/sha256/struct.BlockWord.html\" title=\"struct halo2_gadgets::sha256::BlockWord\">BlockWord</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + PrimeFieldBits, const WINDOW_NUM_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/utilities/decompose_running_sum/struct.RunningSumConfig.html\" title=\"struct halo2_gadgets::utilities::decompose_running_sum::RunningSumConfig\">RunningSumConfig</a>&lt;F, WINDOW_NUM_BITS&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + PrimeFieldBits, const K: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/utilities/lookup_range_check/struct.LookupRangeCheckConfig.html\" title=\"struct halo2_gadgets::utilities::lookup_range_check::LookupRangeCheckConfig\">LookupRangeCheckConfig</a>&lt;F, K&gt;"],["impl&lt;const L: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_gadgets/poseidon/primitives/struct.ConstantLength.html\" title=\"struct halo2_gadgets::poseidon::primitives::ConstantLength\">ConstantLength</a>&lt;L&gt;"]],
"halo2_proofs":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.InstanceQuery.html\" title=\"struct halo2_proofs::plonk::InstanceQuery\">InstanceQuery</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Column.html\" title=\"struct halo2_proofs::dev::metadata::Column\">Column</a>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.Challenge255.html\" title=\"struct halo2_proofs::transcript::Challenge255\">Challenge255</a>&lt;C&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.ExtendedLagrangeCoeff.html\" title=\"struct halo2_proofs::poly::ExtendedLagrangeCoeff\">ExtendedLagrangeCoeff</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Assigned.html\" title=\"enum halo2_proofs::plonk::Assigned\">Assigned</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Selector.html\" title=\"struct halo2_proofs::plonk::Selector\">Selector</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/poly/commitment/struct.Blind.html\" title=\"struct halo2_proofs::poly::commitment::Blind\">Blind</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.FixedQuery.html\" title=\"struct halo2_proofs::plonk::FixedQuery\">FixedQuery</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Challenge.html\" title=\"struct halo2_proofs::plonk::Challenge\">Challenge</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Fixed.html\" title=\"struct halo2_proofs::plonk::Fixed\">Fixed</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.Field.html\" title=\"trait halo2_proofs::arithmetic::Field\">Field</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"halo2_proofs/dev/enum.CellValue.html\" title=\"enum halo2_proofs::dev::CellValue\">CellValue</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.RegionStart.html\" title=\"struct halo2_proofs::circuit::RegionStart\">RegionStart</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.TableColumn.html\" title=\"struct halo2_proofs::plonk::TableColumn\">TableColumn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.Coeff.html\" title=\"struct halo2_proofs::poly::Coeff\">Coeff</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"halo2_proofs/enum.SerdeFormat.html\" title=\"enum halo2_proofs::SerdeFormat\">SerdeFormat</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Advice.html\" title=\"struct halo2_proofs::plonk::Advice\">Advice</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.Cell.html\" title=\"struct halo2_proofs::circuit::Cell\">Cell</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.Rotation.html\" title=\"struct halo2_proofs::poly::Rotation\">Rotation</a>"],["impl&lt;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.Value.html\" title=\"struct halo2_proofs::circuit::Value\">Value</a>&lt;V&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Any.html\" title=\"enum halo2_proofs::plonk::Any\">Any</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"halo2_proofs/circuit/layouter/enum.RegionColumn.html\" title=\"enum halo2_proofs::circuit::layouter::RegionColumn\">RegionColumn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.AdviceQuery.html\" title=\"struct halo2_proofs::plonk::AdviceQuery\">AdviceQuery</a>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"halo2_proofs/plonk/trait.ColumnType.html\" title=\"trait halo2_proofs::plonk::ColumnType\">ColumnType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Column.html\" title=\"struct halo2_proofs::plonk::Column\">Column</a>&lt;C&gt;"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.ChallengeScalar.html\" title=\"struct halo2_proofs::transcript::ChallengeScalar\">ChallengeScalar</a>&lt;C, T&gt;<span class=\"where fmt-newline\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.RegionIndex.html\" title=\"struct halo2_proofs::circuit::RegionIndex\">RegionIndex</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.LagrangeCoeff.html\" title=\"struct halo2_proofs::poly::LagrangeCoeff\">LagrangeCoeff</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Instance.html\" title=\"struct halo2_proofs::plonk::Instance\">Instance</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()