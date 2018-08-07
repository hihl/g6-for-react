require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "2ba337543f6bbf1449a0";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/server/main.js")(__webpack_require__.s = "./src/server/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/assets.json":
/*!***************************************!*\
  !*** external "./client/assets.json" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./client/assets.json");

/***/ }),

/***/ "./src/server/config.json":
/*!********************************!*\
  !*** ./src/server/config.json ***!
  \********************************/
/*! exports provided: groups, default */
/***/ (function(module) {

module.exports = {"groups":[{"key":"gallery","display":"画廊","demos":[{"key":"gallery-tree-compact-box","display":"紧凑树","img":"gallery-tree-compact-box.png"},{"key":"gallery-tree-dendrogram","display":"系统树","img":"gallery-tree-dendrogram.png"},{"key":"gallery-tree-indented","display":"生态树","img":"gallery-tree-indented.png"},{"key":"gallery-tree-mindmap","display":"脑图树","img":"gallery-tree-mindmap.png"},{"key":"gallery-xiaomi","display":"小米关系图谱","img":"nAugyFgrbrUWPmDIDiQm.gif"},{"key":"gallery-university","display":"浙江省各城市大学分布","img":"JMNArSdFhvJpJtczjPry.gif"},{"key":"gallery-code-tree","display":"函数生成树","img":"gallery-code-tree.png"}]},{"key":"plugin","display":"插件","demos":[{"key":"plugin-archimeddean-spiral","display":"布局-阿基米德螺线","img":"plugin-archimeddean-spiral.png"},{"key":"plugin-circle","display":"布局-圆环","img":"plugin-circle.png"},{"key":"plugin-max-spanning-forest","display":"模版-最大生成森林","img":"plugin-max-spanning-forest.png"},{"key":"plugin-minimap","display":"缩略图","img":"plugin-minimap.png"},{"key":"plugin-quadratic-curve","display":"二阶贝塞尔曲线","img":"plugin-quadratic-curve.png"}]},{"key":"basic","display":"基础","demos":[{"key":"graph-animate","display":"图-动画","img":"cpqeSRuqVHbOCSyZfrLd.gif"},{"key":"interaction-behaviour-mode","display":"交互-模式与行为","img":"Interaction-behaviour-mode.png"},{"key":"custom-anchor","display":"自定义-锚点","img":"custom-anchor.png"},{"key":"custom-draw","display":"自定义-绘制","img":"custom-draw.png"},{"key":"custom-enter-leave-animate","display":"自定义-出入场动画","img":"bzGIQuRixNzYXKulAqdM.gif"},{"key":"custom-flowing-edge","display":"自定义-流动效果线条","img":"custom-flowing-edge.png"},{"key":"custom-inherit","display":"自定义-继承","img":"custom-inherit.png"},{"key":"default-edge","display":"默认-边","img":"default-edge.png"},{"key":"default-group","display":"默认-群组","img":"default-group.png"},{"key":"default-node","display":"默认-节点","img":"default-node.png"},{"key":"interaction-pan-node","display":"交互-拖拽节点","img":"Interaction-pan-node.png"},{"key":"graph-change-size","display":"图-更改画布尺寸","img":"graph-change-size.png"},{"key":"graph-zIndex","display":"图-调整图层","img":"graph-zIndex.png"},{"key":"layout-composite","display":"布局-综合","img":"layout-composite.png"},{"key":"quick-net","display":"快速上手-网图","img":"quick-net.png"},{"key":"quick-tree","display":"快速上手-树图","img":"quick-tree.png"},{"key":"viewport-fitView","display":"视口-自适应","img":"viewport-fitView.png"},{"key":"viewport-focus","display":"视口-聚焦","img":"viewport-focus.png"},{"key":"viewport-translate","display":"视口-平移","img":"viewport-translate.png"},{"key":"viewport-zoom","display":"视口-缩放","img":"viewport-zoom.png"}]}]};

/***/ }),

/***/ "./src/server/main.js":
/*!****************************!*\
  !*** ./src/server/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_assets_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/assets.json */ "./client/assets.json");
/* harmony import */ var _client_assets_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_client_assets_json__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.json */ "./src/server/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/server/config.json", 1);
/* harmony import */ var _previews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./previews */ "./src/server/previews.js");









const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = process.env.port || 3005; // 默认端口

function renderPreview(group, page) {
  const preview = _previews__WEBPACK_IMPORTED_MODULE_7__["default"][group][page];
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${preview.title}</title>
    <style>::-webkit-scrollbar{display:none;}html,body{overflow:hidden;margin:0;}</style>
    <script src="//g.alicdn.com/bizcharts/io-asserts/3.1.2/react16.0.0.production.min.js"></script>
    <script src="//g.alicdn.com/bizcharts/io-asserts/3.1.2/react-dom16.0.0.production.min.js"></script>
    <script src="//cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
    <script src="/scripts/g6-for-react.min.js"></script>
  </head>
<body>
<div id="mountNode"></div>
<script>/*Fixing iframe window.innerHeight 0 issue in Safari*/document.body.clientHeight;</script>
${preview.code}
</body>
</html>
  `;
}

function renderView(conf, page) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>G6-for-React</title>
      <meta charset="utf-8>
      <meta http-equiv="content-type" content="text/html;charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="${conf[page].css}">
      <script src="/dll/vendor1.js"></script>
      <script src="/dll/vendor2.js"></script>
      <script>
        window.groups = ${JSON.stringify(conf.groups)};
        window.previewCode = "${encodeURIComponent(conf.previewCode)}";
      </script>
    </head>
    <body>
      <div id="app">
      </div>
      <script src="${conf[page].js}"></script>
    </body>
  </html>
  `;
}

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'client')));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '..', 'public')));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({ extended: true }));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());
app.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()());

app.get('/', (req, res) => {
  res.send(renderView(Object.assign({}, _config_json__WEBPACK_IMPORTED_MODULE_6__, _client_assets_json__WEBPACK_IMPORTED_MODULE_5___default.a), 'home'));
});

app.get('/demo/:group/:page', (req, res) => {
  const { group, page } = req.params;
  res.send(renderView(Object.assign({ previewCode: renderPreview(group, page) }, _config_json__WEBPACK_IMPORTED_MODULE_6__, _client_assets_json__WEBPACK_IMPORTED_MODULE_5___default.a), 'demo'));
});

app.listen(port, () => {
  console.log(`The server is running at http://127.0.0.1:${port}/`);
});

/***/ }),

/***/ "./src/server/previews.js":
/*!********************************!*\
  !*** ./src/server/previews.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  basic: {
    "interaction-pan-node": {
      title: "交互-拖拽节点",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  const width = window.innerWidth;
  const height = window.innerHeight;

  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          }, {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }]
        }
      };
    }
  
    onNodeDragstart(ev) {
      const item = ev.item;
      const model = item.getModel();
      this.node = item;
      this.dx = model.x - ev.x;
      this.dy = model.y - ev.y;
    }
  
    onNodeDrag(ev) {
      this.node && this.graph.update(this.node, {
        x: ev.x + this.dx,
        y: ev.y + this.dy
      });
    }
  
    onNodeDragend() {
      this.node = undefined;
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph 
              width={width} 
              height={height} 
              data={this.state.data} 
              onGetG6Instance={graph => this.graph = graph}
              onNodeDragstart={this.onNodeDragstart.bind(this)}
              onNodeDrag={this.onNodeDrag.bind(this)}
              onNodeDragend={this.onNodeDragend.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "interaction-behaviour-mode": {
      title: "交互-模式与行为",
      code: `<script type="text/babel">
  const { Graph, G6, NodeMapper, EdgeMapper } = window['g6-for-react'];
  // 注册鼠标进入节点变红的行为
  G6.registerBehaviour('mouseEnterFillRed', function(graph) {
    graph.behaviourOn('node:mouseenter', function(ev) {
      graph.update(ev.item, {
        color: 'red'
      });
    });
  });

  // 注册鼠标进入节点变绿的行为
  G6.registerBehaviour('mouseEnterFillGreen', function(graph) {
    graph.behaviourOn('node:mouseenter', function(ev) {
      graph.update(ev.item, {
        color: 'green'
      });
    });
  });

  // 注册鼠标移出节点变原色的行为
  G6.registerBehaviour('mouseLeaveResetFill', function(graph) {
    graph.behaviourOn('node:mouseleave', function(ev) {
      graph.update(ev.item, {
        color: '#1890FF'
      });
    });
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: '事件',
            x: 80,
            y: 150
          }, {
            id: '行为',
            x: 200,
            y: 150
          }, {
            id: '模式',
            x: 320,
            y: 150
          }],
          edges: [{
            source: '事件',
            target: '行为',
            label: '组成'
          }, {
            source: '行为',
            target: '模式',
            label: '组成'
          }]
        },
        mode: 'red'
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <div><button onClick={() => {
              if (this.state.mode === 'red') {
                this.setState({ mode: 'green' });
              } else {
                this.setState({ mode: 'red' });
              }
            }}>切换模式</button></div>
            <Graph 
              fitView="cc" 
              height={window.innerHeight} 
              data={this.state.data}
              modes={{
                red: ['mouseEnterFillRed', 'mouseLeaveResetFill'],
                green: ['mouseEnterFillGreen', 'mouseLeaveResetFill']
              }}
              mode={this.state.mode}
              onGetG6Instance={graph => this.graph = graph}
            >
              <NodeMapper label={model => model.id}/>
              <EdgeMapper style={() => ({ endArrow: true })}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-anchor": {
      title: "自定义-锚点",
      code: `<script type="text/babel">
  const { Graph, G6, NodeMapper } = window['g6-for-react'];
  // 设置右边中点为连接锚点
  G6.registerNode('node2', {
    anchor: [
    // 右边中点
    [1, 0.5]]
  });

  // 设置相交盒模型为矩形
  G6.registerNode('node3', {
    anchor: {
      intersectBox: 'rect'
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 250,
            y: 250
          }, {
            id: 'node2',
            x: 250,
            y: 100
          }, {
            id: 'node3',
            x: 50,
            y: 400
          }, {
            id: 'node5',
            x: 450,
            y: 400
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }, {
            id: 'edge2',
            target: 'node3',
            source: 'node1'
          }, {
            id: 'edge4',
            target: 'node5',
            source: 'node1'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}>
              <NodeMapper label={model => model.id} shape={model => model.id}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-draw": {
      title: "自定义-绘制",
      code: `<script type="text/babel">
  const { Graph, G6 } = window['g6-for-react'];
  G6.registerNode('customNode', {
    draw: item => {
      const group = item.getGraphicGroup();
      group.addShape('text', {
        attrs: {
          x: 100,
          y: 100,
          fill: '#333',
          text: '我是一个自定义节点，有下面那个方形和我自己组成'
        }
      });
      return group.addShape('rect', {
        attrs: {
          x: 100,
          y: 100,
          width: 100,
          height: 100,
          stroke: 'red'
        }
      });
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            "shape": "customNode",
            "id": "node1"
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-enter-leave-animate": {
      title: "自定义-出入场动画",
      code: `<script type="text/babel">
  const { Graph, G6 } = window['g6-for-react'];
  G6.registerNode('customNode', {
    // 自定义入场动画
    enterAnimate: function enterAnimate(item) {
      const group = item.getGraphicGroup();
      const model = item.getModel();
      const x = model.x;
      const y = model.y;
  
      group.transform([['t', -x, -y], ['s', 0.01, 0.01], ['t', x, y]]);
      !group.get('destroyed') && group.animate({
        transform: [['t', -x, -y], ['s', 100, 100], ['t', x, y]]
      }, 450, 'easeBackOut');
    },
  
    // 自定义出场动画
    leaveAnimate: function leaveAnimate(item) {
      const group = item.getGraphicGroup();
      const model = item.getModel();
      const x = model.x;
      const y = model.y;
      group && !group.get('destroyed') && group.animate({
        transform: [['t', -x, -y], ['s', 0.01, 0.01], ['t', x, y]]
      }, 450, 'easeCircleOut', function() {
        group.remove();
      });
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            "shape": "customNode",
            "id": "node1",
            x: 100,
            y: 100
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} animate data={this.state.data}/>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ data: { nodes: [] } });
      }, 800);
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-flowing-edge": {
      title: "自定义-流动效果线条",
      code: `<script type="text/babel">
  const { Graph, G6, EdgeMapper } = window['g6-for-react'];
  G6.registerEdge('flowingEdge', {
    afterDraw: function afterDraw(item) {
      var keyShape = item.getKeyShape();
      keyShape.attr('lineDash', [10, 10]);
      keyShape.attr('lineDashOffset', 0);
      keyShape.animate({
        lineDashOffset: -20,
        repeat: true
      }, 500);
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          }, {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            target: 'node2',
            source: 'node1'
          }]
        },
        flowingEdge: true
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}>
              { this.state.flowingEdge && <EdgeMapper shape="flowingEdge"/> }
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-inherit": {
      title: "自定义-继承",
      code: `<script type="text/babel">
  const { Graph, G6 } = window['g6-for-react'];
  G6.registerNode('rect', {
    draw: function draw(item) {
      var group = item.getGraphicGroup();
      this.drawText(item);
      return group.addShape('rect', {
        attrs: {
          x: 100,
          y: 100,
          width: 100,
          height: 100,
          stroke: 'red'
        }
      });
    },
    drawText: function drawText(item) {
      var group = item.getGraphicGroup();
      var text = this.getText();
      group.addShape('text', {
        attrs: {
          x: 100,
          y: 100,
          fill: '#333',
          text: text
        }
      });
    },
    getText: function getText() {
      return '我是一个节点 rect';
    }
  });
  
  G6.registerNode('custom', {
    getText: function getText() {
      return '我是一个自定义节点，\n继承于 rect';
    }
  }, 'rect');
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 50,
            y: 50,
            shape: 'rect'
          }, {
            id: 'node2',
            x: 100,
            y: 200,
            shape: 'custom'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "graph-animate": {
      title: "图-动画",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fitView: 'cc',
        height: window.innerHeight,
        animate: true,
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            label: '节点1'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.graph.update('node1', {
          x: 50,
          y: 50
        });
      }, 800);
      setTimeout(() => {
        this.setState({ data: { nodes: [{
          id: 'node1',
          x: 200,
          y: 50,
          label: '节点1'
        }] } });
      }, 1400);
      setTimeout(() => {
        this.setState({ data: { nodes: [] } });
      }, 2000);
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-node": {
      title: "默认-边",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            size: 40,
            label: '节点1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            color: '#eb2f96',
            label: '节点2'
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-edge": {
      title: '默认-边',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          }, {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            source: 'node1',
            target: 'node2',
            label: '普通边'
          }, {
            source: 'node1',
            target: {
              x: 100,
              y: 50
            },
            label: '单向悬空边'
          }, {
            source: {
              x: 150,
              y: 50
            },
            target: {
              x: 150,
              y: 100
            },
            label: '双向悬空边'
          }, {
            source: 'node1',
            target: {
              x: 100,
              y: 280
            },
            style: {
              endArrow: true
            },
            label: '箭头'
          }, {
            source: 'node1',
            target: {
              x: 10,
              y: 200
            },
            sizesize: 4,
            label: '粗细'
          }, {
            source: 'node2',
            target: {
              x: 400,
              y: 200
            },
            color: 'red',
            label: '颜色'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-group": {
      title: '默认-分组',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            label: '节点1',
            parent: 'group1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            label: '节点2',
            parent: 'group1'
          }, {
            id: 'node3',
            x: 100,
            y: 300,
            label: '节点3',
            parent: 'group2'
          }, {
            id: 'node4',
            x: 300,
            y: 300,
            label: '节点4',
            parent: 'group2'
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }],
          groups: [{
            id: 'group1',
            label: '展开群组'
          }, {
            id: 'group2',
            label: '折叠群组',
            collapsed: true
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "graph-change-size": {
      title: '图-更改画布尺寸',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            size: 40,
            label: '节点1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            color: '#eb2f96',
            label: '节点2'
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }]
        },
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <div>
              <button onClick={() => this.setState({ width: 250, height: 250 })}>250 * 250</button>
              <button onClick={() => this.setState({ width: 350, height: 350 })}>350 * 350</button>
              <button onClick={() => this.setState({ width: 400, height: 400 })}>400 * 400</button>
            </div>
            <Graph forceFit={true} css={{ border: '1px solid red' }} fitView="cc" animate={true} width={this.state.width} height={this.state.height} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "graph-zIndex": {
      title: '图-调整图层',
      code: `<script type="text/babel">
  const { Graph, NodeMapper } = window['g6-for-react'];
  const nodes = [];
  const width = window.innerWidth;
  const height = window.innerHeight;
  const num = 500;
  for (let index = 0; index < num; index++) {
    nodes.push({
      x: width * Math.random(),
      y: height * Math.random()
    });
  }
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes
        }
      };
    }
  
    onNodeMouseenter(e) {
      const item = e.item;
      this.graph.toFront(item);
      this.graph.update(item, {
        style: {
          fill: 'red'
        }
      });
    };
  
    onNodeMouseleave(e) {
      const item = e.item;
      this.graph.toBack(item);
      this.graph.update(item, {
        style: {
          fill: '#1890FF'
        }
      });
    };
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph 
              width={width} 
              height={height} 
              data={this.state.data} 
              onGetG6Instance={graph => this.graph = graph}
              onNodeMouseenter={this.onNodeMouseenter.bind(this)}
              onNodeMouseleave={this.onNodeMouseleave.bind(this)}
            >
              <NodeMapper style={{ fillOpacity: 0.8 }}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "layout-composite": {
      title: '布局-综合',
      code: `<script src="https://unpkg.com/@antv/g6@2.0.4/build/plugins.js"></script>
<script type="text/babel">
  const { Graph, Layout, G6 } = window['g6-for-react'];
  const Util = G6.Util;
  const data = Util.createChainData(50);
  const setCol = 5;

  // 布局生成器
  const layoutCreator = col => nodes => {
    const hgap = 76;
    const vgap = 50;

    nodes.forEach(function(node, index) {
      if (parseInt(index / col) % 2 === 0) {
        node.x = (col - index % col) * hgap;
      } else {
        node.x = index % col * hgap + hgap;
      }
      node.y = parseInt(index / col) * vgap + vgap / 2;
    });
  };
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data} modes={{ default: ['panNode'] }}>
              <Layout processer={layoutCreator(setCol)}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
  }
});

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map