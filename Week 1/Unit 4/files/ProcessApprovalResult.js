var task = $.usertasks.usertask1.last;

var decision = {
	"User": task.processor,
	"Role": $.context.role,
	"Decision": task.decision,
	"Comment": $.context.comment
};

$.context.History.push(decision);
$.context.comment = "";


if (task.decision == "rework") {
    $.context.internal.step.isReapproval = true;
    $.context.internal.approvalStatus = "In Rework";
} else if (task.decision == "approve") {
    $.context.internal.approvalStatus = "Approved";
} else {
	$.context.internal.approvalStatus = "Rejected";
	$.context.internal.workflowTerminated = true;
}